var Dashboard = function() {

     var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        $('.form-input-styled').uniform();
    };

    var getId = function () {
        return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
    };

     var _buildOrg = function(datascource) {
        var oc = $('#orgchart-container').orgchart({
            'data': datascource,
            'chartClass': 'edit-state',
            'nodeContent': 'title',
            'nodeID': 'id',
            'exportButton': false,
            'exportFilename': 'SportsChart',
            'parentNodeSymbol': 'fa-th-large'
            /*'createNode': function ($node, data) {
                console.log(data);
                $node[0].id = getId();
            }*/
        });
        oc.$chartContainer.on('click', '.node', function () {
            var $this = $(this);
            $('#selected-node').val($this.find('.title').text()).data('node', $this);
            var position = $this.find('.content').text();
            $("#position-node").val(position);
            $("#parent-id").val($this.attr('id'));
        });
        oc.$chartContainer.on('click', '.orgchart', function (event) {
            if (!$(event.target).closest('.node').length) {
                $('#selected-node').val('');
            }
        });
        $('input[name="chart-state"]').on('click', function () {
            $('.orgchart').toggleClass('edit-state', this.value !== 'view');
            $('#edit-panel').toggleClass('edit-state', this.value === 'view');
            if ($(this).val() === 'edit') {
                $('.orgchart').find('tr').removeClass('hidden')
                    .find('td').removeClass('hidden')
                    .find('.node').removeClass('slide-up slide-down slide-right slide-left');
            } else {
                $('#btn-reset').trigger('click');
            }
        });
        $('input[name="node-type"]').on('click', function () {
            var $this = $(this);
            if ($this.val() === 'parent') {
                $('#edit-panel').addClass('edit-parent-node');
                $('#new-nodelist').children(':gt(0)').remove();
            } else {
                $('#edit-panel').removeClass('edit-parent-node');
            }
        });
        $('#btn-remove-input').on('click', function () {
            var inputs = $('#new-nodelist').children('li');
            if (inputs.length > 1) {
                inputs.last().remove();
            }
        });
        $('#btn-add-nodes').on('click', function () {
            var $chartContainer = $('#orgchart-container');
            var nodeVals = [];
            var position = $("#position").find(":selected").text();
            var positionid = $("#position").val();
            var nodev = $('#selected-node').val();
            var parent_id = $('#parent-id').val();
            var userMail = $('.new-node-email').val();
            var newnodev = $('.new-node').val();
            $("#editable1").append('<tr> <td> '+ newnodev + ' -'+ position +' </td> <td> <div class="col-md-8"> Day </div> </td> <td> <div class="col-md-8"> '+ nodev +' </div> </td> <td> <div class="col-md-8">Email </div> </td> </tr>');
            $('#new-nodelist').find('.new-node').each(function (index, item) {
                var validVal = item.value.trim();
                if (validVal.length) {
                    nodeVals.push(validVal);
                }
            });
            var $node = $('#selected-node').data('node');
            if (!nodeVals.length) {
                alert('Please input value for new node');
                return;
            }
            var nodeType = $('input[name="node-type"]:checked');
            if (!nodeType.length) {
                alert('Please select a node type');
                return;
            }
            if (nodeType.val() !== 'parent' && !$('.orgchart').length) {
                alert('Please creat the root node firstly when you want to build up the orgchart from the scratch');
                return;
            }
            if (nodeType.val() !== 'parent' && !$node) {
                alert('Please select one node in orgchart');
                return;
            }
            if (nodeType.val() === 'parent') {
                if (!$chartContainer.children('.orgchart').length) {// if the original chart has been deleted
                    oc = $chartContainer.orgchart({
                        'data': {'name': nodeVals[0]},
                        'exportButton': true,
                        'exportFilename': 'SportsChart',
                        'nodeContent': 'title',
                        'parentNodeSymbol': 'fa-th-large',
                        'createNode': function ($node, data) {
                            $node[0].id = getId();
                        }
                    });
                    oc.$chart.addClass('view-state');
                } else {
                    oc.addParent($chartContainer.find('.node:first'), {'name': nodeVals[0], 'id': getId()});
                }
            } else if (nodeType.val() === 'siblings') {
                if ($node[0].id === oc.$chart.find('.node:first')[0].id) {
                    alert('You are not allowed to directly add sibling nodes to root node');
                    return;
                }
                oc.addSiblings($node, nodeVals.map(function (item) {
                    return {'name': item, 'title': position, 'relationship': '110', 'id': getId()};
                }));
            } else {
                var hasChild = $node.parent().attr('colspan') > 0 ? true : false;
                if (!hasChild) {
                    var rel = nodeVals.length > 1 ? '110' : '100';
                    oc.addChildren($node, nodeVals.map(function (item) {
                        return {'name': item, 'title': position, 'relationship': rel, 'id': getId()};
                    }));
                } else {
                    oc.addSiblings($node.closest('tr').siblings('.nodes').find('.node:first'), nodeVals.map(function (item) {
                        return {'name': item, 'title': position, 'relationship': '110', 'id': getId()};
                    }));
                }
            }
            $.ajax({
                url:base_url+'project/newOgchartUser',
                method: 'post',
                data: {userName : newnodev ,parentId: parent_id,userMail:userMail,position : positionid },
                dataType: 'json',
                success: function(response){
                    alert("inserted");
                }
            });
        });

        $('#btn-delete-nodes').on('click', function () {
            var $node = $('#selected-node').data('node');
            if (!$node) {
                alert('Please select one node in orgchart');
                return;
            } else if ($node[0] === $('.orgchart').find('.node:first')[0]) {
                if (!window.confirm('Are you sure you want to delete the whole chart?')) {
                    return;
                }
            }
            oc.removeNodes($node);
            $('#selected-node').val('').data('node', null);
        });
        $('#btn-report-path').on('click', function () {
            var $selected = $('#orgchart-container').find('.node.focused');
            if ($selected.length) {
                $selected.parents('.nodes').children(':has(.focused)').find('.node:first').each(function (index, superior) {
                    if (!$(superior).find('.horizontalEdge:first').closest('table').parent().siblings().is('.hidden')) {
                        $(superior).find('.horizontalEdge:first').trigger('click');
                    }
                });
                $(this).prop('disabled', true);
            } else {
                alert('please select the node firstly');
            }
        });
        $('#btn-reset').on('click', function () {
            $('#orgchart-container').find('.hidden').removeClass('hidden')
                .end().find('.slide-up, .slide-right, .slide-left, .focused').removeClass('slide-up slide-right slide-left focused');
            $('#btn-report-path').prop('disabled', false);
            $('#selected-node').val('');
        });

        $(document).on("click","#saveProject",function(){
            var post =$("#position-node").val();
            var employee =$("#selected-node").val();
            var sector = $("#sector").val();
            var unit = $("#units").val();
            $("#p-team").append('<div class="col-xl-4 col-md-6">'+
            '<div class="card card-body">'+
                '<div class="media">'+
                    '<div class="card-img-actions d-inline-block">'+
                        '<img class="img-fluid rounded-circle" src="'+base_url+'assets/img/avatar/av5.png" width="42" height="42" alt="">'+
                        '<div class="card-img-actions-overlay card-img rounded-circle"><a href="#" class="btn btn-outline bg-white text-white border-white border-2 btn-icon rounded-round"><i class="icon-bin"></i></a></div></div>'+
                    '<div class="media-body">  <input type="hidden" class="form-control" value="1" name="userid[]"><h6 class="mb-0">'+employee+'</h6><span class="text-muted">'+post+'</span></div></div></div></div>' );
        });  
    };
 
    var _componentModal = function(onload,p,pc) {
        if(onload){
            $('.hmwks-modal.show-on-load').modal('show');
        }
        if (pc.length) {
            pc.slick({
            dots: true,
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false
            });
            p.on('shown.bs.modal', function (e) {
                pc.slick('setPosition');
            });
        }
    };

    var _componentPikaday = function () {
        if (typeof Pikaday == 'undefined') {
            console.warn('Warning - Pikaday.js is not loaded.');
            return;
        }
        p_data_date = new Pikaday({
            field:$('#datepicker')[0],
            format: 'DD-MMM-YYYY',
            onSelect: function() {
                //console.log(this.getMoment().format('Do MMMM YYYY'));
            }
        });
    };

    var _componentRepeater = function(){
        $('.repeater-default').repeater({
            isFirstItemUndeletable: true,
            show: function () {
                $(this).slideDown();
                $('#hmwks-cnp .hmwks-slider-w').find('.slick-slide.slick-active').css("padding-bottom",'80px');
                $('#hmwks-cnp .hmwks-slider-w')[0].slick.animateHeight();
            },
            hide: function (deleteElement) {
                $(this).slideUp(deleteElement);
                $('#hmwks-cnp .hmwks-slider-w').find('.slick-slide.slick-active').css("padding-bottom",'');
                $('#hmwks-cnp .hmwks-slider-w')[0].slick.animateHeight();
            }
        });
    };

    var _checkboxStatusBO = function(){
        $(document).on("click",".rd_benefit_org",function(){
            if($(this).val()==1){
                $("#rd_benefit_org_txt").show();
            }else{
                $("#rd_benefit_org_txt").hide();
            }
        });
    };

    var _checkboxStatusR = function(){
        $(document).on("click",".rd_resolvable",function(){
            if($(this).val()==1){
                $("#rd_resolvable_txt").show();
            }else{
                $("#rd_resolvable_txt").hide();
            }
        });
    };
    var _componentMultiselect = function() {
        if (!$().multiselect) {
            console.warn('Warning - bootstrap-multiselect.js is not loaded.');
            return;
        }
        $('.multiselect').multiselect({
            maxHeight: 120
        });
    };
    return {
        init: function(ogchart) {
            _componentUniform();
            _componentModal(true,$('#hmwks-cnp'),$('#hmwks-cnp .hmwks-slider-w'));
            _componentModal(false,$('#hmwks-adtm'),$('#hmwks-adtm .hmwks-slider-w'));
            _checkboxStatusBO();
            _checkboxStatusR();
            _componentPikaday();
            _componentRepeater();
            _buildOrg(ogchart);
            _componentMultiselect();
        }

    }
}();


// Initialize module
// ------------------------------


var StatAnalysis = function() {
    var _componentWizard = function() {
        if (!$().steps) {
            console.warn('Warning - steps.min.js is not loaded.');
            return;
        }
        $('.steps-state-saving').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Save <i class="icon-arrow-right14 ml-2" />'
            },
            transitionEffect: 'fade',
            // saveState: true,
            autoFocus: true,
            onFinished: function (event, currentIndex) {
                window.location.href = base_url+'projects/02849';
            }
        });
    };
    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-blue'
        });
    };
    var _componentSortable = function() {
        if (!$().sortable) {
            console.warn('Warning - jQuery UI components are not loaded.');
            return;
        }
        $(".sortable-list").sortable({
            connectWith: ".connectList",
            items: ".item",
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8,
            helper: function (e, li) {
                copyHelper = li.clone().insertAfter(li);
                return li.clone();
            },
            start: function (event, ui) {
                item = ui.item;
                newList = oldList = ui.item.parent();
            },
            change: function (event, ui) {
                if (ui.sender) {
                    newList = ui.placeholder.parent();
                }
            },
            over: function (event, ui) {
                $(ui.item).css("width", "auto");
                $(ui.item).addClass("selected");
                $(ui.item).find("i").remove();
            },
            stop: function () {
                copyHelper && copyHelper.remove();
            }
        });
        $(".connectList").sortable({
            receive: function (e, ui) {
                copyHelper = null;
            }
        });

        // $(".sortable-list").sortable({
        //     connectWith: ".connectList",
        //     items: ".item",
        //     start: function(e, li) { 
        //         $(li.item).css("width","auto");
        //     },
        //     remove: function (e, li) {
        //         li.item.clone().insertAfter(li.item);
        //         $(this).sortable('cancel');
        //         return li.item.clone();
        //     }
        // }).disableSelection();
        // $('.sortable-list').bind('sortstop', function(event, ui) {
        //     $(ui.item[0]).clone(true).appendTo('.connectList');
        //     $(this).sortable('cancel');
        // });
    };
    var _componentAddOp = function(s,t){
        s.click(function(){
            $c =  '<div class="col-12 col-md-4 col-lg-4"><div class="card"><div class="card-header p-3 text-center"><h6 class="card-title text-uppercase">'+$("#strat_name").val()+'</h6>'+
                    '<small><i class="icon-point-up mr-1"></i><b>Drag and Drop outcome(s) from above list</b></small></div><div class="card-body"><div class="sortable-list connectList strategy-list"></div></div></div></div>';
            t.append($c);
            _componentSortable();
        });
    };

    var _componentAddCriteria = function(s,t){
        s.click(function(){
            $crit = $("#crit_name").val();
            $s_opts = $('#dif_opt').val(); 
            t.each(function(index,v){
                $opts = '';
                jQuery.each($s_opts,function(i,v){
                    $opts += '<div class="form-check form-check-inline"><label class="form-check-label"><input type="radio" name="new_c['+index+']['+index+']" class="form-input-styled" data-fouc>'+v+'</label></div>';
                });
                $c = ' <li><div class="data-details-des">'+ $crit+'<div class="form-group mb-0">'+$opts+'</div></div></li>';
                $(this).append($c);
            });
            _componentUniform();
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

    var _singleCheck = function(c){
        var checkboxes = document.getElementsByName('m_e_s')
        checkboxes.forEach((item) => {
            if (item !== c) item.checked = false; $.uniform.update(item);
        })
    }
    return {
        init: function() {
            _componentWizard();
            _componentUniform();
            _componentSortable();
            _componentAddOp($("#add-strategy"),$("#strat-groups"));
            _componentAddCriteria($("#add_crit"),$(".list-criteria"));
            _componentModal(false,$('#add-criteria'),$('#add-criteria .hmwks-slider-w'));
        },
        check : function(t){
            _singleCheck(t);
        }
    }
}();
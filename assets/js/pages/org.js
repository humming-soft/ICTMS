var Org = function() {

    var getId = function () {
        return (new Date().getTime()) * 1000 + Math.floor(Math.random() * 1001);
    };

     var _buildOrg = function(datascource) {
        var oc = $('#orgchart-container').orgchart({
            'data': datascource,
            'chartClass': 'edit-state',
            'nodeContent': 'title',
            'exportButton': false,
            'exportFilename': 'SportsChart',
            'parentNodeSymbol': 'fa-th-large',
            'createNode': function ($node, data) {
                $node[0].id = getId();
            }
        });

        oc.$chartContainer.on('click', '.node', function () {
            var $this = $(this);
            $('#selected-node').val($this.find('.title').text()).data('node', $this);
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

        /*  $('#btn-add-input').on('click', function() {
         $('#new-nodelist').append('<li><input type="text" class="new-node"></li>');
         });*/

        $('#btn-remove-input').on('click', function () {
            var inputs = $('#new-nodelist').children('li');
            if (inputs.length > 1) {
                inputs.last().remove();
            }
        });

        $('#btn-add-nodes').on('click', function () {

            var $chartContainer = $('#orgchart-container');
            var nodeVals = [];
            var position = $("#position").val();
            var nodev = $('#selected-node').val();
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

    };
    return {
        init: function() {
            var datascource = {
                'name': 'Norehan binti Yahya',
                'title': 'General manager',
                'children': [
                    {
                        'name': 'Mohd Nizam bin Morad', 'title': 'Department manager',
                        'children': [
                            {'name': 'Mazmi bin Mohamad', 'title': 'Senior engineer'},
                            {
                                'name': 'Roslan bin Ramli', 'title': 'Senior engineer',
                                'children': [
                                    {'name': 'Syafiqa binti Talib', 'title': 'Engineer'},
                                    {'name': 'Faizal bin Osman', 'title': 'Engineer'},
                                    {'name': 'Zulhaimi bin Mat Hussin', 'title': 'Engineer'}
                                ]
                            }
                        ]
                    },
                    {
                        'name': 'Marni binti Hasmar', 'title': 'Department manager',
                        'children': [
                            {'name': 'Mat Hussin', 'title': 'Senior engineer'},
                            {
                                'name': 'Roslan bin Ramli', 'title': 'Senior engineer',
                                'children': [
                                    {'name': 'Xiang Xiang', 'title': 'UE engineer'},
                                    {'name': 'Maszlee bin Malik', 'title': 'Engineer'},
                                    {'name': 'Rohani binti Karim', 'title': 'Engineer'}
                                ]
                            }
                        ]
                    }
                ]
            };
            _buildOrg(datascource);
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Org.init();
});
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
                finish: 'Submit form <i class="icon-arrow-right14 ml-2" />'
            },
            transitionEffect: 'fade',
            saveState: true,
            autoFocus: true,
            onFinished: function (event, currentIndex) {
                alert('Form submitted.');
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
    return {
        init: function() {
            _componentWizard();
            _componentUniform();
            _componentSortable();
            _componentAddOp($("#add-strategy"),$("#strat-groups"));
        }
    }
}();
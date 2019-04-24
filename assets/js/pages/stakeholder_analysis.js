// Default resources are included in grapheditor resources
mxLoadResources = false;
var StakeholderAnalysis = function() {
    var _newTarget = function() {
        $(document).on("click", "#addNewTarget", function () {
            var target_name = $("#target_name").val();
            var target = $("#target_group option:selected").text();
            $('.target').append(' <tr> <td width="15%" > <div class="d-flex align-items-center"> <div> <a href="#" class="text-default font-weight-semibold">' +
                '</a> ' + target_name +' <div class="text-muted font-size-sm">' + target +' </div> </div> </div> </td> <td> <ul class="list list-unstyled mb-3 mo-ul"></ul><div class="input-group">' +
                ' <input type="text" class="form-control" placeholder="Enter Terms of reference.."> <span class="input-group-append">' +
                '<button class="btn btn-outline-info task-btn-add" type="button">Add</button></span> </div> </td> <td> <ul class="list list-unstyled mb-3 mo-ul"></ul><div class="input-group">' +
                ' <input type="text" class="form-control" placeholder="Enter Impacts.."> <span class="input-group-append">' +
                '<button class="btn btn-outline-info task-btn-add" type="button">Add</button></span> </div> </td> </tr>');
        });
    };
    var _new_bc = function(){

        $(document).on("click",".task-btn-add", function(){
            var v = $(this).parent().parent().find('input[type=text]').val();
            $(this).parent().parent().parent().find("ul.mo-ul").append('<li class="mo-li">'+
            '<i class="icon-arrow-right5 mr-2"></i>'+v+'<div class="todo-task-buttons">'+
                '<a class="task-btn-edit no-loader" data-target="#taskModal" data-toggle="modal" href="javascript:;"><i class="icon-pencil7"></i></a>'+
                '<a class="task-btn-delete text-danger no-loader" href="javascript:;"><i class="icon-bin"></i></a></div></li>');
                $(this).parent().parent().find('input[type=text]').val("");
        });
    };
    var _bc_delete = function(){
        $(document).on("click",".task-btn-delete", function(){
            $(this).parent().parent().remove();
        });
    };
    var _componentFootable = function() {
        if (!$().footable) {
            console.warn('Warning - footable.min.js is not loaded.');
            return;
        }
	    $('.table-togglable').footable();
    };
    return {
        init: function(ogchart) {
            _componentFootable();
            _newTarget();
            _new_bc();
            _bc_delete();
        }

    }
}();
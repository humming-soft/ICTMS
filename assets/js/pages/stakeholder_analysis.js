// Default resources are included in grapheditor resources
mxLoadResources = false;
var StakeholderAnalysis = function() {
    var _newTarget = function() {
        $(document).on("click", "#addNewTarget", function () {
            var target_name = $("#target_name").val();
            var target = $("#target_group option:selected").text();
            $('.target').append(' <tr> <td width="15%" > <div class="d-flex align-items-center"> <div> <a href="#" class="text-default font-weight-semibold">' +
                '</a> ' + target_name +' <div class="text-muted font-size-sm">' + target +' </div> </div> </div> </td> <td> <div class="input-group">' +
                ' <input type="text" class="form-control" placeholder="Enter Terms of reference.."> <span class="input-group-append">' +
                '<button class="btn btn-outline-info" type="button">Add</button></span> </div> </td> <td> <div class="input-group">' +
                ' <input type="text" class="form-control" placeholder="Enter Impacts.."> <span class="input-group-append">' +
                '<button class="btn btn-outline-info" id="addNewTarget" type="button">Add</button></span> </div> </td> </tr>');
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
        }

    }
}();
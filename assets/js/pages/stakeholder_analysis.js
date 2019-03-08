var StakeholderAnalysis = function() {

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
        }

    }
}();
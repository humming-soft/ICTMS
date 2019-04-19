var Js = function() {

    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        $('.form-input-styled').uniform({
            fileButtonClass: 'action btn bg-blue'
        });
    };
    return {
        init: function() {
            _componentUniform();
        }
    }
}();
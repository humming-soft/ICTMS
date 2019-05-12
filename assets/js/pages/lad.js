var Js = function() {

    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        $('.form-check-input-styled').uniform({});
    };
    return {
        init: function() {
            _componentUniform();
        }
    }
}();
var Login = function () {
    var _componentUniform = function (e) {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        e.uniform();
    };

    var _toggleLoader = function (e) {
        loader = $('.splash');
        e == 'show' ? loader.fadeIn() : loader.fadeOut();
    };

    var _toggleForm = function(f,e){
        b = $('.back-text');
        if(e=='show'){
            b.removeAttr('style');f.show();
        }else{
            b.attr('style','display:none !important');f.hide();
        }
    };

    var _notification = function (type, message) {
        if (typeof Noty == 'undefined') {
            console.warn('Warning - noty.min.js is not loaded.');
            return;
        }
        // Override Noty defaults
        Noty.overrideDefaults({
            width: 200,
            theme: 'humworks',
            dismissQueue: true,
            layout: 'bottom',
            timeout: 3000
        });
        new Noty({
            text: message,
            type: type
        }).show();
    };


    var _getURLParameter = function (name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
    }

    var _login_enable = function () {
        $('#email').removeAttr('disabled');
        $('#keypass').removeAttr('disabled');
        $('#hw_s_b').removeAttr('disabled');
    }

    var _login_disable = function () {
        $('#email').attr('disabled', 'disabled');
        $('#keypass').attr('disabled', 'disabled');
        $('#hw_s_b').attr('disabled', 'disabled');
    };


    var _verifyLogin = function (f) {
        // var backlink = _getURLParameter('back');
        // if (backlink != "") {
        //     $(f).append($('<input type="hidden" name="back" id="back" value="' + backlink + '">'));
        // }

        $(f).on('submit', function (e) {
            var t = $(this);
            var data = t.serialize();
            _login_disable();
            _toggleForm(t,'hide');
            _toggleLoader('show');
            $.post(t.attr('action'), data).always(function (d) {
                _login_enable();
                if (d.st == "1") {
                    if ((typeof d.location != "undefined") && (d.location != "")) window.top.location = d.location;
                } else {
                    _toggleLoader('hide');
                    _toggleForm(t,'show');
                    if ((typeof d.message != "undefined") && (d.message != "")) {
                        _notification('error', d.message);
                    }
                }
            },'json');
            e.preventDefault();
            return false;
        })
    };

    return {
        init: function () {
            _componentUniform($('.f_i_s'));
            _verifyLogin("#hm_l_f");
        }
    }
}();

document.addEventListener('DOMContentLoaded', function () {
    Login.init();
});
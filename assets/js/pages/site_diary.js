var Js = function() {

    var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        $('.form-check-input-styled').uniform({
            fileButtonClass: 'action btn bg-blue'
        });
    };

    var _componentPikaday = function (s) {
        if (typeof Pikaday == 'undefined') {
            console.warn('Warning - Pikaday.js is not loaded.');
            return;
        }
        p_date = new Pikaday({
            field: s,
            maxDate: new Date(),
            format: 'DD-MMM-YYYY'
            // onSelect: function() {
            //     end_date.setMinDate(this.getDate());
            // }
        });
    };

    var _componentNouiSlider = function() {
        if (typeof noUiSlider == 'undefined') {
            console.warn('Warning - nouislider.min.js is not loaded.');
            return;
        }
        var slider_connect_lower = document.getElementById('noui-slider-connect-lower');

        // Create slider
        noUiSlider.create(slider_connect_lower, {
            start: 0,
            step: 1,
            connect: 'lower',
            range: {
              'min': 0,
              'max': 100
            },
            direction: $('html').attr('dir') == 'rtl' ? 'rtl' : 'ltr'
        });

        // Define elements for values
        var slider_connect_lower_val = document.getElementById('noui-slider-connect-lower-val');

        // Show the values
        slider_connect_lower.noUiSlider.on('update', function( values, handle ) {
            slider_connect_lower_val.innerHTML = values[handle];
        });
    };

    var _componentFancybox = function() {
        if (!$().fancybox) {
            console.warn('Warning - fancybox.min.js is not loaded.');
            return;
        }

        // Image lightbox
        $('[data-popup="lightbox"]').fancybox({
            padding: 3
        });
    };

    var _singleCheck = function(c){
        var checkboxes = document.getElementsByName('m_e_s')
        checkboxes.forEach((item) => {
            if (item !== c) item.checked = false; $.uniform.update(item);
        })
    }
    return {
        init: function() {
            _componentUniform();
            _componentNouiSlider();
            _componentPikaday($("#rpt_date")[0]);
            _componentFancybox();
        },
        check : function(t){
            _singleCheck(t);
        }
    }
}();
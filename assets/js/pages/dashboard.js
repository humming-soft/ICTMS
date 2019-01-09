var Dashboard = function() {

     var _componentUniform = function() {
        if (!$().uniform) {
            console.warn('Warning - uniform.min.js is not loaded.');
            return;
        }
        $('.form-input-styled').uniform();
    };

    var _componentModalRemote = function() {
        $('#modal_remote').on('show.bs.modal', function() {
            $(this).find('.modal-body').load('http://demo.interface.club/limitless/bs4/Template/global_assets/demo_data/wizard/education.html', function() {
                _componentSelect2();
            });
        });
    };

    var _componentModal = function() {
        $('.hmwks-modal.show-on-load').modal('show');
        if ($('.hmwks-modal .hmwks-slider-w').length) {
            $('.hmwks-modal .hmwks-slider-w').slick({
            dots: true,
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1
            });
            $('.hmwks-modal').on('shown.bs.modal', function (e) {
                $('.hmwks-modal .hmwks-slider-w').slick('setPosition');
            });
        }
    };

    var _checkboxStatusBO = function(){
        $(document).on("click",".rd_benefit_org",function(){
            if($(this).val()==1){
                $("#rd_benefit_org_txt").show();
            }else{
                $("#rd_benefit_org_txt").hide();
            }
        });
    };

    var _checkboxStatusR = function(){
        $(document).on("click",".rd_resolvable",function(){
            if($(this).val()==1){
                $("#rd_resolvable_txt").show();
            }else{
                $("#rd_resolvable_txt").hide();
            }
        });
    };

    return {
        init: function() {
            _componentUniform();
            _componentModal();
            _checkboxStatusBO();
            _checkboxStatusR()
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    Dashboard.init();
});
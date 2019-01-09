var DataTable = function() {
    
    var _initDataTable = function(e){
        Splash = $('.splash');
        if (!$().DataTable) {
            console.warn('Warning - datatables.min.js is not loaded.');
            return;
        }

        // Setting datatable defaults
        $.extend( $.fn.dataTable.defaults, {
            autoWidth: false,
            responsive: true,
            columnDefs: [{ 
                orderable: false,
                width: 100
            },{
                className: 'control',
                orderable: false,
                targets: -1
            }],
            dom: '<"datatable-header info-right"fi><"datatable-scroll-wrap"t><"datatable-footer length-left"lp>',
            language: {
                processing: '<div class="splash-title"><div class="dcs_s_ir"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><h4>Loading..</h4></div>',
                search: '<span>Search:</span> _INPUT_',
                searchPlaceholder: 'Type to Search...',
                lengthMenu: '<span>Per Page:</span> _MENU_',
                paginate: { 'first': 'First', 'last': 'Last', 'next': 'Next', 'previous': 'Prev' }
            },
            initComplete : function() {
                var input = $('.dataTables_filter input').unbind(),
                    self = this.api(),
                    $searchButton = $('<button>').text('Search').attr('class','btn btn-light btn-sm ml-1')
                               .click(function() {
                                  self.search(input.val()).draw();
                               }),
                    $clearButton = $('<button>').text('Clear').attr('class','btn btn-light btn-sm ml-1')
                               .click(function() {
                                 input.val('');
                                 $searchButton.click(); 
                               });                    
                $('.dataTables_filter').append($('<div class="btn-group">').append($searchButton, $clearButton));
            }
        });
        $(e).DataTable({
            pageLength : 10,
            // processing: true, 
            serverSide: true,
            order: [
              [0, "desc" ]
            ],
            ajax: c_url+'/getdata',
            deferRender: true,
            lengthMenu: [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
            responsive: {
                details: {
                    type: 'column',
                    target: -1
                }
            },
            fnPreDrawCallback: function() { 
                if(Splash.is(":hidden")){
                    Splash.fadeIn('slow');
                }
                return true;
            },
            fnDrawCallback: function() {
                if(Splash.is(":visible")){
                    Splash.fadeOut('slow');
                }
            }
        });
    };
    return {
        init: function() {
            _initDataTable("#dt-hwks");
        }
    }
}();


// Initialize module
// ------------------------------

document.addEventListener('DOMContentLoaded', function() {
    DataTable.init();
});
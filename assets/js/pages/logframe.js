var Js = function() {
    var _componentWizard = function() {
        if (!$().steps) {
            console.warn('Warning - steps.min.js is not loaded.');
            return;
        }
        $('.steps-logframe').steps({
            headerTag: 'h6',
            bodyTag: 'fieldset',
            labels: {
                previous: '<i class="icon-arrow-left13 mr-2" /> Previous',
                next: 'Next <i class="icon-arrow-right14 ml-2" />',
                finish: 'Save <i class="icon-arrow-right14 ml-2" />'
            },
            transitionEffect: 'fade',
            // saveState: true,
            autoFocus: true,
            onFinished: function (event, currentIndex) {
                window.location.href = base_url+'projects/02849';
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
    };
    var _componentAddOp = function(s,t){
        s.click(function(){
            $c =  '<div class="col-12 col-md-4 col-lg-4"><div class="card"><div class="card-header p-3 text-center"><h6 class="card-title text-uppercase">'+$("#strat_name").val()+'</h6>'+
                    '<small><i class="icon-point-up mr-1"></i><b>Drag and Drop outcome(s) from above list</b></small></div><div class="card-body"><div class="sortable-list connectList strategy-list"></div></div></div></div>';
            t.append($c);
            _componentSortable();
        });
    };

    var _componentAddCriteria = function(s,t){
        s.click(function(){
            $crit = $("#crit_name").val();
            $s_opts = $('#dif_opt').val(); 
            t.each(function(index,v){
                $opts = '';
                jQuery.each($s_opts,function(i,v){
                    $opts += '<div class="form-check form-check-inline"><label class="form-check-label"><input type="radio" name="new_c['+index+']['+index+']" class="form-input-styled" data-fouc>'+v+'</label></div>';
                });
                $c = ' <li><div class="data-details-des">'+ $crit+'<div class="form-group mb-0">'+$opts+'</div></div></li>';
                $(this).append($c);
            });
            _componentUniform();
        });
    };

    var _componentModal = function(onload,p,pc) {
        if(onload){
            $('.hmwks-modal.show-on-load').modal('show');
        }
        if (pc.length) {
            pc.slick({
            dots: true,
            infinite: false,
            adaptiveHeight: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: false
            });
            p.on('shown.bs.modal', function (e) {
                pc.slick('setPosition');
            });
        }
    };

    var _componentDrag = function(dragItem, container){
        // var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        // if (document.getElementById(elmnt.id + "header")) {
        //   // if present, the header is where you move the DIV from:
        //   document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        // } else {
        //   // otherwise, move the DIV from anywhere inside the DIV: 
        //   elmnt.onmousedown = dragMouseDown;
        // }
      
        // function dragMouseDown(e) {
        //   e = e || window.event;
        //   e.preventDefault();
        //   // get the mouse cursor position at startup:
        //   pos3 = e.clientX;
        //   pos4 = e.clientY;
        //   document.onmouseup = closeDragElement;
        //   // call a function whenever the cursor moves:
        //   document.onmousemove = elementDrag;
        // }
      
        // function elementDrag(e) {
        //   e = e || window.event;
        //   e.preventDefault();
        //   // calculate the new cursor position:
        //   pos1 = pos3 - e.clientX;
        //   pos2 = pos4 - e.clientY;
        //   pos3 = e.clientX;
        //   pos4 = e.clientY;
        //   // set the element's new position:
        //   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        //   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        // }
      
        // function closeDragElement() {
        //   // stop moving when mouse button is released:
        //   document.onmouseup = null;
        //   document.onmousemove = null;
        // }


        // var dragItem = document.querySelector("#item");
        // var container = document.querySelector("#container");
    
        var active = false;
        var currentX;
        var currentY;
        var initialX;
        var initialY;
        var xOffset = 0;
        var yOffset = 0;
    
        container.addEventListener("touchstart", dragStart, false);
        container.addEventListener("touchend", dragEnd, false);
        container.addEventListener("touchmove", drag, false);
    
        container.addEventListener("mousedown", dragStart, false);
        container.addEventListener("mouseup", dragEnd, false);
        container.addEventListener("mousemove", drag, false);
    
        function dragStart(e) {
          if (e.type === "touchstart") {
            initialX = e.touches[0].clientX - xOffset;
            initialY = e.touches[0].clientY - yOffset;
          } else {
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
          }
    
        //   if (e.target === dragItem) {
            active = true;
        //   }
        }
    
        function dragEnd(e) {
          initialX = currentX;
          initialY = currentY;
    
          active = false;
        }
    
        function drag(e) {
          if (active) {
          
            e.preventDefault();
          
            if (e.type === "touchmove") {
              currentX = e.touches[0].clientX - initialX;
              currentY = e.touches[0].clientY - initialY;
            } else {
              currentX = e.clientX - initialX;
              currentY = e.clientY - initialY;
            }
    
            xOffset = currentX;
            yOffset = currentY;
    
            setTranslate(currentX, currentY, dragItem);
          }
        }
    
        function setTranslate(xPos, yPos, el) {
          el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
        }

    };

    var _component_lfm = function(){
        $(".lfm-data").click(function(){
            $t = $(this);
            $s = $($t.data("source"));
            $t = $($t.data("target"));
            $v = '<li>'+$s.val()+'</li>';
            if($t.children("li").length > 0){
                $t.append($v);
            }else{
                $t.html("").append($v)
            }
            $s.val("");
        })
    };
    return {
        init: function() {
            _componentWizard();
            _componentDrag(document.querySelector(".dtable"), document.querySelector(".dtable-container"));
            _componentDrag(document.querySelector(".dtable1"), document.querySelector(".dtable-container1"));
            _componentDrag(document.querySelector(".dtable2"), document.querySelector(".dtable-container2"));
            _component_lfm();
        }
    }
}();
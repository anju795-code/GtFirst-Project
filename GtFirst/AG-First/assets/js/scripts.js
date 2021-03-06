
(function($) {
    "use strict";

    /*================================
    Preloader
    ==================================*/

    var preloader = $('#preloader');
    $(window).on('load', function() {
        setTimeout(function() {
            preloader.fadeOut('slow', function() { $(this).remove(); });
        }, 300)
    });


    /*================================
    sidebar collapsing
    ==================================*/
    if (window.innerWidth <= 787) {
        $('.page-container').addClass('sbar_collapsed');
    }
    $('.nav-btn').on('click', function() {
        $('.page-container').toggleClass('sbar_collapsed');
    });

    /*================================
    Start Footer resizer
    ==================================*/
    var e = function() {
        var e = (window.innerHeight > 0 ? window.innerHeight : this.screen.height) - 5;
        (e -= 67) < 1 && (e = 1), e > 67 && $(".main-content, .ScrollHeight").css("min-height", e + "px")
    };
    $(window).ready(e), $(window).on("resize", e);


// Datepicker
// init daterangepicker 
$(document).ready(function() {
    var picker = $('#daterangepicker1').daterangepicker({
      "parentEl": "#daterangepicker1-container",
      "singleDatePicker": true,
            locale: {
                    applyLabel: 'Done',
                    customRangeLabel: 'Custom Range',
                   
                 },
    
        });
        
        // Datepicker2
        
        $('#startDate').daterangepicker({
            singleDatePicker: true,
            locale: {
                applyLabel: 'Done',
             },

           startDate: moment()
          });


    // prevent hide after range selection
     picker.data('daterangepicker').hide = function () {};
    // show picker on load
      picker.data('daterangepicker').show();  
    });

    /*================================
    sidebar menu
    ==================================*/
    $("#menu").metisMenu();

    /*================================
    slimscroll activation
    ==================================*/
    $('.menu-inner').slimScroll({
        height: 'auto',
    });

    $('').slimScroll({
        height: 'auto',
        width: '300px',
        axis: 'y'
    });

    if($(".SlimScrollTop").length) {
        $(".SlimScrollTop").niceScroll({
            cursorwidth: '20px',
            autohidemode:  false,
            zindex: 9,
            cursorcolor: "#026C64",
            cursorborderradius: "20px",
            cursorborder: "1px solid #026C64",
            background: "#E1E1E1",
        
            
          railpadding: {
           top: 20,
           right: 0,
           left: 0,
           bottom:0,           
         },
       
        });
         
      }

      if($(".SlimScrollBottom").length) {
        $(".SlimScrollBottom").niceScroll({
         cursorwidth: '20px',
         autohidemode:  false,
         zindex: 9,
         cursorcolor: "#026C64",
         cursorborder: "1px solid #026C64",
         cursorborderradius: "20px",
         background: "#E1E1E1",
         
       railpadding: {
        right: 0,
        left: 0,
        bottom:30,
        
      },
    
     });
      }

      if($(".CarcassPriceScrollBottom").length) {
        $(".CarcassPriceScrollBottom").niceScroll({
         cursorwidth: '20px',
         autohidemode:  false,
         zindex: 9,
         cursorcolor: "#026C64",
         cursorborder: "1px solid #026C64",
         cursorborderradius: "20px",
         background: "#E1E1E1",
         
       railpadding: {
           top:30,
        right: 0,
        left: 0,
        bottom:0,
        
      },
    
     });
      }

    //   swich button

      $( "#togBtn" ).click(function() {
        $( "#Estimated" ).toggle();
        });

// scroll letf right
      $(".SlimScrollTop").scroll(function(){
        $(".SlimScrollBottom, .CarcassPriceScrollBottom")
            .scrollLeft($(".SlimScrollTop").scrollLeft());
    });
    $(".SlimScrollBottom").scroll(function(){
        $(".SlimScrollTop")
            .scrollLeft($(".SlimScrollBottom").scrollLeft());
          
    });

    $(".CarcassPriceScrollBottom").scroll(function(){
        $(".SlimScrollTop")
            .scrollLeft($(".CarcassPriceScrollBottom").scrollLeft());
          
    });

    /*================================
    stickey Header
    ==================================*/
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop(),
            mainHeader = $('#sticky-header'),
            mainHeaderHeight = mainHeader.innerHeight();

        // console.log(mainHeader.innerHeight());
        if (scroll > 1) {
            $("#sticky-header").addClass("sticky-menu");
        } else {
            $("#sticky-header").removeClass("sticky-menu");
        }
    });

    /*================================
    form bootstrap validation
    ==================================*/
    $('[data-toggle="popover"]').popover()

    /*------------- Start form Validation -------------*/
    window.addEventListener('load', function() {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);

    /*================================
    datatable active
    ==================================*/
    if ($('#dataTable').length) {
        $('#dataTable').DataTable({
            responsive: true
        });
    }
    if ($('#dataTable2').length) {
        $('#dataTable2').DataTable({
            responsive: true
        });
    }
    if ($('#dataTable3').length) {
        $('#dataTable3').DataTable({
            responsive: true
        });
    }


    /*================================
    Slicknav mobile menu
    ==================================*/
    $('ul#nav_menu').slicknav({
        prependTo: "#mobile_menu"
    });

    /*================================
    login form
    ==================================*/
    $('.form-gp input').on('focus', function() {
        $(this).parent('.form-gp').addClass('focused');
    });
    $('.form-gp input').on('focusout', function() {
        if ($(this).val().length === 0) {
            $(this).parent('.form-gp').removeClass('focused');
        }
    });

    /*================================
    slider-area background setting
    ==================================*/
    $('.settings-btn, .offset-close').on('click', function() {
        $('.offset-area').toggleClass('show_hide');
        $('.settings-btn').toggleClass('active');
    });

    /*================================
    Owl Carousel
    ==================================*/
    function slider_area() {
        var owl = $('.testimonial-carousel').owlCarousel({
            margin: 50,
            loop: true,
            autoplay: false,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1000: {
                    items: 2
                },
                1360: {
                    items: 1
                },
                1600: {
                    items: 2
                }
            }
        });
    }
    slider_area();

    /*================================
    Fullscreen Page
    ==================================*/

    if ($('#full-view').length) {

        var requestFullscreen = function(ele) {
            if (ele.requestFullscreen) {
                ele.requestFullscreen();
            } else if (ele.webkitRequestFullscreen) {
                ele.webkitRequestFullscreen();
            } else if (ele.mozRequestFullScreen) {
                ele.mozRequestFullScreen();
            } else if (ele.msRequestFullscreen) {
                ele.msRequestFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var exitFullscreen = function() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            } else {
                console.log('Fullscreen API is not supported.');
            }
        };

        var fsDocButton = document.getElementById('full-view');
        var fsExitDocButton = document.getElementById('full-view-exit');

        fsDocButton.addEventListener('click', function(e) {
            e.preventDefault();
            requestFullscreen(document.documentElement);
            $('body').addClass('expanded');
        });

        fsExitDocButton.addEventListener('click', function(e) {
            e.preventDefault();
            exitFullscreen();
            $('body').removeClass('expanded');
        });
    }

})(jQuery);
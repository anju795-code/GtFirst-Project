
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


    // Make New Selection – Current 

   $('.btns').on('click', function (e) {
    e.preventDefault();
    $('.btns.active').removeClass('active');
    $(this).addClass('active');
});

    $(function(){
        $( "#Sheep" ).click(function() {
            $( "#Current-Sheep" ).show();
            $( "#Current-Deer" ).hide();
            $( "#Current-Cattle" ).hide();
         });
    
    
         $( "#Deer" ).click(function() {
            $( "#Current-Deer" ).show();
            $( "#Current-Sheep" ).hide();
            $( "#Current-Cattle" ).hide();
         });
    
        $( "#Cattle" ).click(function() {
            $( "#Current-Cattle" ).show();
            $( "#Current-Deer" ).hide();
            $( "#Current-Sheep" ).hide();
         });

         $( "#Adult" ).click(function() {
            $( "#Current-Adult" ).show();
            $( "#Current-Lamb" ).hide();
         });
    
    
         $( "#Lamb" ).click(function() {
            $( "#Current-Lamb" ).show();
            $( "#Current-Adult" ).hide();
         });
    
        $( "#Bull" ).click(function() {
            $( "#Current-Bull" ).show();
            $( "#Current-Steer" ).hide();
            $( "#Current-Cow" ).hide();
            $( "#Current-Heifer" ).hide();
         });

         $( "#Ewe" ).click(function() {
            $( "#Current-Ewe" ).show();
      
         });
         $( "#Stag" ).click(function() {
            $( "#Current-Stag" ).show();
      
         });
         
      });
  

    //   swich button

      $( "#togBtn" ).click(function() {
        $( "#Estimated" ).toggle();
     });

    //  perkg or perhead switch
       $('#Atkins-PerSwitch').on('click',function(){
            if($('.PerHead').css('display')!='none'){
                $('.PerHead').removeClass('active');

            $('.PerKg').show().siblings('.PerHead').hide();
            }else if($('.PerKg').css('display')!='none'){
                $('.PerHead').show().siblings('.PerKg').hide();
                $('.PerHead').addClass('active');

            }
        });
         //  perkg or perhead switch
      $('#Joe-PerSwitch').on('click',function(){
        if($('.PerHead').css('display')!='none'){
            $('.PerHead').removeClass('active');

        $('.PerKg').show().siblings('.PerHead').hide();
        }else if($('.PerKg').css('display')!='none'){
            $('.PerHead').show().siblings('.PerKg').hide();
            $('.PerHead').addClass('active');

        }
    });
      
      //  perkg or perhead switch
      $('#Tom-PerSwitch').on('click',function(){
        if($('.PerHead').css('display')!='none'){
            $('.PerHead').removeClass('active');

        $('.PerKg').show().siblings('.PerHead').hide();
        }else if($('.PerKg').css('display')!='none'){
            $('.PerHead').show().siblings('.PerKg').hide();
            $('.PerHead').addClass('active');

        }
    });
     
    //   Current Market button
        $( "#CurrentBtn" ).click(function() {
            $( "#Current-LiveweightTable" ).toggle();
            $(this).addClass('active');
     });


//  popover
        $(document).on('click', function(e) {
        $('[data-toggle="popover"],[data-original-title]').each(function() {

            if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide').data('bs.popover').inState.click = false 
            }

        });
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
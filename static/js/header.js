$(function() {
    let header = $('.navbar');
    let hederHeight = header.height(); // вычисляем высоту шапки

    $(window).scroll(function() {
      if($(this).scrollTop() > 1) {
       header.addClass('header_fixed');
       $('body').css({
          'paddingTop': hederHeight+'px' // делаем отступ у body, равный высоте шапки
       });
      } else {
       header.removeClass('header_fixed');
       $('body').css({
        'paddingTop': 0 // удаляем отступ у body, равный высоте шапки
       })
      }
      if($(this).scrollTop() > 1) {
        $('.header').css({
          'height': '12vh',
          'transition': '.3s'

        });
        $('.logo_section').css({
          'width': '30vh',
          'transition': '.3s'

        });
        $('.header_section').css({
          'margin-bottom': '2vh',
          'transition': '.3s'

        });


    } else {
        $('.header').css({
           'height': '15vh',
          'transition': '.3s'
        });
        $('.logo_section').css({
          'width': '35vh',
          'transition': '.3s'

        });
        $('.header_section').css({
          'margin-bottom': '4vh',
          'transition': '.3s'

        });

        //document.getElementById("logo").src="images/logo_redrzhd.png";
    }
    });
   });

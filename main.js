// $(function () {
//     'use strict';
//     var view = $(window).height();
//     $('.part').height(view).scrollie({
//         scrollOffset: -50,
//         scrollingInView:function (elem) {
//             var bgColor = elem.data('background')           
//             $('body').css('background-color', bgColor);       
//         }
//     });
// });

$(window).scroll(function () {
  
  var $window = $(window);
  var $body = $('body');
  var $panel = $('.panel');

  var scroll = $window.scrollTop() + ($window.height() / 3);
  $panel.each(function () {
    var $this = $(this);

    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      $body.removeClass(function (ind, css) {
        return (css.match(/(^|\s)bg-\S+/g) || []).join(' ');
      });
      $body.addClass('bg-' + $(this).data('bg'));
    }
  })
}).scroll();
function sendMail() {

  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;

  const serviceID = "service_codhxyd";
  const templateID = "template_d19lxsx";
  const regExEmail = (value) => {
    return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
  }

  function emailControl() {
    const leMail = document.getElementById("email").value;
    if (regExEmail(leMail)) {
      return true;
    } else {
      return false;
    }
  }

  $('#myForm').on('submit', function (event) {
    event.preventDefault();
  });

  if (name != "" && emailControl() != false && message != "") {
    const params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, params);
    swal("🎉", "Votre message c'est envoyé!", "success");
    
  } else {
      swal("🤔", "Votre message ne c'est pas envoyé! Verifiez les champs.", "error");
  }

}
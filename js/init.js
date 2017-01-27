/*-----------------------------------------------------------------------------------
/*
/* Init JS
/*
-----------------------------------------------------------------------------------*/

 jQuery(document).ready(function() {


/*----------------------------------------------------*/
/*	Flexslider
/*----------------------------------------------------*/
   $('#intro-slider').flexslider({
      animation: 'fade',
      controlNav: false,
   });


/*----------------------------------------------------*/
/*	contact form
------------------------------------------------------*/

   $('form#contactForm button.submit').click(function() {

      $('#image-loader').fadeIn();

      var contactName = $('#contactForm #contactName').val();
      var contactEmail = $('#contactForm #contactEmail').val();
      var contactSubject = $('#contactForm #contactSubject').val();
      var contactMessage = $('#contactForm #contactMessage').val();

      var data = 'contactName=' + contactName + '&contactEmail=' + contactEmail +
               '&contactSubject=' + contactSubject + '&contactMessage=' + contactMessage;

      $.ajax({

	      type: "POST",
	      url: "inc/sendEmail.php",
	      data: data,
	      success: function(msg) {

            // Message was sent
            if (msg == 'OK') {
               $('#image-loader').fadeOut();
               $('#message-warning').hide();
               $('#contactForm').fadeOut();
               $('#message-success').fadeIn();   
            }
            // There was an error
            else {
               $('#image-loader').fadeOut();
               $('#message-warning').html(msg);
	            $('#message-warning').fadeIn();
            }

	      }

      });

      return false;

   });
$(window).load(function(){
    $('.portfolio-button').on('click',function()
                {
                  console.log($(this).find('img').attr('src'));
			$('#modal-img').attr('src', $(this).find('img').attr('src'));
                  $('#modal-text').innerHTML="Whatever text!";

                  $("#hider").click()
                });
   $('#incrementer').on('click',function()
                {
                    console.log("pushed");
                  console.log($('#modal-img').attr('src'));
                  var imgName = $('#modal-img').attr('src');
                  var imgNumber = parseInt(imgName.slice(-5,-4)) + 1;
                  var newName = imgName.slice(0, -5) + String(imgNumber) + imgName.slice(-4);
                  $('#modal-img').attr('src', newName);
                  console.log(imgName.slice(-5,-4));

			$('#modal-img').attr('src', $(this).find('img').attr('src'));
                  $('#modal-text').innerHTML="Whatever text!";

                  $("#hider").click()
                });
});
});








$(document).ready(function () {
  $("#form").validate({
    rules: {
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      email: {
        required: "Error: Please enter a valid email address.",
        email: "Error: Please enter a valid email address."
      },
    },

  });

  $('#credit-card').on('keypress change', function () {
    $(this).val(function (index, value) {
    	  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      });
    });
  });



// });

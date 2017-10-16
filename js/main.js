$(document).ready(function () {
  // for email validation
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
  // for the expandable input for multiine box
  $('textarea').on('input', function() {
    $(this).outerHeight(20).outerHeight(this.scrollHeight);
  });
  $('textarea').trigger('input');
  // for credit card input
  $('#credit-card').on('keydown', function () {
    $(this).val(function (index, value) {
    	  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      });
    });
  });

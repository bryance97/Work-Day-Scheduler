$(document).ready(function() {
    // listens save button
    $('.saveBtn').on('click', function() {
      // get back values
      var value = $(this).siblings('.description').val().trim();
      var time = $(this).parent().attr('id');

        //localstorage
        localStorage.setItem(time, value);
    })
});
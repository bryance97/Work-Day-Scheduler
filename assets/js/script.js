var currentDate = document.getElementById("currentDay");
var dateFormat = "dddd, MMMM Do";
currentDate.textContent = moment().format(dateFormat);

$(document).ready(function () {
  // listens save button
  $(".saveBtn").on("click", function () {
    // get back values
    var value = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");

    //localstorage
    localStorage.setItem(time, value);
  });

  $(".notification").addClass("show");

  setTimeout(function () {
    $(".notification").removeClass("show");
  }, 5000);
});
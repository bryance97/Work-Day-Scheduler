var currentDate = document.getElementById("currentDay");
var dateFormat = "dddd, MMMM Do";
currentDate.textContent = moment().format(dateFormat);

var currentHour = moment().hours();


$(document).ready(function () {
  // listens save button
  $(".saveBtn").on("click", function () {
    // get back values
    var value = $(this).siblings(".description").val().trim();
    var time = $(this).parent().attr("id");

    //localstorage
    localStorage.setItem(time, value);

    hourUpdater(time);

  });


  //gets current time
  function hourUpdater() {
 
    //checcks and applies right color to current time
    var hourUpdater = function (time) {
      if (currentHour < time) {
        $(this).addClass("future");
      } else if (currentHour > time) {
        $(this).removeClass("past");
        $(this).addClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
      }
    };

    hourUpdater();

};
    ///localstorage values returned
    $("#nine-am .description").val(localStorage.getItem("nine-am"));
    $("#ten-am .description").val(localStorage.getItem("ten-am"));
    $("#eleven-am .description").val(localStorage.getItem("eleven-am"));
    $("#twelve-pm .description").val(localStorage.getItem("twelve-pm"));
    $("#one-pm .description").val(localStorage.getItem("one-pm"));
    $("#two-pm .description").val(localStorage.getItem("two-pm"));
    $("#three-pm .description").val(localStorage.getItem("three-pm"));
    $("#four-pm .description").val(localStorage.getItem("four-pm"));
    $("#five-pm .description").val(localStorage.getItem("five-pm"));

})
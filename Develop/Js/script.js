// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var current = dayjs();

// Added code to display the current date in the header of the page.
$(function currentTime() {
  var now = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A");
  window.setInterval(currentTime);
  $("#currentDay").text(now);
});

$(function () {
  var num = dayjs().hour();
  var here = document.getElementById("hour-9");
  var here1 = document.getElementById("hour-10");
  var here2 = document.getElementById("hour-11");
  var here3 = document.getElementById("hour-12");
  var here4 = document.getElementById("hour-1");
  var here5 = document.getElementById("hour-2");
  var here6 = document.getElementById("hour-3");
  var here7 = document.getElementById("hour-4");
  var here8 = document.getElementById("hour-5");
  var here9 = document.getElementById("hour-6");

  var result = here.dataset.date;
  var result1 = here1.dataset.date;
  var result2 = here2.dataset.date;
  var result3 = here3.dataset.date;
  var result4 = here4.dataset.date;
  var result5 = here5.dataset.date;
  var result6 = here6.dataset.date;
  var result7 = here7.dataset.date;
  var result8 = here8.dataset.date;
  var result9 = here9.dataset.date;

  if (num == result) {
    $("#hour-9").addClass("row time-block present");
  }
  if (result > num) {
    $("#hour-9").addClass("row time-block future");
  }
  if (result < num) {
    $("#hour-9").addClass("row time-block past");
  }

  if (num == result1) {
    $("#hour-10").addClass("row time-block present");
  }
  if (result1 > num) {
    $("#hour-10").addClass("row time-block future");
  }
  if (result1 < num) {
    $("#hour-10").addClass("row time-block past");
  }

  if (num == result2) {
    $("#hour-11").addClass("row time-block present");
  }
  if (result2 > num) {
    $("#hour-11").addClass("row time-block future");
  }
  if (result2 < num) {
    $("#hour-11").addClass("row time-block past");
  }

  if (num == result3) {
    $("#hour-12").addClass("row time-block present");
  }
  if (result3 > num) {
    $("#hour-12").addClass("row time-block future");
  }
  if (result3 < num) {
    $("#hour-12").addClass("row time-block past");
  }

  if (num == result4) {
    $("#hour-1").addClass("row time-block present");
  }
  if (result4 > num) {
    $("#hour-1").addClass("row time-block future");
  }
  if (result4 < num) {
    $("#hour-1").addClass("row time-block past");
  }

  if (num == result5) {
    $("#hour-2").addClass("row time-block present");
  }
  if (result5 > num) {
    $("#hour-2").addClass("row time-block future");
  }
  if (result5 < num) {
    $("#hour-2").addClass("row time-block past");
  }

  if (num == result6) {
    $("#hour-3").addClass("row time-block present");
  }
  if (result6 > num) {
    $("#hour-3").addClass("row time-block future");
  }
  if (result6 < num) {
    $("#hour-3").addClass("row time-block past");
  }

  if (num == result7) {
    $("#hour-4").addClass("row time-block present");
  }
  if (result7 > num) {
    $("#hour-4").addClass("row time-block future");
  }
  if (result7 < num) {
    $("#hour-4").addClass("row time-block past");
  }

  if (num == result8) {
    $("#hour-5").addClass("row time-block present");
  }
  if (result8 > num) {
    $("#hour-5").addClass("row time-block future");
  }
  if (result8 < num) {
    $("#hour-5").addClass("row time-block past");
  }

  if (num == result9) {
    $("#hour-6").addClass("row time-block present");
  }
  if (result9 > num) {
    $("#hour-6").addClass("row time-block future");
  }
  if (result9 < num) {
    $("#hour-6").addClass("row time-block past");
  }

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
});
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  $("btn saveBtn col-2 col-md-1").click();
});

//
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
//

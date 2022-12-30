var current = dayjs();

// Added code to display the current date in the header of the page.
$(function currentTime() {
  var now = dayjs().format("dddd, MMMM D, YYYY h:mm:ss A");
  window.setInterval(currentTime);
  $("#currentDay").text(now);
});
//added function for setting the display attributes after comparing it to the time of day.
$(function () {
  //declared variables grabbing each hour of the day
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
  //created if statments to determine what time is currently being shown
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
});
//added save button to make sure users input persists if page is refreshed
$(function saveInput() {
  $(".btn").click(function () {
    alert("You clicked the save button!");
    let input = $("#txt").val();
    localStorage.setItem("Info9am", input);
  });

  $(".btn2").click(function () {
    alert("You clicked the save button!");
    let input2 = $("#txt2").val();
    localStorage.setItem("Info10am", input2);
  });

  $(".btn3").click(function () {
    alert("You clicked the save button!");
    let input3 = $("#txt3").val();
    localStorage.setItem("Info11am", input3);
  });

  $(".btn4").click(function () {
    alert("You clicked the save button!");
    let input4 = $("#txt4").val();
    localStorage.setItem("Info12pm", input4);
  });

  $(".btn5").click(function () {
    alert("You clicked the save button!");
    let input5 = $("#txt5").val();
    localStorage.setItem("Info1pm", input5);
  });

  $(".btn6").click(function () {
    alert("You clicked the save button!");
    let input6 = $("#txt6").val();
    localStorage.setItem("Info2pm", input6);
  });

  $(".btn7").click(function () {
    alert("You clicked the save button!");
    let input7 = $("#txt7").val();
    localStorage.setItem("Info3pm", input7);
  });

  $(".btn8").click(function () {
    alert("You clicked the save button!");
    let input8 = $("#txt8").val();
    localStorage.setItem("Info4pm", input8);
  });

  $(".btn9").click(function () {
    alert("You clicked the save button!");
    let input9 = $("#txt9").val();
    localStorage.setItem("Info5pm", input9);
  });

  $(".btn10").click(function () {
    alert("You clicked the save button!");
    let input10 = $("#txt10").val();
    localStorage.setItem("Info6pm", input10);
  });
});
//created a button to retrieve the input data from local storage and display it to the webpage.
$(function () {
  
    alert("Your saved appointments have been restored!");
    var saved = localStorage.getItem("Info6pm");
    var saved1 = localStorage.getItem("Info5pm");
    var saved2 = localStorage.getItem("Info4pm");
    var saved3 = localStorage.getItem("Info3pm");
    var saved4 = localStorage.getItem("Info2pm");
    var saved5 = localStorage.getItem("Info1pm");
    var saved6 = localStorage.getItem("Info12pm");
    var saved7 = localStorage.getItem("Info11am");
    var saved8 = localStorage.getItem("Info10am");
    var saved9 = localStorage.getItem("Info9am");
    $("#txt10").text(saved);
    $("#txt9").text(saved1);
    $("#txt8").text(saved2);
    $("#txt7").text(saved3);
    $("#txt6").text(saved4);
    $("#txt5").text(saved5);
    $("#txt4").text(saved6);
    $("#txt3").text(saved7);
    $("#txt2").text(saved8);
    $("#txt").text(saved9);
  
});

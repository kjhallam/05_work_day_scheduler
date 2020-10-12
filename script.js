// Variables are Defined
var  curTime = moment().format("LT");
var  curTimeInt = parseInt(curTime);
var saveBtnEl = $(".saveBtn");

//attributes set according to the hour/time
$("Row-9").attr("data-time", moment("9:00 am", "h:mm:ss a").format("LT"));
$("Row-10").attr("data-time", moment("10:00 am", "h:mm:ss a").format("LT"));
$("Row-11").attr("data-time", moment("11:00 am", "h:mm:ss a").format("LT"));
$("Row-12").attr("data-time", moment("12:00 pm", "h:mm:ss a").format("LT"));
$("Row-1").attr("data-time", moment("1:00 pm", "h:mm:ss a").format("LT"));
$("Row-2").attr("data-time", moment("2:00 pm", "h:mm:ss a").format("LT"));
$("Row-3").attr("data-time", moment("3:00 pm", "h:mm:ss a").format("LT"));
$("Row-4").attr("data-time", moment("4:00 pm", "h:mm:ss a").format("LT"));
$("Row-5").attr("data-time", moment("5:00 pm", "h:mm:ss a").format("LT"));

$(document).ready(function () {
        renderSchedule();

    var currentDay = moment("#currentDay").format('MMMM Do YYYY, h:mm:ss a');

   $("#currentDay").text(currentDay); 

   for (var t = 1; t <= 12; t++){
        var timeInput = $("Row" + t + "#").attr("data-time");

        var timeInputInt = parseInt(timeInput);

        if(curTimeInt === timeInputInt) {
            $("Row" + t + "#").addClass("present");
        }

        if (curTimeInt > timeInputInt) {
            $("Row" + t + "#").addClass("past");
        }

        if (curTimeInt > timeInputInt) {
            $("Row" + t + "#").addClass("future");
        }
    }

    saveBtnEl.on("mouseenter", function (){
        $(this).addClass("hover");
        console.log("mouseenter")
    });

    saveBtnEl.on("mouseleave", function (){
            $(this).removeClass("hover");
            console.log("mouseleave")
        });

    saveBtnEl.on("click", function () {
        var hourEl = $(this).attr("data-hour");

        var agenda = $("Row" + hourEl + "#").value();

        localStorage.setItem(hourEl, agenda);

    });
    
    function renderSchedule () {
        for(var i = 1; i <= 12; i++) {
            $("Row" + i + "#").value(localStorage.getItem(i));
        } 
    }
    

    });



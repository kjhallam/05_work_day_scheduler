// Variables are Defined
var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDay);
console.log (currentDay);

var  curTime = moment().format("HH");
console.log(curTime);
var  curTimeInt = parseInt(curTime);
// var saveBtnEl = $(".saveBtn");
var lsArray = ["09","10","11","12","13","14","15","16","17"];
var renderSchedule;

//attributes set according to the hour/time
// $("Row9").attr("data-hour", "09");
// $("Row10").attr("data-hour", "10");
// $("Row11").attr("data-hour", "11");
// $("Row12").attr("data-hour", "12");
// $("Row13").attr("data-hour", "13");
// $("Row14").attr("data-hour", "14");
// $("Row15").attr("data-hour", "15");
// $("Row16").attr("data-hour", "16");
// $("Row17").attr("data-hour", "17");


// $(document).ready(function () {
//         renderSchedule();


function color (){
    for (var i = 0; i < lsArray.length; i++) {
        console.log(lsArray[i]);
        if (lsArray[i] === curTime) {
        $(lsArray[i]).addClass("present");
        }
        if (lsArray[i] < curTime) {
        $(lsArray[i]).addClass("past");
        }
        if (lsArray[i] > curTime) {
        $(lsArray[i]).addClass("future");
        }
    }
}

    color();
//    for (var t = 1; t <= 12; t++){
//         var timeInput = $("Row" + t).attr("data-time");

//         var timeInputInt = parseInt(timeInput);

//         if(curTimeInt === timeInputInt) {
//             $("Row" + t).addClass("present");
//         }

//         if (curTimeInt > timeInputInt) {
//             $("Row" + t).addClass("past");
//         }

//         if (curTimeInt > timeInputInt) {
//             $("Row" + t).addClass("future");
//         }
//     }

    $("#btn09").on("click", function () {
        var agenda = $("#Row9").val();
        console.log(agenda);
        localStorage.setItem("9:00", agenda);
    });
        $("#Row9").val(localStorage.getItem("9:00"));

    $("#btn10").on("click", function () {
        var agenda = $("#Row10").val();
        console.log(agenda);
        localStorage.setItem("10:00", agenda);
    });
        $("#Row10").val(localStorage.getItem("10:00"));
   
        $("#btn11").on("click", function () {
            var agenda = $("#Row11").val();
            console.log(agenda);
            localStorage.setItem("11:00", agenda);
    });
        $("#Row11").val(localStorage.getItem("11:00"));
       
       
        $("#btn12").on("click", function () {
            var agenda = $("#Row12").val();
            console.log(agenda);
            localStorage.setItem("12:00", agenda);
    });
        $("#Row12").val(localStorage.getItem("12:00"));
           
        $("#btn13").on("click", function () {
            var agenda = $("#Row13").val();
            console.log(agenda);
            localStorage.setItem("13:00", agenda);
    });
         $("#Row13").val(localStorage.getItem("13:00"));
    
         $("#btn14").on("click", function () {
            var agenda = $("#Row14").val();
            console.log(agenda);
            localStorage.setItem("14:00", agenda);
    });
         $("#Row14").val(localStorage.getItem("14:00"));
   
         $("#btn15").on("click", function () {
            var agenda = $("#Row15").val();
            console.log(agenda);
            localStorage.setItem("15:00", agenda);
    });
         $("#Row15").val(localStorage.getItem("15:00"));
   
         $("#btn16").on("click", function () {
            var agenda = $("#Row16").val();
            console.log(agenda);
            localStorage.setItem("16:00", agenda);
    });
         $("#Row16").val(localStorage.getItem("16:00"));
   
         $("#btn17").on("click", function () {
            var agenda = $("#Row17").val();
            console.log(agenda);
            localStorage.setItem("17:00", agenda);
    });
         $("#Row17").val(localStorage.getItem("17:00"));
   
    



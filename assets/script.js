
var currentDay = moment().format('MMMM Do YYYY');
$("#currentDay").text(currentDay);
var currentTime = moment().format("HH");

var timeArray = ["09","10","11","12","13","14","15","16","17"];

    
function backgroundColor () { 
    $(".event-input-block").each(function(){
        var id = parseInt($(this).attr("id").split("w")[1])
        if (id < currentTime) {
            $(this).addClass("past")
        } else if (id == currentTime){
            $(this).addClass("present")
        } else {
            $(this).addClass("future")
        }
    })
} 
        backgroundColor();

    $("#btn09").on("click", function () {
        var agenda = $("#Row09").val();
        console.log(agenda);
        localStorage.setItem("9:00",
        agenda);
    });
    $("#Row09").val(localStorage.getItem("9:00"));

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
   
    



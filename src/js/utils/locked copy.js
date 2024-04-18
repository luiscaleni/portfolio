$(document).ready(function(){
    if ($("#lockScreen").is(":visible")) {
        $("#hour").text(" ")
    }
    
    $("#button_lock").click(function () { 
        if($("#lockScreen").is(":hidden")){
            $("#lockScreen").css("display","flex")
            $("#lockScreen").addClass("lockScreen")
            setTimeout(() => {
                $("#hour").text(" ");
            }, 200);
            setTimeout(() => {
                $("#lockScreen").removeClass("lockScreen")
                $("#button_home").show()
            }, 1100);
        }else if ($("#lockScreen").is(":visible")) {
            $("#lockScreen").addClass("unlockScreen")
            $("#hour").text("12:00 am")
            setTimeout(() => {
                $("#lockScreen").hide()
                $("#lockScreen").removeClass("unlockScreen")
                $("#button_home").hide()
            }, 1000);
        }else{
            console.log("error lockScreen")
        }
    })

    $("#unlockOption").click(function(){
        $("#lockScreen").css({"transition":"all ease-in-out 1s","transform":"translateY(-800px)"})
        setTimeout(() => {
            $("#hour").text("12:00 am")
            $("#lockScreen").hide()
            $("#button_home").hide()
        }, 1000);
    })
})
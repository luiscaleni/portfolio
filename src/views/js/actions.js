$(document).ready(function(){
    setTimeout(() => {
        $('#loader').fadeOut(1000, function(){
            $('#loader').addClass("hide");
        })
    }, 1000)
    $("#hour").text(" ");
    $("#button_lock").click(function () { 
        if ($("#lockScreen").is(":visible")) {
            $("#lockScreen").css({"transition":"all ease-in-out 1s","transform":"translateY(-800px)"})
            $("#hour").text("12:00 am")
            $("#lockScreen").hide()
        }else if($("#lockScreen").is(":hidden")){
            $("#lockScreen").css({"transition":"all ease-in-out 1s","transform":"translateY(0px)"})
            $("#button_home").show()
            setTimeout(() => {
                $("#hour").text(" ");
            }, 200);
            $("#lockScreen").show()
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
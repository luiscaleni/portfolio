$(document).ready(function(){
    $("#button_home").hide()
    setInterval(() => {
        if($("#lockScreen").is(":visible") || $(".contFS").is(":visible") || $(".contFSReplace").is(":visible")){
            $("#button_home").show()
        }else{
            $("#button_home").hide()
        }
    }, 100)

    $("#button_home").click(function () {
        if ($("#lockScreen").is(":visible")) {
            $("#unlockBySliding").addClass("up")
            setTimeout(() => {
                $("#unlockBySliding").removeClass("up")
            }, 1000)
        }else if ($("#lockScreen").is(":hidden")){            
            if ($("#videoDom").is(":visible")) {
                $("#videoDom").addClass("hideAppCamera")

                setTimeout(() => {
                    $("#videoDom").hide()
                    $("#videoDom").removeClass("hideAppCamera")
                }, 500)
            }
            
            if ($(".black_blur").is(":visible")) {
                $("#nav").removeClass("black_blur")
                $("#wifiBlack").hide()
                $("#signalBlack").hide()
                $("#wifi").show()
                $("#signal").show()
                $("#hour").css("color","#fff")
            }

            $(".contFSReplace").addClass("hideApp")
            $("#button_home").hide()

            setTimeout(() => {
                $(".contFSReplace").removeClass("hideApp")
                $(".contFSReplace").remove()
            }, 500)
        }
    })
})
let contentApp = document.createElement("div")
const cv = document.createElement("img")
const icon = document.createElement("img")
const divContFS= document.createElement("div")

let contTotal
let contToggleAndContFS
let cloneContToggleAndContFS
let thisElm

$(document).ready(function(){
    cv.src="/assets/cv-iphone.png"
    $(".app").click(function (e) {
        contTotal = $(this).parent().parent().parent()[0]
        contToggleAndContFS = $(this).parent().parent()[0]
        cloneContToggleAndContFS = contToggleAndContFS.cloneNode(true)

        $("#nav").addClass("black_blur")
        if($("#nav").is(".black_blur")){
            $("#hour").css({"color":"black", "text-shadow":"none"})
            $("#wifi").hide()
            $("#signal").hide()
            $("#wifiBlack").show()
            $("#signalBlack").show()
        }
        setTimeout(() => {
            $("#phone").append(cloneContToggleAndContFS)
            contToggleAndContFS.classList.remove("contFS")
            contToggleAndContFS.classList.add("contToggle")
            contTotal.append(contToggleAndContFS)

            if (e.target.id === "Curriculum") {
                cloneContToggleAndContFS.append(cv)
            }else if(e.target.id === "Camera"){
                $("#videoDom").show()
            }
        }, 1000)          
        
        contToggleAndContFS.classList.add("contFS")
        contToggleAndContFS.classList.remove("contToggle")

        cloneContToggleAndContFS.classList.add("contFSReplace")
        cloneContToggleAndContFS.classList.remove("contToggle")

        $("#phone").append(contToggleAndContFS)
    })
})
const video = document.querySelector("video")
const divContFS= document.createElement("div")
const text= document.createElement("span")
const img = document.createElement("img")
const cv = document.createElement("img")
const notAvailable= document.createElement("p")

let contentApp = document.createElement("div")
let app = document.createElement("img")

$(document).ready(function(){
    notAvailable.textContent="Lo sentimos, aún no está disponible."
    $(".app").click(function (e) {
        contentApp.classList.add("content_app")
        img.src=e.target.src
        text.textContent=e.target.id

        contentApp.append(img)
        contentApp.append(text)
        contentApp.append(notAvailable)
        
        showApp()
        setTimeout(() => {
            if($("#button_home").is(":hidden")){
                $("#button_home").show()
            }
        }, 1000)
        function showApp(){
            if (e.target.id === "Curriculum") {
                notAvailable.remove()
            }else if(e.target.id === "Camera"){
                notAvailable.remove()
            }
            divContFS.classList.add("contFS")
            divContFS.append(contentApp)
            $("#phone").append(divContFS)

            setTimeout(() => {
                $(".contFS").show()
                setTimeout(() => {
                    divContFS.removeChild(contentApp)
                    if (e.target.id === "Curriculum") {
                        $("#nav").addClass("black_blur");
                        cv.src="src/views/assets/images/screen/cv-iphone.png"
                        divContFS.appendChild(cv)
                    }if (e.target.id === "Camera") {
                        setTimeout(() => {
                            $("#videoDom").css("z-index",50)
                        }, 1000);
                    }else{
                        divContFS.appendChild(contentApp)
                    }
                }, 1)
            }, 1500)
        }
    })
    
    $("#button_home").click(function () {
        if ($("#lockScreen").is(":visible")) {
            $("#unlockBySliding").addClass("up")
            setTimeout(() => {
                $("#unlockBySliding").removeClass("up")
            }, 1000);
        }else if ($("#lockScreen").is(":hidden")){
            divContFS.classList.add("hideApp") 
            $("#videoDom").css("z-index","-1")
            if ($("#camera")) {
                $("#videoDom").addClass("hideApp")
                setTimeout(() => {
                        $("#videoDom").css("z-index","-1")
                        $("#videoDom").removeClass("hideApp")
                    }, 500)
                divContFS.style.display="none"
                $("#nav").removeClass("black_blur")
                $("#button_home").hide()
                cv.remove()
                divContFS.classList.remove("hideApp")
                $(".contFS").remove()
            }
        } 
    })
})
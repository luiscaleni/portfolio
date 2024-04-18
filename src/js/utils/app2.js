let contentApp = document.createElement("div")
const cv = document.createElement("img")
const icon = document.createElement("img")
const divContFS= document.createElement("div")

cv.src="src/assets/images/screen/cv-iphone.png"

$(document).ready(function(){
    $(".app").click(function (e) {
        icon.src=e.target.src
        
        contentApp.classList.add("content_app")
        divContFS.classList.add("contFS")

        contentApp.append(icon)
        divContFS.append(contentApp)
        $("#phone").append(divContFS)

        $(".contFS").show()
        setTimeout(() => {
            $("#nav").addClass("black_blur")
            divContFS.removeChild(contentApp)
            if (e.target.id === "Curriculum") {
                divContFS.append(cv)
            }else if(e.target.id ==="Camera"){
                divContFS.append($("#videoDom"))
                $("#videoDom").show()
            }else{
                divContFS.appendChild(contentApp)
            }
        }, 1000)        

        setTimeout(() => {
            if($("#button_home").is(":hidden")){
                $("#button_home").show()
            }
        }, 1000)
    })
})
parent.classList.add("contFS")
        parent.classList.remove("content_app")
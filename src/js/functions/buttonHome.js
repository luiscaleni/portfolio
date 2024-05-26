import whiteElm from "./whiteElm"
window.addEventListener("load", ()=>{
    setTimeout(() => {
        let buttonHome = document.getElementById("buttonHome")
        buttonHome.style.display="none"
    
    let contFSReplace

    setInterval(() => {
        contFSReplace = document.getElementById("contFSReplace")
    if(document.getElementById("lockScreen")){
            if(document.getElementById("lockScreen").getAttribute("class") === "lockScreen"){
                buttonHome.style.display="flex"
            }else if (contFSReplace){
                buttonHome.style.display="flex"
            }else{
                buttonHome.style.display="none"
            }
        }
    }, 100)

    buttonHome.addEventListener("click", ()=> {
        if (contFSReplace !== null) {
            document.getElementById("nav").classList.remove("black_blur")

            if (document.getElementById("video") !== null) {
                whiteElm()
                document.getElementById("video").classList.add("hideAppCamera")
                
                setTimeout(() => {
                    document.getElementById("contFSReplace").remove(document.getElementById("video"))
                }, 500)
        }else if(document.getElementById("imgCV") !== null){
                whiteElm()
            }

            contFSReplace.classList.add("hideApp")
            document.getElementsByClassName("hideapp").id=""
            buttonHome.style.display="none"
            buttonHome.style.backgroundColor="rgba(255, 255, 255, 0.5)"

            setTimeout(() => {
                contFSReplace.classList.remove("hideApp")
                contFSReplace.remove()
            }, 500)

        }else if (contFSReplace === null){
            document.getElementById("unlockBySliding").classList.add("up")
            setTimeout(() => {
                document.getElementById("unlockBySliding").classList.remove("up")
            }, 1000)
        }
    })
}, 1000)
})
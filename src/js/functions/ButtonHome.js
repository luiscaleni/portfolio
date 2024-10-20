import WhiteElm from "./WhiteElm"

window.addEventListener("load", ()=>{
    setTimeout(() => {
        let buttonHome = document.getElementById("buttonHome")
        if (buttonHome) {
            let contFSReplace
            let imgCV
            buttonHome.style.display="none"

            setInterval(() => {
                contFSReplace = document.getElementById("contFSReplace")
                imgCV = document.getElementById("imgCV")
                if(document.getElementById("lockScreen")){
                    if(document.getElementById("lockScreen").getAttribute("class") === "lockScreen"){
                        buttonHome.style.display="flex"
                    }else if (contFSReplace){
                        buttonHome.style.display="flex"
                        if(!imgCV){
                            buttonHome.style.backgroundColor="rgba(255, 255, 255, 0.3)"
                        }else{
                            buttonHome.style.backgroundColor="rgba(0, 0, 0, 0.3)"
                        }
                    }else{
                        buttonHome.style.display="none"
                    }
                }
            }, 0)

            buttonHome.addEventListener("click", ()=> {
                if (contFSReplace && document.getElementById("lockScreen").getAttribute("class") === "unlockScreen") {
                    buttonHome.style.display="none"
                    if(document.getElementById("contNav").getAttribute("class") === "black_blur"){
                        document.getElementById("contNav").classList.remove("black_blur")
                    }

                    if (document.getElementById("video")) {
                        const videoDom = document.getElementById("video")
                        const activeCamera = document.getElementById("cameraDI")
                        
                        videoDom.srcObject.getTracks()[0].stop()
                        videoDom.classList.add("hideAppCamera")
                        activeCamera.style.background="linear-gradient(70deg,#271c44, #6b21cc)"
                        setTimeout(() => {
                            document.getElementById("contFSReplace").remove(videoDom)
                        }, 500)
                    }else {
                        WhiteElm()
                    }

                    contFSReplace.classList.add("hideApp")
                    document.getElementsByClassName("hideapp").id=""

                    setTimeout(() => {
                        contFSReplace.classList.remove("hideApp")
                        contFSReplace.remove()
                    }, 500)

                }else if (!contFSReplace || (contFSReplace && document.getElementById("lockScreen").getAttribute("class") === "lockScreen")){
                    document.getElementById("unlockBySliding").classList.add("up")
                    setTimeout(() => {
                        document.getElementById("unlockBySliding").classList.remove("up")
                    }, 1000)
                }
            })
        }
    }, 300)
})
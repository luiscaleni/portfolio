import whiteElm from "./whiteElm"
window.addEventListener("load", ()=>{
    document.getElementById("buttonHome").style.display="none"
    let contFSReplace

    setInterval(() => {
        contFSReplace = document.getElementById("contFSReplace")
    if(document.getElementById("lockScreen")){
            if(document.getElementById("lockScreen").getAttribute("class") === "lockScreen"){
                document.getElementById("buttonHome").style.display="flex"
            }else if (contFSReplace){
                document.getElementById("buttonHome").style.display="flex"
            }else{
                document.getElementById("buttonHome").style.display="none"
            }
        }
    }, 100)

    document.getElementById("buttonHome").addEventListener("click", ()=> {
        if (contFSReplace !== null) {
            document.getElementById("nav").classList.remove("black_blur")

            if (document.getElementById("videoDom") !== null) {
                whiteElm()
                document.getElementById("videoDom").classList.add("hideAppCamera")
                
                setTimeout(() => {
                    document.getElementById("contFSReplace").remove(document.getElementById("videoDom"))
                }, 500)
        }else if(document.getElementById("imgCV") !== null){
                whiteElm()
            }

            contFSReplace.classList.add("hideApp")
            document.getElementsByClassName("hideapp").id=""
            document.getElementById("buttonHome").style.display="none"
            document.getElementById("buttonHome").style.backgroundColor="rgba(255, 255, 255, 0.5)"

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
})
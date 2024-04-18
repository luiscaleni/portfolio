import openApp from "../openApp/openApp"
import blackElm from "./blackElm"

window.addEventListener("load", ()=>{
    let contTotal
    let contToggleAndContFS
    let cloneContToggleAndContFS
    let lista = document.getElementsByClassName("app")

    Array.from(lista).forEach(elm => 
        elm.addEventListener("click", (e)=>{
        contTotal = elm.closest(".contTotal")
        contToggleAndContFS = elm.closest(".contToggle")
        cloneContToggleAndContFS = contToggleAndContFS.cloneNode(true)

        if(elm.id === "Camera" || elm.id === "Curriculum"){
            blackElm()
        }else{}

        if (elm.classList.contains("widget")) {
            e.target.parentNode.parentNode.parentNode.style.width="10em"
        }

        contToggleAndContFS.id="contFS"
        contToggleAndContFS.classList.remove("contToggle")
        
        cloneContToggleAndContFS.id="contFSReplace"
        cloneContToggleAndContFS.classList.remove("contToggle")

        document.getElementById("phone").appendChild(contToggleAndContFS)
        
        setTimeout(() => {
            document.getElementById("phone").appendChild(cloneContToggleAndContFS)
            contToggleAndContFS.id=""
            contToggleAndContFS.classList.add("contToggle")
            document.getElementById("phone").removeChild(contToggleAndContFS)
            contTotal.appendChild(contToggleAndContFS)
            openApp()
        }, 1000)
    }))
})
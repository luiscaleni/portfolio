import iconHomeEffect from "./iconHomeEffect"

function pasarPantallaCompleta(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
    }
}

window.addEventListener("load",()=>{
    setTimeout(() => {
        let lockScreen = document.getElementById("lockScreen")
        let addContIos = document.getElementsByClassName("addContIos")
        document.getElementById("buttonHome").style.backgroundColor="rgba(0, 0, 0, 0.5)"

        if(lockScreen){
            lockScreen.classList.add("lockScreen")   
            document.getElementById("hour").textContent=""
            document.getElementById("barBottomInfo").style.backgroundColor="white"
            
            document.getElementById("unlockOption").addEventListener("click", ()=> {/* Si se presionó el unlockOption */
                lockScreen.classList.add("unlockScreen")
                lockScreen.classList.remove("lockScreen")

                if(addContIos[0]){
                    pasarPantallaCompleta(document.documentElement)
                }
                
                setTimeout(() => {
                    lockScreen.style.display="none"
                    document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                }, 500)
                
                setTimeout(() => {
                    iconHomeEffect("showIcons")
                }, 200)
            })

            if(document.getElementById("button_lock")){
                document.getElementById("button_lock").addEventListener("click", ()=> { 
                    if(lockScreen.getAttribute("class") === "lockScreen"){/* Si se presionó el button_lock con el dispositivo bloqueado */

                        setTimeout(() => {
                            iconHomeEffect("showIcons")
                        }, 200)

                        lockScreen.classList.add("unlockScreen")
                        lockScreen.classList.remove("lockScreen")

                        if(document.getElementById("nav").getAttribute("class") === "" && document.getElementById("contFSReplace")){
                            setTimeout(() => {
                                document.getElementById("nav").classList.add("black_blur")
                                console.log("d")
                            }, 500)
                        }
                        
                        setTimeout(() => {
                            lockScreen.style.display="none"
                            document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                        }, 500)

                    }else if (lockScreen.getAttribute("class") === "unlockScreen") {/* Si se presionó el button_lock con el dispositivo desbloqueado */
                        setTimeout(() => {
                            iconHomeEffect("hideIcons")
                        }, 500)
                        
                        lockScreen.classList.add("lockScreen")
                        lockScreen.classList.remove("unlockScreen")
                        lockScreen.style.display="flex"

                        if(document.getElementById("nav").getAttribute("class") === "black_blur"){
                            document.getElementById("nav").classList.remove("black_blur")
                        }
                        setTimeout(() => {
                            document.getElementById("hour").textContent=""
                            document.getElementById("barBottomInfo").style.backgroundColor="white"
                        }, 100)
                    }else{
                        console.log("Error lockScreen")
                    }
                })
            }
        }
    }, 100)
})
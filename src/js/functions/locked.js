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
        let addContIos = document.getElementById("addContIos")
        let inIos = false
        let cero = 0
        let alwaysOnDisplay = document.getElementById("alwaysOnDisplay")
        
        document.getElementById("buttonHome").style.backgroundColor="rgba(0, 0, 0, 0.5)"
        alwaysOnDisplay.style.display="none"        
               
        if(lockScreen){
            lockScreen.classList.add("lockScreen")   
            document.getElementById("hour").textContent=""
            document.getElementById("barBottomInfo").style.backgroundColor="white"
            
            document.getElementById("unlockOption").addEventListener("click", ()=> {/* Si se presionó el unlockOption */
                lockScreen.classList.add("unlockScreen")
                lockScreen.classList.remove("lockScreen")
                navigator.wakeLock.request('screen')

                if(addContIos){
                    pasarPantallaCompleta(document.documentElement)
                    setTimeout(() => {
                        inIos = true
                    }, 1000)
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

        setTimeout(() => {
            setInterval(() => {
                if(addContIos){
                    if (addContIos.offsetWidth < addContIos.offsetHeight) {
                        alwaysOnDisplay.style.display="none"
                    }else if (addContIos.offsetWidth > addContIos.offsetHeight) {
                        alwaysOnDisplay.style.display="flex"
                        if (inIos) {
                            //console.log(inIos)
                            setTimeout(() => {
                                
                                if(cero === 0 && inIos===true){
                                    cero++
                                    let divAlert = document.createElement("div")
                                    let divOk = document.createElement("div")

                                    divAlert.id= "alert"
                                    divOk.id="ok"
                                    divAlert.innerHTML="El dispositivo permanecerá encendido."
                                    divOk.innerHTML="OK"

                                    divAlert.appendChild(divOk)
                                    alwaysOnDisplay.appendChild(divAlert)
                                }
                            }, 1000)
                        }
                    }
                }
            },0)
        }, 5000)
        let time = setInterval(() => {
            if (document.getElementById("ok")) {
                let alert = document.getElementById("alert")
                document.getElementById("ok").addEventListener("click",()=>{
                    alert.remove()
                    clearInterval(time)
                })
            }
        }, 0)
    }, 100)
})
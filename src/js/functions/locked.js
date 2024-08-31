import iconHomeEffect from "./iconHomeEffect"

window.addEventListener("load",()=>{
    setTimeout(() => {
        let timeout = 700
        let lockScreen = document.getElementById("lockScreen")
        if(lockScreen){
            lockScreen.classList.add("lockScreen")   
            document.getElementById("hour").textContent=""
            document.getElementById("barBottomInfo").style.backgroundColor="white"

            document.getElementById("unlockOption").addEventListener("click", ()=> {/* Si se presionó el unlockOption */
                lockScreen.classList.add("unlockScreen")
                lockScreen.classList.remove("lockScreen")
                navigator.wakeLock.request('screen')
    
                setTimeout(() => {
                    iconHomeEffect("showIcons")
                }, 200)
                setTimeout(() => {
                    lockScreen.style.display="none"
                    document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                }, timeout)
            })


            document.getElementById("button_lock").addEventListener("click", ()=> { 
                if(lockScreen.getAttribute("class") === "lockScreen"){/* Si se presionó el button_lock con el dispositivo bloqueado */
                    lockScreen.classList.add("unlockScreen")
                    lockScreen.classList.remove("lockScreen")
                    setTimeout(() => {
                        iconHomeEffect("showIcons")
                    }, 200)
                    if(document.getElementById("nav").getAttribute("class") === "" && document.getElementById("contFSReplace")){
                        setTimeout(() => {
                            document.getElementById("nav").classList.add("black_blur")
                        }, timeout)
                    }
                    
                    setTimeout(() => {
                        lockScreen.style.display="none"
                        document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                    }, timeout)
                }else if (lockScreen.getAttribute("class") === "unlockScreen") {/* Si se presionó el button_lock con el dispositivo desbloqueado */
                    lockScreen.style.display="flex"
                    lockScreen.classList.add("lockScreen")
                    lockScreen.classList.remove("unlockScreen")
                    setTimeout(() => {
                        iconHomeEffect("hideIcons")
                    }, timeout)
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
    }, 100)
})
import alwaysOnDisplay from "./alwaysOnDisplay"
import iconHomeEffect from "./iconHomeEffect"
import fullScreen from "./fullScreen"

window.addEventListener("load",()=>{
    setTimeout(() => {
        let lockScreen = document.getElementById("lockScreen")
        let addContIos = document.getElementById("addContIos")    
               
        if(lockScreen){
            lockScreen.classList.add("lockScreen")   
            document.getElementById("hour").textContent=""
            document.getElementById("barBottomInfo").style.backgroundColor="white"
            
            document.getElementById("unlockOption").addEventListener("click", ()=> {/* Si se presionó el unlockOption */
                document.getElementById("root").style.height="100vh"
                lockScreen.classList.add("unlockScreen")
                lockScreen.classList.remove("lockScreen")
                navigator.wakeLock.request('screen')
                if(addContIos){
                    fullScreen(document.documentElement)
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
                                document.getElementById("ContNav").classList.add("black_blur")
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

                        if(document.getElementById("contNav").getAttribute("class") === "black_blur"){
                            document.getElementById("contNav").classList.remove("black_blur")
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
        alwaysOnDisplay()
    }, 0)
})
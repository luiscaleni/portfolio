import iconHomeEffect from "./iconHomeEffect"

window.addEventListener("load",()=>{
    setTimeout(() => {
        let lockScreen = document.getElementById("lockScreen")
        if(lockScreen){
            lockScreen.classList.add("lockScreen")   
            document.getElementById("hour").textContent=""
            document.getElementById("barBottomInfo").style.backgroundColor="white"

            document.getElementById("unlockOption").addEventListener("click", ()=> {
                lockScreen.classList.add("unlockScreen")
                lockScreen.classList.remove("lockScreen")
                navigator.wakeLock.request('screen')
    
                setTimeout(() => {
                    iconHomeEffect()
                }, 200);
                setTimeout(() => {
                    lockScreen.style.display="none"
                    document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                }, 700)
            })
            document.getElementById("button_lock").addEventListener("click", ()=> { 
                if(lockScreen.getAttribute("class") === "lockScreen"){
                    lockScreen.classList.add("unlockScreen")
                    lockScreen.classList.remove("lockScreen")
                    if(document.getElementById("nav").getAttribute("class") === "" && document.getElementById("contFSReplace") !== null){
                        setTimeout(() => {
                            document.getElementById("nav").classList.add("black_blur")
                        }, 700);
                    }
                    
                    setTimeout(() => {
                        lockScreen.style.display="none"
                        document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                    }, 700)
                }else if (lockScreen.getAttribute("class") === "unlockScreen") {
                    lockScreen.style.display="flex"
                    lockScreen.classList.add("lockScreen")
                    lockScreen.classList.remove("unlockScreen")
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
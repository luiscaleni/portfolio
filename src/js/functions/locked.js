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
                    lockScreen.style.display="none"
                    document.getElementById("barBottomInfo").style.backgroundColor="transparent"
                    //NEED-fullScreen(document.documentElement)
                    /*
                    document.getElementById("news").style.right="0"
                    document.getElementById("news").style.bottom="0"*/
                }, 1000)
            })
        }
    }, 1000)
})
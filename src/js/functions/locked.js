window.addEventListener("load", ()=>{
    setTimeout(() => {
        fullScreen(document.documentElement)
        let lockScreen = document.getElementById("lockScreen")
        lockScreen.classList.add("lockScreen")
        document.getElementById("hour").textContent=""
        document.getElementById("barBottomInfo").style.backgroundColor="white"
        
        function fullScreen(element) {
            if (element.requestFullScreen) {
                element.requestFullScreen();
                localVideo.volume = 0.8;
                localVideo.play();
            } else if (element.mozRequestFullScreen) {
                element.mozRequestFullScreen();
                localVideo.volume = 0.8;
                localVideo.play();
            } else if (element.webkitRequestFullScreen) {
                element.webkitRequestFullScreen();
                localVideo.volume = 0.8;
                localVideo.play();
            }
        }

        document.getElementById("unlockOption").addEventListener("click", ()=> {
            lockScreen.classList.add("unlockScreen")
            lockScreen.classList.remove("lockScreen")
            navigator.wakeLock.request('screen')
            setTimeout(() => {
                lockScreen.style.display="none"
                document.getElementById("barBottomInfo").style.backgroundColor="transparent"
            }, 1000);
        })
    }, 1000)
})
export default function Camera(){
    const video = document.createElement("video")
    video.id="videoDom"
    video.autoplay="true"
    video.playsInline="true"

    document.getElementById("contFSReplace").appendChild(video)

    function enableCam(){
        navigator.mediaDevices.getUserMedia({
            video: true
        }).then((stream)=>{
                video.srcObject = stream
                video.addEventListener("loadeddata", ()=>{
                    video.style.display = "block"
                })
            })
    }

    enableCam()
}
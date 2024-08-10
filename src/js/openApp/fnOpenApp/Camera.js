export default function Camera(){
    const videoDom = document.createElement("video")
    const contFSReplace = document.getElementById("contFSReplace")
    videoDom.id="video"
    videoDom.autoplay="true"
    videoDom.playsInline="true"
    contFSReplace.appendChild(videoDom)
//video.srcObject.getTracks()[0].stop()
    if(contFSReplace){
        if (contFSReplace.getAttribute("id")==="video") {
            console.log("bien")
        }
    }
}
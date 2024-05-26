export default function Camera(){
    const videoDom = document.createElement("video")
    videoDom.id="video"
    videoDom.autoplay="true"
    videoDom.playsInline="true"
    document.getElementById("contFSReplace").appendChild(videoDom)
}
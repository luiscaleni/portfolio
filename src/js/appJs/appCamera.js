export default function appCamera(){
    const videoDom = document.createElement("video")
    const contFSReplace = document.getElementById("contFSReplace")
    const activeCamera = document.getElementById("cameraDI")
    
    activeCamera.style.background="linear-gradient(70deg,#008f39, #21eb21)"
    videoDom.id="video"
    videoDom.autoplay="true"
    videoDom.playsInline="true"
    contFSReplace.appendChild(videoDom)
}
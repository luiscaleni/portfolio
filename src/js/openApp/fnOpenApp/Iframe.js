export default function Iframe(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id
    
    if(id === "Camera"){
        let iframe = document.createElement("iframe")
        iframe.id="Camera"
        iframe.src='./memoji.html'

        contFSReplace.appendChild(iframe)
    }
}
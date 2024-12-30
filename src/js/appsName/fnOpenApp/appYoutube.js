export default function appYoutube(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Youtube"){
        let iframe = document.createElement("iframe")
        iframe.src='https://www.youtube.com/embed/EFPl18V0xPU?si=qbgjOQcqduHsQb_r'

        contFSReplace.appendChild(iframe)
    }
}
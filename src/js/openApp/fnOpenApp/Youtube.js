export default function Youtube(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Youtube"){
        let iframe = document.createElement("iframe")
        iframe.src='https://www.youtube-nocookie.com/embed/LY2XEQ_SSXA?si=mwSyNAYWeTL-z7hs'

        contFSReplace.appendChild(iframe)
    }
}
export default function Atribution(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Atribution"){
        let iframe = document.createElement("iframe")
        iframe.id="xcode"
        iframe.src='./atribution.html'

        contFSReplace.appendChild(iframe)
    }
}
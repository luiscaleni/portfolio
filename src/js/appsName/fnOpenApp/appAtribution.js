export default function appAtribution(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Atribution"){
        let iframe = document.createElement("iframe")
        iframe.id="xcode"
        iframe.src='../src/pages/atribution.html'

        contFSReplace.appendChild(iframe)
    }
}
export default function appYoutube(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Youtube"){
        let iframe = document.createElement("iframe")
        iframe.src='https://www.youtube.com/embed/EFPl18V0xPU?si=CWu1Ub7JnXE9OK3j&amp;controls=0'

        contFSReplace.appendChild(iframe)
    }
}
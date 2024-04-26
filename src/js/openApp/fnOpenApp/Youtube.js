export default function Youtube(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Youtube"){
        let iframe = document.createElement("iframe")
        iframe.src='https://www.youtube.com/embed/ocFG3yor--M?si=R0AgpiFBJk0l5Vj4'

        contFSReplace.appendChild(iframe)
    }
}
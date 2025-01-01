export default function appPhotos(){
    let contFSReplace = document.getElementById("contFSReplace")
    let contFSReplaceChild = contFSReplace.firstChild
    let id = contFSReplaceChild.firstChild.id

    if(id === "Photos"){
        let iframe = document.createElement("iframe")
        iframe.id="photos"
        iframe.src='/pages/photos.html'

        contFSReplace.appendChild(iframe)
    }
}
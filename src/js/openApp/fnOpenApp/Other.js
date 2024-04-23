export default function Others(){
    setInterval(() => {
        let contFSReplace = document.getElementById("contFSReplace")
        if (contFSReplace !== undefined) {
            let textApp = contFSReplace.closest(".textApp")
            textApp.innerHTML="En desarrollo"
        }
    }, 1000)
}

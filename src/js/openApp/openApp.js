import AppsData from "./fnOpenApp/AppsData"

import Youtube from "./fnOpenApp/Youtube"
import Atribution from "./fnOpenApp/Atribution"
import Camera from "./fnOpenApp/Camera"
import Memoji from "./fnOpenApp/Memoji"

export default function openApp(){
    let contFSReplace = document.getElementById("contFSReplace")
    let textApp

    if (contFSReplace !== null) {
        let element = contFSReplace
        let elementChild = element.firstChild
        let elementChildId = elementChild.firstChild.id

        for (let index = 0; index < AppsData.length; index++) {
            const e = AppsData[index]
            if (elementChildId === e.name) {
                switch (elementChildId) {
                    case "Camera":
                        Camera()
                        Memoji()
                        console.log("D")
                        break;
                    case "Youtube":
                        Youtube()
                        console.log("S")
                        break;
                    case "Atribution":
                        Atribution()
                        console.log("4")
                        break;
                    default:
                        break;
                }
                element.removeChild(elementChild)    
            }else{
                Others()
                index=2
            }
        }
        function Others(){
            textApp = elementChild.childNodes[1]
            textApp.textContent="Podes probar abriendo la Cámara."
            console.log(textApp)
        }
    }else{ return }
}
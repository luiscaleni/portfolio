import appsData from "./fnOpenApp/appsData"
import curriculum from "./fnOpenApp/curriculum"
import camera from "./fnOpenApp/camera"
import youtube from "./fnOpenApp/youtube"
import atribution from "./fnOpenApp/atribution"
import memoji from "./fnOpenApp/memoji"

import blackElm from "../functions/blackElm"

export default function openApp(){
    if (document.getElementById("contFSReplace") !== null) {
        let element = document.getElementById("contFSReplace")
        let elementChild = element.firstChild
        let elementChildId = elementChild.firstChild.id

        for (let index = 0; index < appsData.length; index++) {
            const e = appsData[index];
            if (elementChildId === e.name) {
                switch (elementChildId) {
                    case "Curriculum":
                        curriculum()
                        blackElm()
                        break;
                    case "Camera":
                        camera()
                        memoji()
                        break;
                    case "Youtube":
                        youtube()
                        break;
                    case "Atribution":
                        atribution()
                        break;
                    default:
                        break;
                }
                element.removeChild(elementChild)    
            }else{
                others()
            }      
        }
        function others(){
            let textApp = elementChild.childNodes[1]
            textApp.textContent="Podes probar abriendo la Cámara."
        }
    }
}
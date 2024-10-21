import appData from "./fnOpenApp/appsData"
import appCurriculum from "./fnOpenApp/appCurriculum"
import appCamera from "./fnOpenApp/appCamera"
import appYoutube from "./fnOpenApp/appYoutube"
import appAtribution from "./fnOpenApp/appAtribution"
import appCameraMemoji from "./fnOpenApp/appCameraMemoji"

import fnBlackElm from "../functions/fnBlackElm"

export default function openApps(){
    if (document.getElementById("contFSReplace") !== null) {
        let element = document.getElementById("contFSReplace")
        let elementChild = element.firstChild
        let elementChildId = elementChild.firstChild.id

        for (let index = 0; index < appData.length; index++) {
            const e = appData[index];
            if (elementChildId === e.name) {
                switch (elementChildId) {
                    case "Curriculum":
                        appCurriculum()
                        fnBlackElm()
                        break;
                    case "Camera":
                        appCamera()
                        appCameraMemoji()
                        break;
                    case "Youtube":
                        appYoutube()
                        break;
                    case "Atribution":
                        appAtribution()
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
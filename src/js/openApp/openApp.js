import AppsData from "./fnOpenApp/AppsData"
import Camera from "./fnOpenApp/Camera"
import Youtube from "./fnOpenApp/Youtube"
import Atribution from "./fnOpenApp/Atribution"
import Others from "./fnOpenApp/Other"

export default function openApp(){
    if (document.getElementById("contFSReplace") !== null) {
        let element = document.getElementById("contFSReplace")
        let elementChild = element.firstChild
        let elementChildId = elementChild.firstChild.id

        for (let index = 0; index < AppsData.length; index++) {
            const e = AppsData[index];
            if (elementChildId === e.name) {
                switch (elementChildId) {
                    case "Camera":
                        Camera()
                        break;
                    case "Youtube":
                        Youtube()
                        break;
                    case "Atribution":
                        Atribution()
                        break;
                    default:
                        Others()
                        break;
                }
                element.removeChild(elementChild)    
            }      
        }
    }else{ return }
}
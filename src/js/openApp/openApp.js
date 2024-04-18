import AppsData from "./fnOpenApp/AppsData"
import Curriculum from "./fnOpenApp/Curriculum"
import Camera from "./fnOpenApp/Camera"
import Youtube from "./fnOpenApp/Youtube"
import Atribution from "./fnOpenApp/Atribution"

export default function openApp(){
    if (document.getElementById("contFSReplace") !== null) {
        let element = document.getElementById("contFSReplace")
        let elementChild = element.firstChild
        let elementChildId = elementChild.firstChild.id

        for (let index = 0; index < AppsData.length; index++) {
            const e = AppsData[index];
            if (elementChildId === e.name) {
                switch (elementChildId) {
                    case "Curriculum":
                        Curriculum()
                        break;
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
                        break;
                }
                element.removeChild(elementChild)    
            }      
        }
    }else{ return }
}
export default function iconHomeEffect(value){
    let contParentNode
    let onOff
    let contFSReplace = document.getElementById("contFSReplace")
    let listaAppImg = document.getElementsByClassName("appImg")
    let listaWidget = document.getElementsByClassName("widget")

    let ihp_appImg = "iconHomePosition_appImg"
    let ihe_appImg = "iconHomeEffect_appImg"

    let ihp_widget = "iconHomePosition_widget"
    let ihe_widget = "iconHomeEffect_widget"

    if(value === "showIcons" || value === "hideIcons"){
        onOff = value
        if(!contFSReplace){
            if(onOff === "showIcons"){            
                setTimeout(() => {
                    for (let index = 0; index < listaAppImg.length; index++) {
                        let element = listaAppImg[index]
                        contParentNode = element.parentNode.parentNode.parentNode
                        contParentNode.classList.remove(ihp_appImg)             
                        contParentNode.classList.add(ihe_appImg)
                    }
                    for (let index = 0; index < listaWidget.length; index++) {
                        let element = listaWidget[index]
                        contParentNode = element.parentNode.parentNode.parentNode
                        contParentNode.classList.remove(ihp_widget)             
                        contParentNode.classList.add(ihe_widget)
                    }
                }, 200)
            }else if(onOff === "hideIcons"){
                setTimeout(() => {
                    for (let index = 0; index < listaAppImg.length; index++) {
                        let element = listaAppImg[index]
                        contParentNode = element.parentNode.parentNode.parentNode
                        contParentNode.classList.remove(ihe_appImg)             
                        contParentNode.classList.add(ihp_appImg)
                    }
                    for (let index = 0; index < listaWidget.length; index++) {
                        let element = listaWidget[index]
                        contParentNode = element.parentNode.parentNode.parentNode
                        contParentNode.classList.remove(ihe_widget)             
                        contParentNode.classList.add(ihp_widget)
                    }
                }, 500)
            }
        }
    }
}

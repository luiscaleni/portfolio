export  default function iconHomeEffect(value){
    let contParentNode
    let onOff
    let contFSReplace = document.getElementById("contFSReplace")
    let listaAppImg = document.getElementsByClassName("appImg")
    let listaWidget = document.getElementsByClassName("widget")

    if(value === "showIcons" || value === "hideIcons"){
        onOff = value
        if(!contFSReplace){
            if(onOff === "showIcons"){            
                for (let index = 0; index < listaAppImg.length; index++) {
                    let element = listaAppImg[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomePosition-appImg")             
                    contParentNode.classList.add("iconHomeEffect-appImg")
                }
                for (let index = 0; index < listaWidget.length; index++) {
                    let element = listaWidget[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomePosition-widget")             
                    contParentNode.classList.add("iconHomeEffect-widget")
                }
            }else if(onOff === "hideIcons"){
                for (let index = 0; index < listaAppImg.length; index++) {
                    let element = listaAppImg[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomeEffect-appImg")             
                    contParentNode.classList.add("iconHomePosition-appImg")
                }
                for (let index = 0; index < listaWidget.length; index++) {
                    let element = listaWidget[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomeEffect-widget")             
                    contParentNode.classList.add("iconHomePosition-widget")
                }
            }
        }
    }
}

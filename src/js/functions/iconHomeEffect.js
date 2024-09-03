export  default function iconHomeEffect(value){
    let contParentNode
    let onOff
    let contFSReplace = document.getElementById("contFSReplace")
    let lista = document.getElementsByClassName("app")

    if(value === "showIcons" || value === "hideIcons"){
        onOff = value
        if(!contFSReplace){
            if(onOff === "showIcons"){            
                for (let index = 0; index < lista.length; index++) {
                    let element = lista[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomePosition")             
                    contParentNode.classList.add("iconHomeEffect")
                }
            }else if(onOff === "hideIcons"){
                for (let index = 0; index < lista.length; index++) {
                    let element = lista[index]
                    contParentNode = element.parentNode.parentNode.parentNode
                    contParentNode.classList.remove("iconHomeEffect")             
                    contParentNode.classList.add("iconHomePosition")
                }
            }
        }
    }
}

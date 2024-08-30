export  default function iconHomeEffect(){
    let contParentNode
    let lista = document.getElementsByClassName("app")
    
        for (let index = 0; index < lista.length; index++) {
            let element = lista[index]
            contParentNode = element.parentNode.parentNode.parentNode
            contParentNode.classList.add("appNone")
            contParentNode.id=""
        }
        
    
}

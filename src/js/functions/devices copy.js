let loaderPage = document.getElementById("loaderPage")
let root = document.getElementById("root")
let main
let content = document.createElement("div")
let nomobile = '<p id="nomobile-text"><span id="metadatos">#metadatos</span> es un proyecto que está diseñado para ejecutarse en dispositivos móbiles.'
content.id="content"
content.innerHTML=nomobile

loaderPage.innerHTML='<p id="lp-title"><span id="titleMetadatos">Porfolio</span><br>by Luis Caleni Velasquez</p>'
loaderPage.style.transition="all .5s ease-in-out"

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
/*    main = document.getElementById("main")
    loaderPage.remove()
    root.appendChild(content)
    root.removeChild(main)*/
    
} else {
    //loaderPage.style.backgroundImage= 'url("/assets/wp/wp-iphone-lockScreen.png")'
    window.addEventListener("load",()=>{
        setTimeout(() => {
            loaderPage.style.opacity="0"
            setTimeout(() => {
                document.body.removeChild(loaderPage)
            }, 1000)
        }, 2000)
    })    
}
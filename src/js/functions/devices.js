let root = document.getElementById("root")
let loaderPage = document.getElementById("loaderPage")
let nomobile = '<div id="content-general"><div id="content"><p><span id="metadatos">#metadatos</span> es un proyecto que está diseñado para ejecutarse en dispositivos móbiles. ¿Estás en un dispositivo mobil?. <a id="reload" href="index.html" title="Recargar la página">Recarga la página.</a></p></div></div>'

if (navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Windows Phone/i)) {
    console.log("Estás usando un dispositivo móvil!!")
    window.onload=()=>{
        loaderPage.innerHTML='<p id="lp-title"><span id="titleMetadatos">#metadatos</span><br>Cargando ...</p>'
        loaderPage.style.transition="all .5s ease-in-out"
        setTimeout(() => {
            loaderPage.style.opacity="0"
            setTimeout(() => {
                document.body.removeChild(loaderPage)
            }, 1000)
        }, 3000)
    }
} else {
    console.log("No estás usando un móvil")
    root.remove()
    root.appendChild(nomobile)
}
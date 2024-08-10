export default function whiteElm(){
    document.getElementById("wifiBlack").style.display="none"
    document.getElementById("signalBlack").style.display="none"
    document.getElementById("wifi").style.display="block"
    document.getElementById("signal").style.display="block"

    document.getElementById("hour").style.color="#fff"
    document.getElementById("hour").style.textShadow="0 0 0.2em black"
    document.getElementById("hour").style.fontWeight="bolder"
}
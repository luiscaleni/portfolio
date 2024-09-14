export default function FullScreen(element) {
    if (element.requestFullScreen) {
        element.requestFullScreen()
    } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen()
    }
}
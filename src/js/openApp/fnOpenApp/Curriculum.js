export default function Curriculum(){
    let imgCV = document.createElement("img")

    imgCV.src="/assets/cv.png"
    imgCV.id="imgCV"
    document.getElementById("nav").classList.add("black_blur")
    document.getElementById("contFSReplace").style.backgroundColor="white"

    document.getElementById("contFSReplace").appendChild(imgCV)
}
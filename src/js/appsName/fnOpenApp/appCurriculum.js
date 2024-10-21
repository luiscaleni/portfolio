export default function appCurriculum(){
    let imgCV = document.createElement("img")

    imgCV.src="/assets/cv.png"
    imgCV.id="imgCV"
    document.getElementById("contNav").classList.add("black_blur")
    document.getElementById("contFSReplace").style.backgroundColor="white"

    document.getElementById("contFSReplace").appendChild(imgCV)
}
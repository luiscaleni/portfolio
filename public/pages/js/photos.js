let interval = setInterval(() => {
let photos = document.getElementById("photos")
let photo
let imgPhoto

    if(photos){
        for(let i = 1; i < 15; i++){
            photo = document.createElement("div")
            imgPhoto = document.createElement("img")
        
            imgPhoto.src=`/assets/imgProjects/${i}.jpg`
            imgPhoto.alt="photo"
            photo.classList.add("photo")
            photos.classList.add("photos")
        
            photo.appendChild(imgPhoto)
            photos.appendChild(photo)
        }
        clearInterval(interval)
    }

}, 1000)
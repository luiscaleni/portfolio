import React, {useEffect} from "react"
import "./ScreenLoader.css"

export default function ScreenLoader(){
    useEffect(()=>{
        let screenLoader = document.getElementById("screenLoader")
        let lockScreen = document.getElementById("lockScreen") 
        setTimeout(() => {
            screenLoader.remove()
            lockScreen.style.backgroundImage="url('/assets/wp/wp-light.jpg')"
        }, 5000)
    },[])

    return(
        <>
            <div id="screenLoader">
                <div id="contLoader">
                    <img src="./appleLogo.png"/>
                    <div id="contLoad">
                        <div id="load"></div>
                    </div>
                </div>
                <div id="copyright">
                    <p id="author">por Luis Caleni Velasquez</p>
                </div>
            </div>
        </>
    )
}
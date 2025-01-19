import React, {useEffect} from "react"
import "./ScreenLoader.css"

export default function ScreenLoader(){
    useEffect(()=>{
        let screenLoader = document.getElementById("screenLoader")
        let main = document.getElementById("main") 
        if (main) {
            setTimeout(() => {
                screenLoader.remove()
            }, 5000)
        }
    },[])

    return(
        <>
            <div id="screenLoader">
                <div id="contLoader">
                    <img src="/appleLogo.png"/>
                    <div id="contLoad">
                        <div id="load"></div>
                    </div>
                </div>
                <div id="copyright">
                    <p id="author">Portfolio: Luis Caleni Velasquez</p>
                    <p id="versionDate">v. 1.5.2 - 18/01/2025</p>
                </div>
            </div>
        </>
    )
}
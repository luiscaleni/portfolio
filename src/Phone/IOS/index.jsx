import React, {useEffect} from "react"

import "./IOS.css"
import LockScreen from "./CompSystem/CompLockScreen"
import ButtonHome from "./CompSystem/CompButtonHome"
import Nav from "./CompSystem/CompNav"
import ContHome from "./ContHome"


export default function IOS(){
   useEffect(()=>{
        let contLoader = document.getElementById("screenLoader")
        setTimeout(() => {
            contLoader.remove()
        }, 5000)
    },[])
    
    return (
        <>
            <div id="screenLoader">
                <div id="contLoader">
                    <img src="./appleLogo.png"/>
                    <div id="contLoad">
                        <div id="load"></div>
                    </div>
                </div>
                <div id="copyright">
                    <p id="author">by Luis Caleni Velasquez</p>
                </div>
            </div>
            <LockScreen />
            <Nav />
            <ContHome />
            <ButtonHome />
        </>
    )
}
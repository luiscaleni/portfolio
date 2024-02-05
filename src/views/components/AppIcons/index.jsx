import React from "react";
import './AppIcons.css'

export default function AppIcons({contType="" ,type="", name="", classNameApp="", id="", text=" "}){

let LetClassNameApp= classNameApp + " app"
let letAppImgName = "src/views/assets/images/icons/"+ type +"/"+ name + "." + type

return (
    <>
        <div className={contType}>
            <img src={letAppImgName} className={LetClassNameApp} id={id}/>
            <span className="textApp">{text}</span>
        </div>
    </>
    )
}
import React from "react";
import './AppIcons.css'

let addClassApp

export default function AppIcons({name, classNameApp, id="", text}){
    addClassApp = classNameApp + " app"

return (
    <>
        <div className="contTotal">
            <div className="contToggle">
                <div className="content_app_widget">
                    <img src={"/assets/icons/"+ name + ".svg"} className={addClassApp} id={id} />
                    <span className="textApp">{text}</span>
                </div>
            </div>
        </div>
    </>
    )
}
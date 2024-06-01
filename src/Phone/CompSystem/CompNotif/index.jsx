import React from "react"
import './Notif.css'

export default function Notif({imgName, title, text, index=""}){
    let classNotif
    let imgNameSrc

    if (index) {
        classNotif=index
    }else{
        classNotif="notif"
    }
    imgNameSrc= "/assets/persons/" + imgName + ".png"
    return (
        <>
            <div className="contNotif">
                <div className={classNotif}>
                    <img src={imgNameSrc} className="imgNotif" />
                    <div id="contentTextNotif">
                        <h4>{title}</h4>
                        <p>{text}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
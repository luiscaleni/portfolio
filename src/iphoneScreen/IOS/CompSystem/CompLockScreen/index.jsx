import React from "react"
import './LockScreen.css'
import Notif from "../CompNotif"

export default function LockScreen(){
    return (
        <>
            <div id="lockScreen">
                <div id="contElemLockScreen">
                    <div id="groupScreen">
                        <div id="groupScreenTop">
                            <div id="dateScreen"></div>
                            <div id="hourScreen"></div>
                        </div>
                        <div id="lockScreenMemoji">
                            <img src="/assets/memoji.png" id="memoji"/>
                        </div>

                        <div id="groupNotif">
                            <Notif imgName="timCook" title="Tim Cook" text="Hello!, Wellcome to iPhone Pro Max web version"/>
                            <Notif imgName="jhonyIve" title="Jhony Ive" text="I am Jonathan Paul Ive" index="indexTwo"/>
                            <Notif imgName="philSchiller" title="Phil Schiller" text="Hello!, I am Philip W. Schiller" index="indexThree"/>
                        </div>
                    </div>
                    <div id="groupScreenDown">
                        <div className="optionIconScreen">
                            <img src="/assets/iconsSystem/flashlight.png"/>
                        </div>
                        <div id="unlockOption">
                            <p id="unlockBySliding">Toca para desbloquear</p>
                        </div>
                        <div className="optionIconScreen">
                            <img src="/assets/iconsSystem/camera.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
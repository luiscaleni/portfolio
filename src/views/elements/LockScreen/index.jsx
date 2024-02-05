import React from "react";
import './LockScreen.css'

export default function LockScreen(){
    return (
        <>
            <div id="lockScreen">
                <div id="groupScreenTop">
                    <div id="dateScreen">Viernes, 02 de Febrero</div>
                    <div id="hourScreen">12:00</div>
                </div>
                <div id="groupScreenDown">
                    <div className="optionIconScreen">
                        <img src="src/views/assets/images/icons/png/flashlight.png"/>
                    </div>
                    <div id="unlockOption">
                        <p id="unlockBySliding">Toca para desbloquear</p>
                    </div>
                    <div className="optionIconScreen">
                        <img src="src/views/assets/images/icons/png/camera.png"/>
                    </div>
                </div>
            </div>
        </>
    )
}
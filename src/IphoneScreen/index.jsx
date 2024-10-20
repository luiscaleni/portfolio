import React from "react"
import "./IphoneScreen.css"

import DynamicIsland from "./IOS/CompSystem/CompDynamicIsland"
import IOS from "./IOS"

export default function IphoneScreen(){
    return (
        <>
        <main id="main">
            <span id="button_action"></span>
            <span id="button_v_up" className="levelAudio"></span>
            <span id="button_v_down" className="levelAudio"></span>
            
            <div id="t1">
                <div id="t2">
                    <div id="t3">
                        <div id="titanium">
                            <div id="iphoneScreen">
                                <DynamicIsland />
                                <IOS />
                            </div>
                        </div>
                    </div>
                </div>
            </div>            
            <span id="button_lock" title="Bloquear/Desbloquear iPhone"></span>
        </main>
        </>
    )
}
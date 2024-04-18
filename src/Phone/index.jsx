import React from "react"
import './Phone.css'

import DynamicIsland from "./CompSystem/CompDynamicIsland"

import LockScreen from "./CompSystem/CompLockScreen"
import ButtonHome from "./CompSystem/CompButtonHome"
import Nav from "./CompSystem/CompNav"
import Dock from "./CompSystem/CompDock"

import ContHome from "./ContHome"

export default function Phone(){
    return (
        <main id="main">
            <span id="button_action"></span>
            <span id="button_v_up" className="levelAudio"></span>
            <span id="button_v_down" className="levelAudio"></span>
            <div id="titanium">
                <div id="phone">
                    <span className="loader" id="loader"></span>
                    <DynamicIsland />
                    <Nav />
                    <div id="cont_home">
                        <ContHome />
                        <Dock />
                    </div>
                    <LockScreen />
                    <ButtonHome />
                </div>
            </div>
            <span id="button_lock" title="Bloquear/Desbloquear iPhone"></span>
        </main>
    )
}
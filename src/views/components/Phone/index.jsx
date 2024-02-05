import React from "react"
import './Phone.css'

import DynamicIsland from "../DynamicIsland"
import NotifBar from "../NotifBar"
import Dock from "../Dock"
import Video from "../Video"
import ButtonHome from "../ButtonHome"

import Home from "../../elements/Home"
import LockScreen from "../../elements/LockScreen"

export default function Phone(){
    return (
        <main id="main">
            <span id="button_action"></span>
            <span id="button_v_up"></span>
            <span id="button_v_down"></span>
            <div id="phone">
                <span className="loader" id="loader"></span>
                <DynamicIsland />
                <div id="cont_apps_home">
                    <NotifBar />
                    <Home />
                    <Dock />         
                </div>
                <Video />
                <LockScreen />
                <ButtonHome />
            </div>
            <span id="button_lock"></span>
        </main>
    )
}
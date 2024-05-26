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
            
        </main>
    )
}
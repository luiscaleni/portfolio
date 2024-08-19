import React from "react"

import LockScreen from "../CompLockScreen"
import ButtonHome from "../CompButtonHome"
import Nav from "../CompNav"
import Dock from "../CompDock"

import ContHome from "../../ContHome"

export default function IOS(){
    return (
        <>
            <LockScreen />
            <Nav />
            <div id="cont_home">
                <ContHome />
                <Dock />
            </div>
            <ButtonHome />
        </>
    )
}
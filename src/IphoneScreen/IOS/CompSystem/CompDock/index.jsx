import React from "react";
import './Dock.css';
import AppIcons from "../CompAppIcons";

export default function Dock(){
    
    return (
        <>
            <div id="content_dock">
                <div className="dock">
                    <AppIcons typeImage="svg" name="safari" classNameApp="appImg" id="Safari"/>
                    <AppIcons typeImage="svg" name="apple-music" classNameApp="appImg" id="AppleMusic"/>
                    <AppIcons typeImage="svg" name="ios-message" classNameApp="appImg" id="Message"/>               
                    <AppIcons typeImage="svg" name="mail" classNameApp="appImg" id="Mail"/>
                </div>
            </div>
        </>
    )
}
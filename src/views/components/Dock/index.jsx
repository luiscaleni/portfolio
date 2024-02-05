import React from "react";
import './Dock.css'
import AppIcons from "../AppIcons";

export default function Dock(){
    
    return (
        <div id="content_dock">
            <div id="dock">
                <AppIcons contType="content_app" type="svg" name="safari" classNameApp="dockImg" id="Safari"/>

                <AppIcons contType="content_app" type="svg" name="apple-music" classNameApp="dockImg" id="AppleMusic"/>

                <AppIcons contType="content_app" type="svg" name="ios-message" classNameApp="dockImg" id="Message"/>

                <AppIcons contType="content_app" type="svg" name="mail" classNameApp="dockImg" id="Mail"/>
            </div>
        </div>
    )
}
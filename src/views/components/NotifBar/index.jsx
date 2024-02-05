import React from "react";
import './NotifBar.css'

export default function NotifBar(){
    return (
        <nav id="nav">
            <div id="hour"><p>12:00 am</p></div>
            <div id="info">
                <div className="contIconNavBar"><img src="src/views/assets/images/icons/svg/wifi.svg" alt="wifi" /></div>
                <div className="contIconNavBar"><img src="src/views/assets/images/icons/svg/signal.svg" alt="signal" /></div>
                <div id="battery_group">
                    <span id="battery">100</span>
                    <span id="battery_point"></span>
                </div>
            </div>
        </nav>
    )
}
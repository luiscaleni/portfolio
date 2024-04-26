import React from "react"
import './ContHome.css'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import AppIcons from "../CompSystem/CompAppIcons"

export default function ContHome(){
    return (
        <>
        <div className="content_windows" id="content_windows">
            <Splide aria-label="Apps home">
                <SplideSlide>
                    <div className="container_list_app">
                        <AppIcons name="measure" classNameApp="widget" id="Measure" text="Measure" />
                        <AppIcons name="stocks" classNameApp="widget" id="stocks" text="Stocks" />
                    </div>
                    <div className="container_list_app">
                        <AppIcons name="calendar" classNameApp="appImg" id="Calendar" text="Calendar" />
                        <AppIcons name="home" classNameApp="appImg" id="Home" text="Home" />
                        <AppIcons name="camera" classNameApp="appImg" id="Camera" text="Camera" />
                        <AppIcons name="facetime" classNameApp="appImg" id="Facetime" text="Facetime" />
                    </div>
                    <div className="container_list_app">
                        <AppIcons name="notes" classNameApp="appImg" id="Notes" text="Notes" />
                        <AppIcons name="app-store" classNameApp="appImg" id="AppStore" text="App Store" />
                        <AppIcons name="clock" classNameApp="appImg" id="Clock" text="Clock" />
                        <AppIcons name="contacts" classNameApp="appImg" id="Contacts" text="Contacts" />
                    </div>
                    <div className="container_list_app">
                        <AppIcons name="photos" classNameApp="appImg" id="Photos" text="Photos" />
                        <AppIcons name="youtube" classNameApp="appImg" id="Youtube" text="Youtube" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="container_list_app">
                        <AppIcons name="calculator" classNameApp="appImg" id="Calculator" text="Calculator" />
                        <AppIcons name="weather" classNameApp="appImg" id="Weather" text="Weather" />
                        <AppIcons name="xcode" classNameApp="appImg" id="Atribution" text="Atribuciones" />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
        
        </>
    )
}
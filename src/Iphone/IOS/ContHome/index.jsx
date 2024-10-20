import React from "react"
import './ContHome.css'
import { Splide, SplideSlide } from "@splidejs/react-splide"
import AppIcons from "../CompSystem/CompAppIcons"
import Dock from "../CompSystem/CompDock"
import CompContainerListApp from "../CompUtils/CompContainerListApp"

export default function ContHome(){
    return (
        <>
        <div id="cont_home">
                <div id="navHome"></div>
                <Splide aria-label="Apps home">
                    <SplideSlide>
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="measure" classNameApp="widget" id="Measure" text="Measure" />
                                <AppIcons name="stocks" classNameApp="widget" id="stocks" text="Stocks" />
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="curriculum" classNameApp="appImg" id="Curriculum" text="Curriculum" />
                                <AppIcons name="camera" classNameApp="appImg" id="Camera" text="Camera" />
                                <AppIcons name="xcode" classNameApp="appImg" id="Atribution" text="Atributions" />
                                <AppIcons name="youtube" classNameApp="appImg" id="Youtube" text="Youtube" />
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="home" classNameApp="appImg" id="Home" text="Home" />
                                <AppIcons name="calendar" classNameApp="appImg" id="Calendar" text="Calendar" />
                                <AppIcons name="facetime" classNameApp="appImg" id="FaceTime" text="FaceTime" />
                                <AppIcons name="app-store" classNameApp="appImg" id="AppStore" text="App Store" />
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="wallet" classNameApp="appImg" id="wallet" text="Wallet" />
                                <AppIcons name="find-my" classNameApp="appImg" id="findMy" text="Find my" />
                                <AppIcons name="news" classNameApp="appImg" id="news" text="News" />
                                <AppIcons name="clock" classNameApp="appImg" id="Clock" text="Clock" />
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="health" classNameApp="appImg" id="health" text="Health" />
                                <AppIcons name="photos" classNameApp="appImg" id="Photos" text="Photos" />
                                <AppIcons name="contacts" classNameApp="appImg" id="Contacts" text="Contacts" />
                            </>
                        } />
                    </SplideSlide>
                    <SplideSlide>
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="calculator" classNameApp="appImg" id="Calculator" text="Calculator" />
                                <AppIcons name="weather" classNameApp="appImg" id="Weather" text="Weather" />
                                <AppIcons name="reminders" classNameApp="appImg" id="reminders" text="Reminders" />
                                <AppIcons name="settings" classNameApp="appImg" id="settings" text="Settings" />
                            </>
                        } />
                        <CompContainerListApp elements={
                            <>
                                <AppIcons name="voice-memos" classNameApp="appImg" id="voiceMemos" text="Voice Memos" />
                                <AppIcons name="notes" classNameApp="appImg" id="Notes" text="Notes" />
                            </>
                        } />
                    </SplideSlide>
                </Splide>
                <Dock />
            
        </div>
        </>
    )
}
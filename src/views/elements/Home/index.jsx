import React from "react";
import './Home.css';
import { Splide, SplideSlide } from "@splidejs/react-splide";
import AppIcons from "../../components/AppIcons";

export default function Home(){
    return (
        <div className="content_windows" id="content_windows">
            <Splide aria-label="Apps home">
                <SplideSlide>
                    <AppIcons contType="content_widget" type="svg" name="measure" classNameApp="widget" id="Measure" text="Measure" />
                    <AppIcons contType="content_widget" type="svg" name="stocks" classNameApp="widget" id="stocks" text="Stocks" />
                    <div className="container_list_app">
                        <AppIcons contType="content_app" type="svg" name="calendar" classNameApp="appImg" id="Calendar" text="Calendar" />
                        <AppIcons contType="content_app" type="svg" name="home" classNameApp="appImg" id="Home" text="Home" />
                        <AppIcons contType="content_app" type="svg" name="camera" classNameApp="appImg" id="Camera" text="Camera" />
                        <AppIcons contType="content_app" type="svg" name="facetime" classNameApp="appImg" id="Facetime" text="Facetime" />
                    </div>
                    <div className="container_list_app">
                        <AppIcons contType="content_app" type="svg" name="clock" classNameApp="appImg" id="Clock" text="Clock" />
                        <AppIcons contType="content_app" type="svg" name="app-store" classNameApp="appImg" id="AppStore" text="App Store" />
                        <AppIcons contType="content_app" type="svg" name="clock" classNameApp="appImg" id="Clock" text="Clock" />
                        <AppIcons contType="content_app" type="svg" name="contacts" classNameApp="appImg" id="Contacts" text="Contacts" />
                    </div>
                    <div className="container_list_app">
                        <AppIcons contType="content_app" type="svg" name="photos" classNameApp="appImg" id="Photos" text="Photos" />
                        <AppIcons contType="content_app" type="jpg" name="curriculum" classNameApp="appImg" id="Curriculum" text="Curriculum" />
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div className="container_list_app">
                        <AppIcons contType="content_app" type="svg" name="calculator" classNameApp="appImg" id="Calculator" text="Calculator" />
                        <AppIcons contType="content_app" type="svg" name="notes" classNameApp="appImg" id="Notes" text="Notes" />
                        <AppIcons contType="content_app" type="svg" name="weather" classNameApp="appImg" id="Weather" text="Weather" />
                    </div>
                </SplideSlide>
            </Splide>
        </div>
    )
}
import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import FirstSwiperComponent from "../components/FirstSwiperComponent";
import ExporeSwiper from "../components/ExporeSwiper";
import FlashBannerComponent from "../components/FlashBannerComponent";
import FocusSwiperComponent from "../components/FocusSwiperComponent";
import LuxuryComponent from "../components/LuxuryComponent";
import RadarSwiperComponent from "../components/RadarSwiperComponent";

const Flash = () => {
    return(
        <>
        <Appbar1/>
        <Navbar />
        <Appbar3/>
        <FirstSwiperComponent />
        <ExporeSwiper />
        <FlashBannerComponent />
        <FocusSwiperComponent />
        <LuxuryComponent />
        <RadarSwiperComponent />
        </>
    )
}

export default Flash;
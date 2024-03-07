
import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import MakeUpStoreComponent from "../components/MakeUpStoreComponent";
import MakeupSecondSwiperComponent from "../components/MakeupSecondSwiperComponent";
import BrandsCardComponent from "../components/BrandsCardComponent";
import MakeupCardOneSwiperComponent from "../components/MakeupCradOneSwiperComponent";
import MakuupLuxeComponent from "../components/MakeupLuxeComponent";
import MakeupCardSecondSwiperComponent from "../components/MakeupCardSecondSwiperComponent";


const MakeUpPage = () => {
    return(
        <>
        <Appbar1 />
        <Navbar />
        <Appbar3 />
        <MakeUpStoreComponent />
        <MakeupSecondSwiperComponent />
        <BrandsCardComponent />
        <MakeupCardOneSwiperComponent />
        <MakuupLuxeComponent />
        <MakeupCardSecondSwiperComponent />
        </>
    );
}

export default MakeUpPage;
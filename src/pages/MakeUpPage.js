
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
import MakeupBrandsSwiperComponent from "../components/MakeupBrandsSwiperComponent";
import MakeupStreamlineSliderComponent from "../components/MakeupStreamlineSliderComponent";
import MakeupFindSliderComponent from "../components/MakeupFindSliderComponent";
import MakeupTrendingComponent from "../components/MakeupTrendingComponent";
import MakeupNewLanchComponent from "../components/MakeupNewLanchComponent";
import MakeupAtNykaaComponent from "../components/MakeupAtNykaaComponent";
import MakeupAceSwiperComponent from "../components/MakeupAceSwiperComponent";
import MakeupBudgetComponent from "../components/MakeupBudgetComponent";
import MakeupGloballyCardSwiperComponent from "../components/MakeupGloballyCardSwiperComponent";


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
        <MakeupBrandsSwiperComponent />
        <MakeupStreamlineSliderComponent />
        <MakeupFindSliderComponent />
        <MakeupTrendingComponent />
        <MakeupNewLanchComponent />
        <MakeupAtNykaaComponent />
        <MakeupAceSwiperComponent />
        <MakeupBudgetComponent />
        <MakeupGloballyCardSwiperComponent />
        </>
    );
}

export default MakeUpPage;
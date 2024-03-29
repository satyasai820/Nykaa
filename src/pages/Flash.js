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
import HotListSwiperComponent from "../components/HotListSwiperComponent";
import StellerComponent from "../components/StellerComponent";
import VitaminSwiperComponent from "../components/VitaminSwiperComponent";
import ProductSwiperComponent from "../components/ProductSwiperComponent";
import BeautySwiperComponent from "../components/BeautySwiperComponent";
import BeautyGudiesSwiperComponent from "../components/BeautyGudiesSwiperComponent";
import SelfCareSwiperComponent from "../components/SelfCareSwiperComponent";
import GiftComponent from "../components/GiftComponent";
import SwatchSwiperComponent from "../components/SwatchSwiperComponent";
import HandPickSwiperComponent from "../components/HandPickSwiperComponent";
import LastSwiperComponent from "../components/LastSwiperComponent";
import Footer from "../components/Footer";
import { Button, Grid } from "@mui/material";
import { Icon } from "@iconify/react";
import ScrollUpComponent from "../components/ScrollUpComponent";

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
        <HotListSwiperComponent />
        <StellerComponent />
        <VitaminSwiperComponent />
        <ProductSwiperComponent />
        <BeautySwiperComponent />
        <BeautyGudiesSwiperComponent />
        <SelfCareSwiperComponent />
        <GiftComponent />
        <SwatchSwiperComponent />
        <HandPickSwiperComponent />
        <LastSwiperComponent />
        <Footer />
        {/* <Grid sx={{position:'sticky', bottom:0, textAlign:'end', padding:'0px 10px 20px 0px'}}>
        <Button href="#" sx={{border:'1px solid black', backgroundColor:'#FFFFFF'}}> <Icon icon="prime:arrow-up" width="25" height="25"  style={{color: 'black'}} /> </Button>
        </Grid> */}
        <ScrollUpComponent />
        </>
    )
}

export default Flash;
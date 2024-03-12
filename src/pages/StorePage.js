import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import StoreBannerComponent from "../components/StoreBannerComponent";
import StoreSecondComponent from "../components/StoreSecondComponent";

const StorePage = () => {
    return(
        <>
        <Appbar1 />
        <Navbar />
        <Appbar3 />
        <StoreBannerComponent />
        <StoreSecondComponent />
        

        </>
    );
}
export default StorePage;
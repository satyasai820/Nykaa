import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import StoreBannerComponent from "../components/StoreBannerComponent";
import StoreSecondComponent from "../components/StoreSecondComponent";
import Footer from "../components/Footer";

const StorePage = () => {
    return(
        <>
        <Appbar1 />
        <Navbar />
        <Appbar3 />
        <StoreBannerComponent />
        <StoreSecondComponent />
        <Footer />
        

        </>
    );
}
export default StorePage;
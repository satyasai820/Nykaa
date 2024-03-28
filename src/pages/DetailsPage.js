// import { Grid, Typography } from "@mui/material";
import React from "react";
import DetailsBanner from "../components/ḌetailsBanner";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import DetailsSecondComponent from "../components/DetailsSecondComponent";
import DetailsThirdComponent from "../components/DetailsThirdComponent";
import Footer from '../components/Footer'
const DetailsPage = () => {

    return(
        <>
        <Appbar1 />
        <Navbar />
        <Appbar3 />
        <DetailsBanner />
        <DetailsSecondComponent />
        <DetailsThirdComponent />
        <Footer />
        </>
    );
}

export default DetailsPage;
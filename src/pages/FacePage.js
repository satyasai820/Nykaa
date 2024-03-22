import React from "react";
import { useParams } from "react-router-dom";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import FaceFirstComponent from "../components/FaceFirstComponent";
import FaceSecondComponent from "../components/FaceSecondComponent";
import Footer from "../components/Footer";

const FacePage = () => {


    const pram = useParams();
    const routename = pram.id;
    console.log('this is ----', routename);




    return(
        <>
        <Appbar1 />
        <Navbar />
        <Appbar3 />
        <FaceFirstComponent/>
        <FaceSecondComponent />
        <Footer />
        </>
    );
}

export default FacePage;
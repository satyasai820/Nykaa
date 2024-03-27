// import { Grid, Typography } from "@mui/material";
import React from "react";
import DetailsBanner from "../components/ḌetailsBanner";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";
import DetailsSecondComponent from "../components/DetailsSecondComponent";
import DetailsThirdComponent from "../components/DetailsThirdComponent";
const DetailsPage = () => {

    // const productImages =JSON.parse(localStorage.getItem('productImages'));
    // console.log("this is details pages imgs>>>>",productImages);
    // console.log("this is one img ededed----->",productImages[0]);
  

    return(
        <>
        
        {/* <Grid>
        <Typography>hello</Typography>
        { productImages.map((item) => (
            <>
            <img src={item.img} style={{maxWidth:'100%', height:'auto'}} />
            {console.log("This is imgs-->", (item.img))}
            </>
        ))

        }
        
        </Grid> */}
        <Appbar1 />
        <Navbar />
        <Appbar3 />
        <DetailsBanner />
        <DetailsSecondComponent />
        <DetailsThirdComponent />
        </>
    );
}

export default DetailsPage;
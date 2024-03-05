import { Typography } from "@mui/material";
import React from "react";
import Appbar1 from "../components/Appbar1";
import Navbar from "../components/Navbar";
import Appbar3 from "../components/Appbar3";


const MakeUpPage = () => {
    return(
        <>
        <Appbar1 />
        <Navbar />
        <Appbar3 />
            <Typography>Hello</Typography>
        </>
    );
}

export default MakeUpPage;
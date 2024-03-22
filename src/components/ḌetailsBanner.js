import { Grid } from "@mui/material";
import React from "react";

const DetailsBanner = () => {
    return(
        <>
        <Grid container sx={{justifyContent:'center'}}>
            <Grid sx={{width:{xs:'100%', sm:'90%', md:'80%'}, marginTop:{xs:'140px', sm:'100px', md:'10px'}}}>
            <Grid sx={{textAlign:'center', }}>
                <img src="https://images-static.nykaa.com/uploads/876c0263-e1e9-4fd6-a4df-2fcd1b6dc5bb.jpg?tr=cm-pad_resize,w-1200" alt="" style={{maxWidth:'100%', height:'auto'}} />
            </Grid>
                 </Grid>
        </Grid>
        </>
    )
}

export default DetailsBanner ;
import { Grid, Typography } from "@mui/material";
import React from "react";

const ProfileTabFifthComponent = () => {
    return(
        <>
        <Grid container sx={{ justifyContent:'center'}} >
        <Grid sx={{width:{xs:'100%', sm:'95%'}, backgroundColor:'#FFFFFF'}}>
        <Grid sx={{borderBottom:'1px solid lightgrey'}}>
            <Typography sx={{padding:'8px', color:'#3F414D', fontWeight:550, fontSize:{xs:'13.5', sm:'20px'}, }} >My Saved Payments</Typography>
        </Grid>
        <Grid sx={{margin:'110px 0px', textAlign:'center'}}>
            <Typography sx={{ color:'#3F414D', fontWeight:550, fontSize:{xs:'13.5px', sm:'20px'}, }} >You do not have saved payment options.</Typography>
        </Grid>
        </Grid>
        </Grid>
        </>
    );
}

export default ProfileTabFifthComponent;
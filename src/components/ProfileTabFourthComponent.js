import { Button, Grid, Typography } from "@mui/material";
import React from "react";

const ProfileTabFourthComponent = () => {
    return(
        <>
        <Grid container sx={{ justifyContent:'center'}}>
        <Grid sx={{width:{xs:'100%', sm:'95%'},backgroundColor:'#FFFFFF', textAlign:'center'}}>
            <Grid sx={{marginTop:'40px'}}>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS6BIGo8tfF-JQSUTVSkSavQpGTq7s9xyV2xAc_NnswcC18XfSm" alt="" style={{maxWidth:'100%', height:'auto'}} />
            </Grid>
            <Grid >
                <Typography sx={{fontWeight:550, fontSize:{xs:'14px', sm:'17px'}, marginTop:'15px'}}>NO ITEMS IN THE WISHLIST</Typography>
                <Typography sx={{fontSize:'12px', marginTop:'10px'}}>Add now, Buy Later.</Typography>
                <Typography sx={{fontSize:'12px', color:'#000000'}}>Save your favourite beauty items here!</Typography>
                <Button sx={{border:'1px solid lightgrey', fontSize:'12px ', color:'#E80071', fontWeight:550, textTransform:'none', padding:'8px 15px', marginTop:'15px', marginBottom:'30px'}}>Start Shopping</Button>
            </Grid>
        </Grid>
        </Grid>
        </>
    );
}

export default ProfileTabFourthComponent;
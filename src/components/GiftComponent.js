import { Grid, Typography } from "@mui/material";
import React from "react";

const GiftComponent = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%' }}}>
                    <Grid sx={{ marginLeft:{xs:'10px',sm:'30px'} , borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Get Gifting</Typography>
                        <Typography variant="p" sx={{ fontSize:{xs:'12px',sm:'15px'}  }}>Pamper,Delight & Spoil Your Loved Ones</Typography>
                    </Grid>
                    <Grid container sx={{justifyContent:'center', marginTop:{xs:'10px',sm:'30px'},}}>
                        <Grid item xs={12} lg={6} sx={{ textAlign:'center'}}>
                            <img style={{maxWidth:'100%', height:'auto', borderRadius:'10px'}} src="https://images-static.nykaa.com/uploads/a92dac26-400d-4158-af51-a7d247658835.jpg?tr=w-600,cm-pad_resize" alt="" />
                        </Grid>
                        <Grid item xs={12} lg={6} sx={{ textAlign:'center' , marginTop:{xs:'10px', lg:'0px'} }}>
                            <img style={{maxWidth:'100%', height:'auto', borderRadius:'10px', }}  src="https://images-static.nykaa.com/uploads/97a082e3-76ba-4671-8a10-97c867ff5b2f.jpg?tr=w-600,cm-pad_resize" alt=""/>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default GiftComponent;
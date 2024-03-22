import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";

const DetailsSecondComponent = () => {

    // const cardsData = JSON.parse(localStorage.getItem('product'))

    return (
        <>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', md: '70%' }, border: '2px solid red' }}>
                    <Grid container sx={{ width: '100%', display: 'flex', backgroundColor:'#FFFFFF' }}>
                        <Grid sx={{ width: '35%', border: '2px solid black' }}>

                        </Grid>
                        <Grid sx={{width:'65%', border:'2px solid orange', paddingLeft:'10px'}}>
                            <Typography sx={{fontSize:'16px', color:'#001325', fontWeight:500}}>Maybelline New York Fit Me Matte+Poreless Liquid Foundation 16H Oil Control - 128 Warm Nude</Typography>
                            <Typography sx={{fontSize:'13px', marginBottom:'10px'}}>(30ml)</Typography>
                            <Grid sx={{display:'flex', alignItems:'center'}}>
                            <Icon icon="entypo:star" width="15" height="15" />
                            <Icon icon="entypo:star" width="15" height="15" />
                            <Icon icon="entypo:star" width="15" height="15" />
                            <Icon icon="entypo:star" width="15" height="15" />
                            <Icon icon="entypo:star-outlined" width="15" height="15" />
                            <Typography sx={{fontSize:'12px', marginLeft:'5px', paddingRight:'5px' , borderRight:'1px solid lightgrey'}}>4.4/5</Typography>
                            <Typography sx={{fontSize:'12px', paddingLeft:'5px'}}>99124 ratings & 11911 reviews</Typography>
                            </Grid>
                            <Grid sx={{marginTop:'20px'}}>
                            <Typography sx={{fontSize:'13px', color:'#001325A3'}}>MRP: <span style={{textDecoration:'line-through' }}>₹649</span> <span style={{fontSize:'16px', color:'#000000', fontWeight:550, paddingRight:'5px', borderRight:'1px solid lightgrey'}}>₹409</span>  <span style={{color:'green', fontWeight:550, fontSize:'15px'}}>37% Off</span></Typography>
                            <Typography sx={{fontSize:'13px', color:'#001325A3'}}>inclusive of all taxes</Typography>
                            </Grid>
                            <Grid sx={{backgroundColor:'#6F79811F'}}>
                                <Typography sx={{fontSize:'12px', padding:'10px 0px 0px 20px'}}> Pick Mini Primer On ₹999+</Typography>

                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default DetailsSecondComponent;
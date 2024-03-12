import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
const StoreSecondComponent = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop:{xs:'6px',sm:'20px' } }}>
                <Grid sx={{ width: { xs: '100%', md: '95%',lg:'75%', xl: '65%' }, backgroundColor: '#FFFFFF' }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <Typography fontFamily='SourceSerifPro' sx={{ fontSize: '20px', fontWeight: 550, padding: '5px 0px 10px 0px', border: '1px solid lightgrey' }} >Find A Nykaa Store Near You</Typography>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={5} lg={4} sx={{ margin: '10px 0px', paddingLeft: '10px', display: 'flex', justifyContent:'center', paddingBottom:'10px',borderBottom:'1px solid lightgrey' }}>
                           
                            <Grid sx={{ display: 'flex', alignItems: 'center', marginRight: {xs:'10px',sm:'20px'} }}>
                                <div style={{ position: 'relative' }}>
                                    <Icon icon="subway:location" width="20" height="20" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '5px' }} />
                                    <input style={{ padding: '10px', paddingLeft:'25px'  }} type="text" placeholder="Search City" />
                                </div>
                            </Grid>

                            <Grid sx={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Typography sx={{ border: '1px solid gray', padding: '7px 10px', fontSize: '14px', color: 'gray', display: 'flex', alignItems: 'center' }}>
                                    <Icon icon="mdi:filter" width="20" height="20" style={{ marginRight: '5px', color:'black' }} /> Brand
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={7} lg={8} sx={{ border: '2px solid black' }}>
                            <Typography>Hello</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default StoreSecondComponent;
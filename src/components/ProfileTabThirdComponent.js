import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";

const ProfileTabThirdComponent = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center',  }}>
                <Grid sx={{ width: { xs: '100%', sm: '95%',  backgroundColor: '#FFFFFF' } }}>
                    <Grid sx={{ alignItems: 'center', display: 'flex', padding: '5px 5px', borderBottom: '1px solid lightgrey' }}>
                        <Icon icon="carbon:arrow-left" width="20" height="20" />
                        <Typography sx={{ fontWeight: 550, color: '#0001325EB', fontSize: '17spx', paddingLeft: '10px' }}>My Orders</Typography>

                    </Grid>
                    <Grid sx={{ display: 'flex', border: '1px solid #E6F2FF', margin: '10px', borderRadius: '5px', paddingTop: '10px', backgroundColor: '#E6F2FF' }}>
                        <Grid sx={{ margin: '0px 10px' }}>
                            <Icon icon="flat-color-icons:info" width="15" height="15" />
                        </Grid>
                        <Grid sx={{ paddingBottom: '10px' }}>
                            <Typography sx={{ fontSize: '11px', color: '#001325EB' }} >Please verify your phone number for security reasons</Typography>
                            <Grid sx={{ display: 'flex', color: '#E80071', }}>
                                <Typography sx={{ fontSize: '11px', fontWeight: 'bold', marginRight: '8px', }}>Verify Mobile </Typography>
                                <Icon icon="pajamas:long-arrow" width="15" height="15" />
                            </Grid>
                        </Grid>
                    </Grid>

                </Grid>

                <Grid container sx={{ marginTop: '20px' , width:{xs:'100%', sm:'90%', backgroundColor:'#FFFFFF',display:'block',  textAlign:'center'}}}>
                    <Grid sx={{marginTop:'10px'}}>
                    <Icon icon="ion:cart" width="100" height="100" style={{color:'lightgrey'}} />
                    </Grid>
                    <Grid>
                        <Typography sx={{fontSize:'14px'}}>No recent orders</Typography>
                        <Typography sx={{fontSize:'11px', color:'#E80071', fontWeight:550, margin:'5px 0px'}}>Start Shopping</Typography>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default ProfileTabThirdComponent;
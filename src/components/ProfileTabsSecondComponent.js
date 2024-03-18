import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
const ProfileTabsSecondComponent = () => {
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', }} >
                <Grid sx={{ width:{xs:'100%',sm:'95%'}, backgroundColor: '#FFFFFF', boxShadow:'0px 10px 15px rgba(0, 0, 0, 0.2)', marginBottom:'20px' }}>
                    <Grid sx={{ alignItems: 'center', display: 'flex', padding: '30px 0px 10px 40px ' }}>
                        <Grid sx={{ color: '#E80071' }}>
                            <Icon icon='ion:wallet-outline' width="35" height="35" />

                        </Grid>
                        <Grid sx={{ marginLeft: '15px', }}>
                            <Typography fontFamily='"Inter",sans-serif !important' sx={{ fontSize: '24px', fontWeight: 550, color: '#3F414D' }}>Nykaa Wallet</Typography>
                            <Typography sx={{ fontSize: '11px', marginTop: '-5px' }}>A purse you carry to shop Beauty</Typography>

                        </Grid>
                    </Grid>
                    <Grid sx={{ margin: '30px 0px 15px 40px', }}>
                        <Typography fontFamily='"Inter",sans-serif !important' sx={{ fontSize: '14px', color: '#3F414D' }}>Wallet Balance</Typography>
                        <Typography fontFamily='"Inter",sans-serif !important' sx={{ fontSize: '20px', color: '#E80071', fontWeight: 550 }}>₹ 20</Typography>

                    </Grid>
                    <Grid sx={{ border: '', width:{xs:'75%', sm:'50%', lg:'40%'} , display: 'flex', marginLeft: '40px', borderTop: '1px solid lightgrey', borderBottom: '1px solid lightgrey' }}>
                        <Grid sx={{ width: '50%', padding: '20px 0px' }}>
                            <Typography sx={{ fontSize:{xs:'11px', sm:'13px'}, color: '#3F414D' }}>NYKAA CASH </Typography>
                        </Grid>
                        <Grid sx={{ width: '50%', paddingTop: '10px' }} >
                            <Typography sx={{ textAlign: 'end', fontSize:{xs:'10px', sm:'13px'}, fontWeight: 'bold' }}>₹ 0</Typography>
                            <Typography sx={{ textAlign: 'end', fontSize:{xs:'9px', sm:'11px'} , fontWeight: 550, color: '#E80071' }} >HISTORY</Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ width:{xs:'75%',sm:'50%',lg:'40%'} , display: 'flex', marginLeft: '40px', borderBottom: '1px solid lightgrey', marginBottom:'30px' }}>
                        <Grid sx={{ width: '65%', padding: '20px 0px' }}>
                            <Typography sx={{ fontSize:{xs:'11px', sm:'13px'}, color: '#3F414D' }}>REWARD POINTS
                                (2000) </Typography>
                        </Grid>
                        <Grid sx={{ width: '35%', paddingTop: '10px' }} >
                            <Typography sx={{ textAlign: 'end', fontSize:{xs:'10px', sm:'13px'} , fontWeight: 'bold' }}>₹ 20</Typography>
                            <Typography sx={{ textAlign: 'end', fontSize:{xs:'9px', sm:'11px'} , fontWeight: 550, color: '#E80071' }} >HISTORY</Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{margin:'10px'}}>
                        <img src="https://www.nykaa.com/media/wysiwyg/NykaaWallet/wallet_footer_banner_3.png" alt=""  style={{maxWidth:'100%',height:'auto'}}/>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ProfileTabsSecondComponent;
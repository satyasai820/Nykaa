import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {
    return (
        <>
            <Grid container sx={{ border: '2px solid red', width:'100%' }}>
                <Grid sx={{ backgroundColor: '#3A4047', justifyContent: 'center', width: '100%', marginTop: '30px', paddingBottom:'40px'}}>
                    <Grid  sx={{ width:{xs:'100%',md:'80%',lg:'60%'},  display:{sm:'flex'}, margin:'auto' , marginTop: '30px' }}>
                        <Grid item xs={12} sm={4} sx={{ }} >
                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent:{xs:'center', sm:'start'}, }}>
                                <Icon icon="fluent:mail-24-filled" width="20" height="20" style={{ color: '#FFFFFF' }} />
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, marginLeft: '10px', }}>Get special discount on your inbox</Typography>
                            </Grid>
                            <Grid sx={{textAlign:{xs:'center', md:'start'}}}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, paddingRight: '100px', paddingBottom: '5px', borderBottom: '1px solid white', marginRight: '10px' }}>Your Email</Typography>
                                <Button sx={{ border: '1px solid #FFFFFF', fontSize: '9px', color: '#FFFFFF', fontWeight: 'bold' }}>send</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={4} sx={{  marginTop:{xs:'20px', sm:'0px'} }} >
                            <Grid sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px',justifyContent:{xs:'center', sm:'start'}, }}>
                                <Icon icon="entypo:mobile" width="20" height="20" style={{ color: '#FFFFFF' }} />
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, marginLeft: '10px', textAlign: 'center' }}>EXPERIENCE THE NYKAA MOBILE</Typography>
                            </Grid>
                            <Grid sx={{ justifyContent: 'center', textAlign: 'center', display: 'block' }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, marginLeft: '10px', }}>APP</Typography>

                            </Grid>
                            <Grid sx={{ textAlign: 'center', }}>
                                <img src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" alt="" width='110px' height='30px' />

                            </Grid>
                            <Grid sx={{ textAlign: 'center', }}>
                                <img src="https://tse1.mm.bing.net/th?id=OIP.ZgivgsBKdCd-Qb_hazm-8wHaCM&pid=Api&P=0&h=180" alt="" width='95px' height='30px' />

                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ marginTop:{xs:'20px', sm:'0px'} }}>
                            <Grid sx={{ display: 'flex', alignItems: 'center', paddingLeft:{xs:'0px',sm:'30px'},justifyContent:{xs:'center', sm:'start'}, }}>
                                <Icon icon="ion:call" width="20" height="20" style={{ color: '#FFFFFF' }} />
                                <Typography variant="p" sx={{ color: '#FFFFFF', marginLeft: '10px', }}>FOR ANY HELP, YOU MAY CALL US AT
                                    1800-267-4444</Typography>
                            </Grid>
                            <Grid sx={{  alignItems:'center',  paddingLeft:{xs:'0px',sm:'40px'}, marginTop:'10px', textAlign:{xs:'center' , sm:'start'}}}>
                                <Typography variant="p" sx={{color:'#FFFFFF',fontSize:'11px',}}>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                {/* <Grid sx={{backgroundColor}}>

                </Grid> */}
            </Grid>
        </>
    );
}

export default Footer;
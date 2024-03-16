import { Grid, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import React from "react";
import { Icon } from "@iconify/react";

const ProfileTabOneComponent = () => {
    return (
        <>
            <Grid container sx={{ width: '100%', justifyContent: 'center', }} >
                <Grid container sx={{ width: '95%',  justifyContent: 'center', backgroundImage: 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxobxDRYCyPaQG9RboiwzlXF4bu2Mv3Z3vT2XmGrpqaiCpvyqX")' }}>
                    <Grid sx={{ width: '60%', border: '1px solid black', marginTop: '20px', backgroundColor: '#FFFFFF', display: 'flex', marginBottom: '60px' }}>
                        <Grid>
                            <img src="https://www.nykaa.com/assets/mobile/images/my_profile/default_avatar.svg" style={{ width: '120px', margin: '10px 0px 0px 10px' }} alt="" />

                        </Grid>
                        <Grid sx={{ margin: '40px 0px 0px 15px' }}>
                            <Typography sx={{ fontWeight: 'bold' }}>Satya Sai</Typography>
                            <Typography sx={{ fontSize: '13px', color: 'grey', fontWeight: 550 }}>Email: <span style={{ fontWeight: 300 }} >satyaroyals</span></Typography>
                            <Typography sx={{ fontSize: '13px', color: 'grey', fontWeight: 550 }}>Date of Birth: <span style={{ fontWeight: 300 }} >dd/mm/yyyy</span></Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: 'auto' }}>
                            <Typography sx={{ fontSize: '11px', color: '#000000', textAlign: 'end', padding: '10px 5px' }}> <Icon icon="fluent:edit-48-regular" width="12" height="12" /> Edit</Typography>
                            <Typography sx={{ fontSize: '11px', color: 'green', padding: '30px 8px 0px 0px', }}>Verified</Typography>
                        </Grid>

                    </Grid>

                </Grid>
                <Grid container sx={{ width: '95%', borderBottom: '1px solid lightgrey', backgroundColor: '#FFFFFF', paddingTop: '70px',paddingBottom:'40px',boxShadow:'0px 10px 15px rgba(0, 0, 0, 0.2)'  }}>
                    <Grid sx={{ width: '50%',  }}>
                        <Grid container sx={{ alignItems: 'center', marginLeft: '20px' }}>
                            <Icon icon="ion:home-sharp" width="20" height="20" />
                            <Typography fontFamily="Inter, Roboto, Arial, sans-serif" sx={{ fontSize: '14px', fontWeight: 550, marginLeft: '5px', color:'#262B2F' }}>  My ADDRESS</Typography>
                        </Grid>
                        <Grid sx={{}}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    '& > :not(style)': {
                                        m: 1,
                                        width: 268,
                                        height: 158,
                                    },
                                }}
                            >

                                <Paper elevation={3} >
                                    <Typography sx={{fontSize:'14px', margin:'10px 0px 0px 15px'}} >No Address Found</Typography>
                                </Paper>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid  sx={{ width: '50%',  }}>
                        <Grid container sx={{ alignItems:'center', color:'grey', justifyContent:'end', }}>
                        <Icon icon="fluent:edit-48-regular" width="18" height="18" /> 
                        <Typography sx={{fontSize:'12px', paddingRight:'20px'}}>ADD NEW ADDRESS</Typography>
                        </Grid>
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}

export default ProfileTabOneComponent;
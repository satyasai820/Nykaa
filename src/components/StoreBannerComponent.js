import { Grid,Typography } from "@mui/material";
import React from "react";

import Breadcrumbs from '@mui/material/Breadcrumbs';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from "react-router-dom";


const StoreBannerComponent = () => {
    const navigate = useNavigate();

    const breadcrumbs = [
        <Typography onClick={()=>navigate('/')} sx={{fontSize:'13px', fontWeight:550, cursor:'pointer'}} >Home</Typography>,
        <Typography color="text.primary" onClick={()=>navigate('/store')}  sx={{fontSize:'12px', cursor:'pointer'}} >
           Store & Event
        </Typography>,
    ];

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: { xs: '145px', sm: '100px', md: '2px' } }}>
                <Grid sx={{ width: { xs: '95%',sm:'80%', md: '95%', lg: '75%', xl: '60%' },boxShadow:'0px 10px 15px rgba(0, 0, 0, 0.1)' }}>
                    <Grid sx={{marginBottom:'10px'}}>
                        <Stack spacing={2}>
                            <Breadcrumbs
                                separator={<NavigateNextIcon fontSize="small" />}
                                aria-label="breadcrumb"
                            >
                                {breadcrumbs}
                            </Breadcrumbs>
                        </Stack>
                    </Grid>
                    <Grid>
                        <img style={{ maxWidth: '100%', height: 'auto', boxShadow: '20px' }} src="https://images-static.nykaa.com/uploads/c049d80f-c0e1-4129-bca5-4ea10bcbed3f.jpg" alt="" />
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default StoreBannerComponent;
import { Grid,} from "@mui/material";
import React from "react";

const StoreBannerComponent = () => {
    return(
        <>
        <Grid container sx={{justifyContent:'center', marginTop:{xs:'145px',sm:'100px',md:'2px'}}}>
            <Grid sx={{width:{xs: '95%', md: '95%',lg:'75%', xl: '65%' },}}>
                <Grid>
                    <img style={{maxWidth:'100%', height:'auto', boxShadow:'20px'}} src="https://images-static.nykaa.com/uploads/c049d80f-c0e1-4129-bca5-4ea10bcbed3f.jpg" alt="" />
                </Grid>
            </Grid>

        </Grid>
        </>
    );
}

export default StoreBannerComponent;
import { Grid,Typography } from "@mui/material";
import React from "react";

const ProfileTabOneComponent = () => {
    return(
        <>
        <Grid container sx={{width:'100%',border:'1px solid red'}} >
         <Grid sx={{width:'95%', border:'2px solid green'}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0bv8EL0hhvogzv_NSjDSxkVVs_qAkOS0ZdwEGj0IJcj5QgSkJ" alt="" style={{maxWidth:'100%', height:'auto'}} />
            <Typography>wssssssssssss</Typography>
         </Grid>
        </Grid>
        </>
    );
}

export default ProfileTabOneComponent;
import { Typography, Grid } from "@mui/material";
import React from "react";

const MakeUp = () => {

    const faceData = [{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},{name:'Compact'},]
    return(
        <>
        <Grid container sx={{border:'1px solid red', marginTop:'-20px'}}>
            <Grid item md={2} >
            <Typography sx={{fontSize:'12px', fontWeight:'bold',paddingLeft:'6px' }} >Face</Typography>
            {faceData.map( (item) => (
                <Typography sx={{fontSize:'11px', padding:'3px', color:'gray', paddingLeft:'5px'}}>{item.name}</Typography>
            ))}
            </Grid>
            <Grid item md={2} >
            <Typography sx={{fontSize:'12px', fontWeight:'bold',paddingLeft:'6px',backgroundColor:'#ebeae8' }}>Eyes</Typography>
            {faceData.map( (item) => (
                <Typography sx={{fontSize:'11px', padding:'3px', backgroundColor:'#ebeae8',paddingLeft:'5px'}}>{item.name}</Typography>
            ))}
            </Grid>
            <Grid item md={2} >
            <Typography sx={{fontSize:'12px', fontWeight:'bold',paddingLeft:'6px' }}>Lips</Typography>
            {faceData.map( (item) => (
                <Typography sx={{fontSize:'11px', padding:'3px', color:'gray', paddingLeft:'5px'}}>{item.name}</Typography>
            ))}
            </Grid>
            <Grid item md={2} >
            <Typography sx={{fontSize:'12px', fontWeight:'bold',paddingLeft:'6px',backgroundColor:'#ebeae8' }}>Tools & Brushes</Typography>
            {faceData.map( (item) => (
                <Typography sx={{fontSize:'11px', padding:'3px', backgroundColor:'#ebeae8', paddingLeft:'5px'}}>{item.name}</Typography>
            ))}
            </Grid>
            <Grid item md={2} >
            <Typography sx={{fontSize:'12px', fontWeight:'bold',paddingLeft:'6px' }}>Top Brands</Typography>
            {faceData.map( (item) => (
                <Typography sx={{fontSize:'11px', padding:'3px', color:'gray', paddingLeft:'5px'}}>{item.name}</Typography>
            ))}
            </Grid>
            <Grid item md={2} >
            <Typography sx={{fontSize:'12px', fontWeight:'bold',paddingLeft:'6px',backgroundColor:'#ebeae8' }}>Quick Links</Typography>
            {faceData.map( (item) => (
                <Typography sx={{fontSize:'11px', padding:'3px', backgroundColor:'#ebeae8', paddingLeft:'5px'}}>{item.name}</Typography>
            ))}
            </Grid>

        </Grid>
        </>
    )
}

export default MakeUp;
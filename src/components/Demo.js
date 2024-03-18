import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ProfileTabOneComponent from "./ProfileTabOneComponent";




const Demo = () => {

    const [displayData, setDisplayData] = useState(null);

   useEffect(()=> (
        handleData()
    ),[]);

    const handleData = () => {
        console.log('yeah clicked')
    //    return(
    //     <Typography>hello every one</Typography>
    //    ); 
    setDisplayData(<ProfileTabOneComponent />)
        
    }
     const handleData1 = () => {
        console.log('yeah clicked')
    setDisplayData("6ruyiuyiu  ypiyp [yro oirn-[rr oierewoiry ey riweyrerpr u[ro6ftgweyhru'0ep9ireorjeworn  roywherew rruwe rwer8r0ywer werwe[0irwe[0 rwe[r r uwr ew")
        
    }
 
    return(
        <>
        
        <Grid container sx={{boder:'1px solid red', justifyContent:'center'}}>
        <Grid sx={{width:'60%', border:'3px solid yellow', display:'flex' }}>
        <Grid sx={{width:'25%', border:'3px solid green'}}>
        <Typography onClick={handleData} sx={{border:'1px solid red'}}>My Profile</Typography>
        <Typography onClick={handleData1}>Hello</Typography>
        <Typography>Hello</Typography>
        </Grid>
        <Grid sx={{width:'75%', border:'2px solid red'}}>
            {displayData}
        </Grid>
        </Grid>
        </Grid>
        </>
    );
}

export default Demo;
import React from "react";
import { AppBar, Grid, Typography } from "@mui/material";
import { Icon } from "@iconify/react";


const Appbar1 = () => {
    return(
        <>
        <AppBar sx={{ 
      backgroundImage: 'url("https://static.vecteezy.com/system/resources/thumbnails/010/599/697/small/abstract-smooth-curve-line-on-pink-gradient-lighting-color-background-vector.jpg")',  // Replace with the path to your image
     
    }}>
        
        <Grid container alignItems="center" sx={{justifyContent:{xs:'center',md:'end'}}} >
            <Grid sx={{marginRight:{md:'10%',lg:'18%'}, display:{xs:'none', md:'block',
            animation: 'fadeInOut 4s infinite',
        '@keyframes fadeInOut': {
            '0%': { opacity: 0 },
            '50%': { opacity: 1 },
            '100%': { opacity: 0 },
          }, 
          }}}>
                <Typography sx={{color:'#000000', fontSize:'13px', fontWeight:550, padding:'5px','&:hover':{color:'white'}}}>BEAUTY BONANZA Get Your Amazing Deals!</Typography>
            </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center',}}>
        <Icon style={{padding:'4px 0px'}} icon="ant-design:mobile-outlined" color="#000000" width="20" height="20" />
          <Typography variant="p" sx={{  paddingRight:{xs:'2vmin',sm:'15px'}, color: 'black', borderRight:'1px solid #000000', marginRight:{xs:'1vmin',sm:'10px'}, '&:hover':{color:'white'}  }}> Get App</Typography>
        </Grid>
        <Grid  sx={{ display: 'flex', alignItems: 'center',  }}>
           
          <Icon style={{padding:'4px 0px',}}  icon="carbon:location" color="#000000" width="20" height="20" />
          <Typography variant="p" sx={{  paddingRight:{xs:'2vmin',sm:'15px', '&:hover':{color:'white'}}, color: 'black', borderRight:'1px solid #000000', marginRight:{xs:'1vmin',sm:'10px'} }}>Stores & Events</Typography>
         
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
          <Icon style={{padding:'4px 0px', marginRight:'3px'}} icon="fluent-mdl2:gift-card" color="#000000" width="20" height="20" />
          <Typography variant="p" sx={{  paddingRight:{xs:'2vmin',sm:'15px'}, color: 'black', borderRight:'1px solid #000000', marginRight:{xs:'1vmin',sm:'10px','&:hover':{color:'white'} } }}>Gift Card</Typography>
        </Grid>
        <Grid sx={{ display: 'flex', alignItems: 'center', marginRight:{md:'15%',xl:'20%'} }}>
          <Icon style={{padding:'4px 0px', marginRight:'3px'}} icon="formkit:help" color="#000000" width="15" height="15" />
          <Typography variant="p" sx={{  paddingRight:{xs:'0px',sm:'15px'}, color: 'black','&:hover':{color:'white'} }}>Help</Typography>
        </Grid>
      </Grid>

        </AppBar>
        </>
    );
}

export default Appbar1;
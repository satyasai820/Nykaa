import React from "react";
import { Grid, Typography } from "@mui/material";
const MakeupTrendingComponent = () => {

    const imgData = [{img:'https://images-static.nykaa.com/uploads/38752d1d-ce9b-4a0f-87f9-5498cd463dbe.jpg?tr=w-300,cm-pad_resize',p:'Blushes & Tints'},{img:'https://images-static.nykaa.com/uploads/95f0ee6a-9762-4ada-8f3f-aa460ec843c2.jpg?tr=w-300,cm-pad_resize',p:'Liquid Highlighters'},{img:'https://images-static.nykaa.com/uploads/07a620e6-00e7-43cc-aae7-58a8c55e7a52.jpg?tr=w-300,cm-pad_resize', p:'Lip Gloss'},{img:'https://images-static.nykaa.com/uploads/6d18e9f4-9f8d-49b7-9054-176b9d2a274f.png?tr=w-300,cm-pad_resize', p:'Glitter Eyeshadow'}]
    return(
        <>
        <Grid container sx={{ justifyContent: 'center', backgroundColor:'white' }}>
                <Grid sx={{ width: {xs:'90%', sm: '80%', } }}>
                    <Grid sx={{  }}>
                        <Typography variant="h1" sx={{fontSize:{xs:'15px',sm:'20px'}}}> Trending Now</Typography>
                        <Typography variant="p" sx={{ fontSize:{xs:'12px',sm:'15px'}}}>Shop our Special Curation</Typography>

                    </Grid>
                    <Grid sx={{display:'flex', marginTop:'30px', justifyContent:'center'}}>
                        {imgData.map((item) => (
                            <>
                                <Grid sx={{ marginRight: '10px', }}>
                                    <img style={{ borderRadius: '8px', maxWidth:'100%', height:'auto' }} src={item.img} alt="1" />
                                    <Typography sx={{ fontWeight: 600, fontSize:{xs:'6px',sm:'10px',md:'14px'}  }}>{item.p}</Typography>
                                </Grid>
                            </>
                        ))}
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}

export default MakeupTrendingComponent;
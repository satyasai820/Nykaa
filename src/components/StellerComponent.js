import { Grid, Typography } from "@mui/material";
import React from "react";

const StellerComponent = () => {

    const imgData = [{ img: 'https://images-static.nykaa.com/creatives/da1e2a13-63f9-4501-a7b0-eb3414c90380/default.jpg?tr=w-300,cm-pad_resize', discount: 'Upto 40% Off', product: 'On Sunscreen Range' }, { img: 'https://images-static.nykaa.com/creatives/a6b52f28-c9c8-43bc-940e-b6fafc498b83/default.jpg?tr=w-300,cm-pad_resize', discount: 'Flat 10% Off', product: 'On Entire Range' }, { img: 'https://images-static.nykaa.com/creatives/70434062-374b-4080-b18d-0c0797c78e97/default.jpg?tr=w-300,cm-pad_resize', discount: 'Upto 15% Off', product: 'On Korean Skincare' }, { img: 'https://images-static.nykaa.com/creatives/b369221f-827e-4b97-8496-60245b085c06/default.jpg?tr=w-300,cm-pad_resize', discount: 'Upto 20% Off', product: 'On Japanese Sun Care ' }]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor:'white' }}>
                <Grid sx={{ width: {xs:'99%', sm: '90%', } }}>
                    <Grid sx={{ marginLeft: '30px', borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Stellear Selections</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Brands you absolutely can't miss</Typography>

                    </Grid>
                    <Grid sx={{display:'flex', marginTop:'30px', justifyContent:'center'}}>
                        {imgData.map((item) => (
                            <>
                                <Grid sx={{ marginRight: '10px', }}>
                                    <img style={{ borderRadius: '8px', maxWidth:'100%', height:'auto' }} src={item.img} alt="1" />
                                    <Typography sx={{ fontWeight: 600, fontSize:{xs:'8px',sm:'10px',md:'14px'}  }}>{item.discount}</Typography>
                                    <Typography sx={{ fontSize:{xs:'6px',sm:'8px',md:'10px'} , color: 'gray' }}>{item.product}</Typography>
                                </Grid>
                            </>
                        ))}
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default StellerComponent;
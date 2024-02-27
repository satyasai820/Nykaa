import React from "react";
import { Grid } from "@mui/material";

const FlashBannerComponent = () => {

    const imageData = [{ img: 'https://images-static.nykaa.com/uploads/d9c59b38-4f6a-4feb-9a3c-dbe6ec12edc3.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/fd009073-7084-4832-be69-f02d134dc035.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/86db7800-6ece-4cc2-a080-ad8a25ce21e3.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/c2eef3f4-4d43-4881-8137-f0aefa119d19.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/efc118e5-c9f5-416e-b5ea-edcc5144ee7c.jpg?tr=w-200,cm-pad_resize' },]
    return (
        <>


            <Grid container sx={{ backgroundColor: 'white', display: 'block', justifyContent: 'center', }}>
                <Grid item sx={{ justifyContent: 'center', marginLeft:{lg:'80px', xl:'120px'} }}>
                    <img
                        src="https://images-static.nykaa.com/uploads/873334e4-56bc-4d2d-8cea-2d3cc1d61fcc.jpg?tr=w-1200,cm-pad_resize"
                        style={{ maxWidth: '100%', height: 'auto' }}
                        alt="2"
                    />
                </Grid>

                <Grid item sx={{  display: 'flex', flexWrap: 'wrap', margin:'0px', padding:'0px', marginLeft:{xs:'20px',sm:'30px',lg:'50px',xl:'60px'} }}>

                    {imageData.map((item) => (

                        <Grid item xs={12} sm={2}  sx={{ flexBasis: 'calc(100% / 6)', boxSizing: 'border-box',  }} >
                            <img
                                style={{ maxWidth: '100%', height: 'auto' }}
                                src={item.img}
                                alt='2'
                            />
                        </Grid>
                    ))}

                </Grid>
            </Grid>
        </>
    )
}

export default FlashBannerComponent;
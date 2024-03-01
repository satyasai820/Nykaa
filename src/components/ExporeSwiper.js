import { Grid, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const ExporeSwiper = () => {

    const cardData = [{img:'https://images-static.nykaa.com/creatives/db33d9b6-e530-4631-991b-29af39130139/default.jpg?tr=w-600,cm-pad_resize', discount:'Upto 30% off', product:'On Makeup BestSellers'},
    {img:'https://images-static.nykaa.com/creatives/4c33ddce-ddd0-43d3-aeba-ee25f7184b06/default.png?tr=w-600,cm-pad_resize', discount:'Upto 15% off', product:'On Kay Beauty BestSellers'},
    {img:'https://images-static.nykaa.com/creatives/14f168f3-9a5c-4f09-86d7-4e9d74e88e72/default.jpg?tr=w-600,cm-pad_resize', discount:'New! Flat 20% off', product:'On All Products'},
    {img:'https://images-static.nykaa.com/creatives/ec662bd4-750f-4159-8f7b-23bd4935cda0/default.jpg?tr=w-600,cm-pad_resize', discount:'Upto 35% off', product:'On Makeup BestSellers'},
    {img:'https://images-static.nykaa.com/creatives/791c6aa5-45a4-4103-9811-d383a786b850/default.jpg?tr=w-600,cm-pad_resize', discount:'On ₹6000:2 Mini Gifts', product:'Discover Skincare Icons'},
    {img:'https://images-static.nykaa.com/creatives/06d85f6a-4029-4795-a6f5-a54fa4794aaa/default.jpg?tr=w-600,cm-pad_resize', discount:'2 Gifts On ₹3000', product:'Mini Mascara On ₹5000'},]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid sx={{ width: { xs:'99%', sm:'90%',xl: '90%' } }}>
                    <Grid sx={{ marginLeft: '30px', borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Expore Our Top Brands</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>A-lister labels to obsess over</Typography>
                    </Grid>
                    <Grid >
                    <Swiper 
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="ExporeSwiper"
                    breakpoints={{
                        1440: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 2,
                        },
                        764: {
                          slidesPerView: 2, 
                        },
                        576: {
                          slidesPerView: 1,
           
           
                        },
                        0: {
                          slidesPerView: 1,
           
           
                        },
                      }}
                  
                >
                    {cardData.map((item)=> (
                        <>
                           <SwiperSlide> 
                        <Grid sx={{marginLeft:'10px'}}>
                            <Typography sx={{position:'absolute', marginTop:{xs:'240px',sm:'70%',md:'53%',lg:'55%' ,xl:'52%'},  fontWeight:600, fontSize:'18px' }}>{item.discount}</Typography>
                            <Typography  sx={{position:'absolute', marginTop:{xs:'260px',sm:'76%',md:'58%',lg:'60%',xl:'58%'},  fontSize:'12px', color:'gray'  }}>{item.product}</Typography>
                        </Grid>
                        <img src={item.img}  alt="1" />
                    </SwiperSlide>
                        </>
                    ))}
                </Swiper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ExporeSwiper;
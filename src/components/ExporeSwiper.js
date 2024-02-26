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
    return (
        <>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid sx={{ width: { xs:'99%', sm:'90%',xl: '90%' }, border: '1px solid red' }}>
                    <Grid sx={{ marginLeft: '30px', borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Expore Our Top Brands</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>A-lister labels to obsess over</Typography>
                    </Grid>
                    <Grid >
                    <Swiper
                    // onSwiper={setSwiperRef}
                    // slidesPerView={3}   
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="ExporeSwiper"
                    breakpoints={{
                        // Large devices (lg)
                        1440: {
                          slidesPerView: 3,
                          //   autoplay: false, 
                        },
                        1024: {
                          slidesPerView: 2,
                          //   autoplay: false, 
                        },
                        // Medium devices (md)
                        764: {
                          slidesPerView: 2,
                          //   autoplay: false, 
                        },
                        // Small devices (sm)
                        576: {
                          slidesPerView: 1,
                          //   autoplay: true,
           
           
                        },
                        // Extra small devices (xs)
                        0: {
                          slidesPerView: 1,
                          //   autoplay: true,
           
           
                        },
                      }}
                  
                >
                    <SwiperSlide> 
                        <img src="https://images-static.nykaa.com/creatives/98898391-b7b2-4ce9-915b-1aea86f9584d/default.jpg?tr=w-600,cm-pad_resize"  alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/4018d277-7e48-421d-82d2-750ef5501631/default.png?tr=w-600,cm-pad_resize"  alt="2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/bdf87126-c539-4d04-80f1-5fdaf4230094/default.jpg?tr=w-600,cm-pad_resize" alt="3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/2acc3699-eb36-4498-a8c6-4407704939be/default.jpg?tr=w-600,cm-pad_resize" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/cdfd3458-cc9d-432e-9d6f-8ec51cf9fb91/default.jpg?tr=w-600,cm-pad_resize" />
                    </SwiperSlide>
                </Swiper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ExporeSwiper;
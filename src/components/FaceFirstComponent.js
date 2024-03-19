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

const FaceFirstComponent = () => {
    return (
        <>
            <Grid container sx={{  justifyContent: 'center', marginTop: { xs: '160px', sm: '120px', md: '20px' } }}>
                <Grid sx={{ width: {xs:'95%',sm:'90%', lg: '65%' } }}>
                    <Grid sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '18px' } }}>Buy Face Primer Online
                            <span style={{ fontSize: '13px', fontWeight: 300, marginLeft: '5px' }}>(459)</span></Typography>
                    </Grid>

                    <Grid sx={{display:{xs:'none',sm:'block'}}}>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            className="faceSlider"
                            slidesPerView={1}

                        >
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/3e8dfec3-16c2-4a71-a192-3ac1ff280a1b.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/cf23df7f-7651-480f-9547-e98f5cd707b6.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/b37d8e0c-7366-414c-9276-35c5b4c2dbd2.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/3ea085c7-21b2-47e3-ba64-ecbbf1fd3154.png?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>

                        </Swiper>
                    </Grid>
                    <Grid sx={{display:{xs:'block', sm:'none'}}}>
                    <img style={{maxWidth:'100%', height:'auto'}} src='https://images-static.nykaa.com/uploads/3e8dfec3-16c2-4a71-a192-3ac1ff280a1b.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}

export default FaceFirstComponent;
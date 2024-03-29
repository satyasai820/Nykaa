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

const MakeupStreamlineSliderComponent = () => {

    return (
        <>
             <Grid container sx={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '90%', sm: '90%' } }}>
                    <Grid>
                        <Typography variant="h1" sx={{ fontSize:{xs:'15px',sm:'18px' } }}> Stremline Your Beauty Routine</Typography>
                    </Grid>
                    <Grid sx={{display:{xs:'none', sm:'block'}}}>
                    <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="StremlineSwiper"
                            slidesPerView={1}

                        >
                                    <SwiperSlide>
                                        <img src='https://images-static.nykaa.com/uploads/5b5b1122-d4eb-4ff8-ae35-5e8e80d3cc71.jpg?tr=w-1200,cm-pad_resize' alt="1" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src='https://images-static.nykaa.com/uploads/64fabab7-ce84-4d6a-9797-fda764f205e1.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                                    </SwiperSlide>
                                
                        </Swiper>
                    </Grid>
                    <Grid sx={{display:{xs:'block',sm:'none'}}}>
                    <img style={{maxWidth:'100%', height:'auto'}} src='https://images-static.nykaa.com/uploads/5b5b1122-d4eb-4ff8-ae35-5e8e80d3cc71.jpg?tr=w-1200,cm-pad_resize' alt="1" />
                    </Grid>
                </Grid>
                </Grid>
        </>
    );

}

export default MakeupStreamlineSliderComponent;
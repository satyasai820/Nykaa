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

const MakeupFindSliderComponent = () => {
    return(
        <>
        <Grid container sx={{justifyContent:'center', backgroundColor:'white', paddingTop:{xs:'20px', }}}>
            <Grid sx={{width:{xs:'90%', sm:'90%'}}}>
            <Grid >
                        <Typography variant="h1" sx={{ fontSize:{xs:'15px',sm:'18px'}  }}> Find Your Perfect Match</Typography>
                        <Typography variant="p"  > Personalized & Handpicked For You</Typography>
                    </Grid>
                    <Grid sx={{display:{xs:'none', sm:'block'}}} >
                    <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="findSwiper"
                            slidesPerView={1}

                        >
                                    <SwiperSlide>
                                        <img src='https://images-static.nykaa.com/uploads/0f051a3f-7561-4306-8aa4-a1f30298adef.jpg?tr=w-1200,cm-pad_resize' alt="1" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src='https://images-static.nykaa.com/uploads/adce8040-c8d3-4b13-977a-e2b9f32c2b8f.jpg?tr=w-1200,cm-pad_resize' alt="1" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <img src='https://images-static.nykaa.com/uploads/56e20d4e-2643-4edb-b3fd-7762b81a7658.jpg?tr=w-1200,cm-pad_resize' alt="1" />
                                    </SwiperSlide>
                                
                        </Swiper>
                    </Grid>
                    <Grid sx={{display:{xs:'block', sm:'none'}}}>
                    <img style={{maxWidth:'100%', height:'auto'}} src='https://images-static.nykaa.com/uploads/0f051a3f-7561-4306-8aa4-a1f30298adef.jpg?tr=w-1200,cm-pad_resize' alt="1" />
                    </Grid>

            </Grid>
        </Grid>
        </>
    );
}

export default MakeupFindSliderComponent;
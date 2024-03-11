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

const MakeupAceSwiperComponent = () => {

   const cardData = [{img:'https://images-static.nykaa.com/uploads/55a1427c-a657-46de-9392-4d8bc96d1b11.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/1995c4a9-a3b1-48ec-bbea-3b36750651cb.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/44f0733e-6648-4d33-a042-f0e144e77f62.jpg?tr=w-600,cm-pad_resize'}]
    return(
        <>
            <Grid container sx={{backgroundColor:'white', justifyContent:'center'}} >
                <Grid sx={{width:{xs:'95%',  sm:'75%', md:'85%'}}}>
                    <Grid>
                        <Typography sx={{fontSize:{xs:'15px',sm:'18px', fontWeight:550}}}>Ace Your Base In 3 Steps</Typography>
                    </Grid>
                <Grid>
                <Swiper
                            spaceBetween={15}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="aceSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 2.5,
                                },
                                1024: {
                                    slidesPerView: 2,
                                },
                                764: {
                                    slidesPerView: 1,
                                },
                                576: {
                                    slidesPerView: 1,


                                },
                                0: {
                                    slidesPerView: 1,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>
                                    <SwiperSlide>
                                        <img src={item.img} alt="1" />
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

export default MakeupAceSwiperComponent;
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

const SelfCareSwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/09f1403f-251b-4c07-8f00-6115ef651415.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Body lotions' }, { img: 'https://images-static.nykaa.com/uploads/77a764ce-20d5-4402-a76e-7831838aece9.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Face wash' }, { img: 'https://images-static.nykaa.com/uploads/c9212b17-b37c-4654-8182-eb479fa0a112.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Conditioners' }, { img: 'https://images-static.nykaa.com/uploads/ed205ec5-38bb-4866-bad9-f56ef87ff13f.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Face moisturiser' }, { img: 'https://images-static.nykaa.com/uploads/d1f8e1ef-f311-4f57-889e-d332d352aa04.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Combos' }, { img: 'https://images-static.nykaa.com/uploads/c7c6f4e6-4564-4ebf-85b6-1f446a91e425.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Shower gels' }, { img: 'https://images-static.nykaa.com/uploads/ff723236-940c-49f0-9dfc-6c6ad32ce0a3.jpg?tr=w-171.42857142857142,cm-pad_resize' ,p:'Shampoos'}, { img: 'https://images-static.nykaa.com/uploads/ad2ee2fe-fb42-4ffc-90d5-4e15e5f4f3b7.jpg?tr=w-171.42857142857142,cm-pad_resize',p:'Sunscreen' },]
    return (
        <>
            <Grid container sx={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%' }, }}>
                    <Grid>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src="https://images-static.nykaa.com/uploads/2088f6e6-5995-4611-baee-ac4fae9258b4.jpg?tr=w-1200,cm-pad_resize" alt="" />
                    </Grid>


                    <Grid>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="selfSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 7,
                                },
                                1024: {
                                    slidesPerView: 5,
                                },
                                764: {
                                    slidesPerView: 4,
                                },
                                576: {
                                    slidesPerView: 3,


                                },
                                0: {
                                    slidesPerView: 3,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>
                                    <SwiperSlide>
                                        <Grid sx={{textAlign:'start'}}>
                                            
                                        <Typography  variant="p" sx={{position:'absolute', marginTop:{xs:'115px', }}} >{item.p}</Typography>
                                        </Grid>
                                        <img src={item.img} alt="1" />
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </Grid>
                    <Grid >
                        <img style={{maxWidth:'100%', height:'auto'}} src='assets/images/flash_selfacare_banner.png' alt="" />
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default SelfCareSwiperComponent;
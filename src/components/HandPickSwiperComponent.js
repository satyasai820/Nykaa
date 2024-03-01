import React from "react";

import { Grid, Typography } from "@mui/material";

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const HandPickSwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/7e9469cf-e20e-46fa-a877-625e167bb3ef.jpg?tr=w-600,cm-pad_resize', p1: 'Upto 70% off', p2: 'All Things Beyond Beauty' }, { img: 'https://images-static.nykaa.com/uploads/783ade0e-d5c6-44d9-af0e-25eb3c0d605f.jpg?tr=w-600,cm-pad_resize', p1: 'Upto 60% off', p2: '' }, { img: 'https://images-static.nykaa.com/uploads/a260da2d-db12-43f3-b3f0-0d00bbe607a1.jpg?tr=w-600,cm-pad_resize', p1: 'Upto 60% off', p2: '' }]

    const ImageUrl = [{ img: 'https://images-static.nykaa.com/uploads/de039375-c8d3-481e-aa0a-616f8d357d63.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/d4fa93f7-4c4d-4195-98ba-f6f22bb9aa24.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/26f6c299-e8bf-49d5-b7e8-3df210d8adac.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/c8807ff6-abe5-4b59-af71-a909580dedc9.jpg?tr=w-171.42857142857142,cm-pad_resize' }]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white', paddingTop: { xs: '20px', sm: '30px' } }}>
                <Grid sx={{ width: { xs: '99%', sm: '90%', xl: '90%' } }}>
                    <Grid sx={{ marginLeft: { xs: '10px', sm: '30px' }, borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Lingerie & Accessories</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Handpicked styles for you</Typography>
                    </Grid>
                    <Grid >
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="swatchSwiper"
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
                            {cardData.map((item) => (
                                <>
                                    <SwiperSlide>
                                        <Grid sx={{ marginLeft: '10px' }}>
                                            <Typography sx={{ position: 'absolute', marginTop: { xs: '240px', sm: '70%', md: '53%', lg: '55%', xl: '52%' }, fontWeight: 600, fontSize: '18px' }}>{item.p1}</Typography>
                                            <Typography sx={{ position: 'absolute', marginTop: { xs: '260px', sm: '76%', md: '58%', lg: '60%', xl: '58%' }, fontSize: '12px', color: 'gray' }}>{item.p2}</Typography>
                                        </Grid>
                                        <img src={item.img} alt="1" />
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </Grid>

                    <Grid item sx={{ display: 'flex', flexWrap: 'wrap', margin: '0px', padding: '0px',    }}>

                        {ImageUrl.map((item) => (

                            <Grid item xs={12} sm={2} sx={{ flexBasis: 'calc(100% / 6)', boxSizing: 'border-box', }} >
                                <img
                                    style={{ maxWidth: '100%', height: 'auto' }}
                                    src={item.img}
                                    alt='2'
                                />
                            </Grid>
                        ))}

                    </Grid>


                </Grid>
            </Grid>
        </>
    );
}

export default HandPickSwiperComponent;
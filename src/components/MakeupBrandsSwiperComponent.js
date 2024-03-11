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


const MakeupBrandsSwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/a2f6f413-e16f-4131-873e-ac92e4b9a7d1.jpg?tr=w-240,cm-pad_resize', discount:'UpTo 20% Off', product:'On cult Favourites!' }, { img: 'https://images-static.nykaa.com/uploads/033bd1f6-1b8c-4f86-a4b4-d19abd773dd5.jpg?tr=w-240,cm-pad_resize', discount:'UpTo 30% Off', product:'On L.A Girl Must Haves'  }, { img: 'https://images-static.nykaa.com/uploads/dfe735b2-cc27-4ba9-bd67-d2a98efd5823.jpg?tr=w-240,cm-pad_resize', discount:'UpTo 35% Off', product:'On Make Up Must-Haves!'  }, { img: 'https://images-static.nykaa.com/uploads/9c1d9f4d-697a-4a5f-ac09-54ff168597ad.png?tr=w-240,cm-pad_resize', discount:'Up To 50% Off ', product:'On Entire Range'  }, { img: 'https://images-static.nykaa.com/uploads/cb526e7c-1b1a-4de6-b4fd-90d67f56db8c.jpg?tr=w-240,cm-pad_resize' , discount:'Smiply Unique Formulations', product:'By Narmrata Soni' }]
    return (
        <>
            <Grid container sx={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '80%', sm: '90%', lg: '85%' } }}>
                    <Grid sx={{ marginLeft: '30px', }}>
                        <Typography variant="h1" sx={{ fontSize: '17px' }}> Brands You Can't Miss</Typography>
                        <Typography variant="p" sx={{ fontSize: '12px', color: 'grey', }}>Discover Exciting Deals</Typography>
                    </Grid>
                    <Grid  >
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="makeupBarandsSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 4.5,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                764: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 3,


                                },
                                0: {
                                    slidesPerView: 1,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>
                                    <SwiperSlide>


                                        <Grid sx={{}}>
                                            <img src={item.img} alt="1" />
                                            <Grid sx={{ textAlign: 'start', display: { xs: 'none', sm: 'block' } }}>
                                                <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>{item.discount}</Typography>
                                                <Typography sx={{ fontSize: '10px', color: 'gray' }}>{item.product}</Typography>
                                            </Grid>
                                        </Grid>
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

export default MakeupBrandsSwiperComponent;
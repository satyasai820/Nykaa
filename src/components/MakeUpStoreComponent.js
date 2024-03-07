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

const MakeUpStoreComponent = () => {
 
    const cardData = [{img:'https://images-static.nykaa.com/creatives/f992ab45-6336-4058-af53-1c3a8c6edcc8/default.jpg?tr=w-600,cm-pad_resize',discount:'Bestseller Minis', product:'Starting at Rs.750'},{img:'https://images-static.nykaa.com/creatives/5c240149-4dd1-4652-9e47-155dcffb4543/default.jpg?tr=w-600,cm-pad_resize',discount:'New Limited Edition Lipsticks', product:'10 Exclusive Matte Shades'},{img:'https://images-static.nykaa.com/creatives/7a2a1329-ab2e-40b0-a35c-597c03b5f397/default.jpg?tr=w-600,cm-pad_resize', discount:'New Launch!' ,product:'Avaliable in 12 shades'},{img:'https://images-static.nykaa.com/creatives/e4ec91bd-faf4-4e40-9e56-5c5df82f5f9f/default.jpg?tr=w-600,cm-pad_resize',discount:'The wait Is Over!', product:'Fenty Beauty Now In India'},{img:'https://images-static.nykaa.com/creatives/a00bce09-b29d-4b16-abe3-f20aa1d9b13f/default.jpg?tr=w-600,cm-pad_resize',discount:'Red-Carpet Beauty Secrets!',product:'On 7000:3 Bestselling Gifts!'},{img:'https://images-static.nykaa.com/creatives/89879f72-0fb6-4420-a42c-f57d37b974c2/default.jpg?tr=w-600,cm-pad_resize',discount:'UpTo 30% Off',product:'On Base Essentials'}]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop:{xs:'140px', sm:'100px',md:'0px', backgroundColor:'white'} }}>
                <Grid sx={{ width: { xs: '99%', sm: '90%', xl: '85%' }, marginTop: '30px' }}>
                    <Grid sx={{ marginLeft:{xs:'10px'}, paddingBottom: '10px' }}>
                        <Typography variant="h1" sx={{ fontSize: '28px' }}> The Makeup Store</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Discover a limitless range of makeup</Typography>
                    </Grid>
                    <Grid>
                        <Typography sx={{ fontSize: '18px', fontWeight: 550, marginLeft:'15px', marginBottom:'-15px', marginTop:'25px' }}>Best Of Makeup</Typography>

                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="makeupSwiper"
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
                                        <Grid sx={{ marginLeft: '10px' }}>
                                            <Typography sx={{ position: 'absolute', marginTop: { xs: '240px', sm: '35%', md: '53%', lg: '46%', xl: '45%' }, fontWeight: 600, fontSize: '18px', color:'white' }}>{item.discount}</Typography>
                                            <Typography sx={{ position: 'absolute', marginTop: { xs: '260px', sm: '38%', md: '58%', lg: '50%', xl: '49%' }, fontSize: '15px', color:'white' }}>{item.product}</Typography>
                                        </Grid>
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

export default MakeUpStoreComponent;
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

const RadarSwiperComponent = () => {
    const cardData = [{ img: 'https://images-static.nykaa.com/creatives/8d584fba-0099-477e-baa9-ff27d3d651a6/default.jpg?tr=w-200,cm-pad_resize', discount: 'Upto 30% off', product: 'On Makeup BestSellers' },
    { img: 'https://images-static.nykaa.com/creatives/0b0b8c93-53ac-45fe-a6f0-37fdc80e928a/default.jpg?tr=w-200,cm-pad_resize', discount: 'Upto 15% off', product: 'On Kay Beauty BestSellers' },
    { img: 'https://images-static.nykaa.com/creatives/a75f7f9f-24cf-4df7-befa-3f1b83092912/default.png?tr=w-200,cm-pad_resize', discount: 'New! Flat 20% off', product: 'On All Products' },
    { img: 'https://images-static.nykaa.com/creatives/9190aff0-644e-4185-8b45-94d4facdff53/default.jpg?tr=w-200,cm-pad_resize', discount: 'Upto 35% off', product: 'On Makeup BestSellers' },
    { img: 'https://images-static.nykaa.com/creatives/9c6350a8-86fd-4e9c-b243-c39412a98eeb/default.jpg?tr=w-200,cm-pad_resize', discount: 'On ₹6000:2 Mini Gifts', product: 'Discover Skincare Icons' },
    { img: 'https://images-static.nykaa.com/creatives/97d6076a-8643-4e03-a9d1-2d7a0ccfa69f/default.jpg?tr=w-200,cm-pad_resize', discount: '2 Gifts On ₹3000', product: 'Mini Mascara On ₹5000' }, { img: 'https://images-static.nykaa.com/creatives/0c63c839-0f56-421a-9527-871272cd6037/default.jpg?tr=w-200,cm-pad_resize', discount: '2 Gifts On ₹3000', product: 'Mini Mascara On ₹5000' }]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid sx={{ width: { xs: '99%', sm: '90%', xl: '90%' } }}>
                    <Grid sx={{ marginLeft: '30px', borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> On Our Radar</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Best-in-show brands</Typography>
                    </Grid>
                    <Grid sx={{ border: '1px solid red', paddingBottom:'0px', marginBottom:'0px' }} >
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="RadarSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 6,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                764: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 2,


                                },
                                320: {
                                    slidesPerView: 2,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>


                                        <SwiperSlide>
                                            
                                            {/* <Grid sx={{ border:'1px solid green'}}> */}
                                            <img src={item.img} alt="1" />
                                            {/* <Grid sx={{ textAlign:'start',  }}> */}
                                            {/* <Typography sx={{ fontWeight: 600, fontSize: '18px' }}>{item.discount}</Typography>
                                            <Typography sx={{  fontSize: '12px', color: 'gray' }}>{item.product}</Typography> */}
                                        {/* </Grid> */}
                                        {/* </Grid> */}

                                        </SwiperSlide>
                                       

                                </>
                            ))}
                        </Swiper>


                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}

export default RadarSwiperComponent;
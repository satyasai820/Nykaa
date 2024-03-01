import React from "react";

import { Grid } from "@mui/material";


import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


const BeautySwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/75dbf977-c800-4f49-a6ca-a026811d6d7e.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/7cad912e-62f2-43cb-abef-6e90a6ce7348.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/c031cf2c-c0e5-4262-89b1-445822e7857b.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/fc5ff3a6-407e-4e0f-ac22-2f7dc1091986.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/fc5ff3a6-407e-4e0f-ac22-2f7dc1091986.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/263f4426-1a7e-44e2-a352-b45652f15ed0.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/140770eb-d385-44ca-b1ee-aa9ea1f1a68b.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/140770eb-d385-44ca-b1ee-aa9ea1f1a68b.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/88b70717-98e5-44e1-973a-d4d3076702e0.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/13479792-b732-437d-85a9-217a25f7f4df.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/f74f33ad-bd90-41cb-8a92-fa0ec2a8bbd6.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/fcb74f98-b490-4b46-8fe2-d234481703d9.jpg?tr=w-85.71428571428571,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/0bf2e055-7da8-4b3e-bb13-fd09c533700b.jpg?tr=w-85.71428571428571,cm-pad_resize' }]

    const cardData2 =[{img:'https://images-static.nykaa.com/creatives/0bb672ba-4cf1-4e97-97f0-66c5b1079c09/default.jpg?tr=w-600,cm-pad_resize', discount:'name', name:'name'}, {img:'https://images-static.nykaa.com/creatives/7f8076d1-73ae-4442-a391-6f497a9a39db/default.jpg?tr=w-600,cm-pad_resize', discount:'', name:''}, {img:'https://images-static.nykaa.com/creatives/a6b7c35c-7350-4309-a0ac-ebfd22bf3fa8/default.png?tr=w-600,cm-pad_resize', discount:'', name:''}, {img:'https://images-static.nykaa.com/creatives/06667d12-c1a2-41ae-a298-d8b668033829/default.jpg?tr=w-600,cm-pad_resize', discount:'', name:''}]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', background: 'white' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%' } }}>
                    <Grid sx={{ marginLeft: { lg: '50px' } }}>
                        <img style={{ maxWidth: '100%', height: 'auto',  }} src="https://images-static.nykaa.com/uploads/c802253f-4056-42bb-aa92-387bde3b454f.jpg?tr=w-1200,cm-pad_resize" alt="" />
                    </Grid>
                    <Grid>
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="BeautySwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 12,
                                },
                                1024: {
                                    slidesPerView: 10,
                                },
                                764: {
                                    slidesPerView: 8,
                                },
                                576: {
                                    slidesPerView: 8,


                                },
                                0: {
                                    slidesPerView: 5,


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
                    <Grid>
                    <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="BeautySwiper2"
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
                                    slidesPerView: 2,


                                },
                                0: {
                                    slidesPerView: 1,


                                },
                            }}

                        >
                            {cardData2.map((item) => (
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

export default BeautySwiperComponent;
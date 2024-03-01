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


const VitaminSwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/1d82dfb0-8d87-4efa-8608-b95388557f28.jpg?tr=w-171.42857142857142,cm-pad_resize' },]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%' },  }}>
                    <Grid sx={{ marginLeft: { lg: '50px' } }}>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src="https://images-static.nykaa.com/uploads/f0b5e42b-2043-47c3-8c32-18ee2c43ee0d.jpg?tr=w-1200,cm-pad_resize" alt="" />
                    </Grid>
                    <Grid >
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="VitaminSwiper"
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

export default VitaminSwiperComponent;
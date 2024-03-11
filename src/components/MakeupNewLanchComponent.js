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

const MakeupNewLanchComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/uploads/63e62915-9ffb-4f55-9124-eb02f2a03aee.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/b4a5a59e-5c96-4e28-812c-3f70402daf0b.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/ce127aca-923b-4fff-baa3-7c0d670ec656.jpg?tr=w-600,cm-pad_resize'},]
    return(
        <>
        <Grid container sx={{justifyContent:'center', backgroundColor:'white'}}>
            <Grid sx={{width:{xs:'90%', sm:'85%'}}}>
                <Grid sx={{marginTop:'20px'}}>
                    <Typography variant="h1" sx={{fontSize:{xs:'15px',sm:'18px'}}}>New Launch</Typography>
                    <img style={{maxWidth:'100%', height:'auto'}} src="https://images-static.nykaa.com/uploads/71ce5c79-f156-4c7c-bf64-4e34f368beb9.jpg?tr=w-1200,cm-pad_resize" alt=""/>
                   
                </Grid>
                <Grid container sx={{justifyContent:'center'}}>
                    <Grid>
                    <img style={{maxWidth:'100%', height:'auto', borderRadius:'10px'}} src="https://images-static.nykaa.com/uploads/f11c3c0c-52ab-4878-b927-55a440492e98.jpg?tr=w-1200,cm-pad_resize" alt=""/>
                    </Grid>
                </Grid>
                <Grid>
                <Swiper
                            spaceBetween={15}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="newSwiper"
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

export default MakeupNewLanchComponent;
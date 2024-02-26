import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Grid } from "@mui/material";

const FirstSwiperComponent = () => {
    return (
        <>
            <Grid container sx={{justifyContent:'center',  marginTop:{xs:'140px',sm:'90px',md:'4px'}, backgroundColor:'white', paddingBottom:'40px'}}>
                <Grid sx={{width:{md:'90%',lg:'90%',sm:"90%",xs:"90%"},}}>

                
                <Swiper
                    // onSwiper={setSwiperRef}
                    // slidesPerView={3}   
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        // Large devices (lg)
                        1440: {
                          slidesPerView: 3,
                          //   autoplay: false, 
                        },
                        1024: {
                          slidesPerView: 3,
                          //   autoplay: false, 
                        },
                        // Medium devices (md)
                        764: {
                          slidesPerView: 2,
                          //   autoplay: false, 
                        },
                        // Small devices (sm)
                        576: {
                          slidesPerView: 1,
                          //   autoplay: true,
           
           
                        },
                        // Extra small devices (xs)
                        0: {
                          slidesPerView: 1,
                          //   autoplay: true,
           
           
                        },
                      }}
                  
                >
                    <SwiperSlide> 
                        <img src="https://images-static.nykaa.com/uploads/f5dff368-75cf-4fdf-9155-805dc9d53d96.jpg?tr=w-600,cm-pad_resize" alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/f14a6f91-d0b3-4109-9de4-558b0b1cab11/default.jpg?tr=w-600,cm-pad_resize"  alt="2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/9c24c161-d270-4097-b132-677d6bd73d1b/default.jpg?tr=w-600,cm-pad_resize" alt="3" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/3289cd45-6b76-4cd7-b7ef-920b557c6370/default.png?tr=w-600,cm-pad_resize" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/f78ac32f-c2e8-45bb-a912-323312a776a3/default.jpeg?tr=w-600,cm-pad_resize" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/f78ac32f-c2e8-45bb-a912-323312a776a3/default.jpeg?tr=w-600,cm-pad_resize" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/creatives/530b28db-0181-4e3d-9113-ed05d01b026b/default.jpg?tr=w-600,cm-pad_resize" />
                    </SwiperSlide>
                </Swiper>
            </Grid>
            </Grid>
        </>
    );
}

export default FirstSwiperComponent;
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

const FocusSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/creatives/47a3ee31-53d0-4924-a16e-1597aaa9db6a/default.jpg?tr=w-600,cm-pad_resize', discount:'Flat 5% Off', product:'3 Steps to Healthy Hair'},
    {img:'https://images-static.nykaa.com/creatives/34686b9e-25a0-4f31-a0bf-52b2850f093b/default.jpg?tr=w-600,cm-pad_resize', discount:'Only ₹9000:', product:'Free Best Selling Lipstick'},
    {img:'https://images-static.nykaa.com/creatives/edf34f30-f484-41e3-9848-fe3301227f33/default.jpg?tr=w-600,cm-pad_resize', discount:'Only ₹699', product:'Free Best Selling Lip Gloss'},
    {img:'https://images-static.nykaa.com/creatives/5c1399d8-995d-4eaf-886a-89d732304ff7/default.jpg?tr=w-600,cm-pad_resize', discount:'Make Your Look', product:'100% Budge-Free'},]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '99%', sm: '90%', xl: '90%' } }}>
                    <Grid sx={{ marginLeft: '30px', borderBottom: '1px solid lightgray', paddingBottom: '10px', marginBottom: '20px' }}>
                        <Typography variant="h1"> Focus On</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Today's standout lables</Typography>
                    </Grid>
                    <Grid >
                    <Swiper 
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
                          slidesPerView: 2,
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
                    {cardData.map((item)=> (
                        <>
                           <SwiperSlide> 
                        <Grid sx={{marginLeft:'10px'}}>
                            <Typography sx={{position:'absolute', color:'white', marginTop:{xs:'330px',sm:'98%',md:'73%',lg:'79%' ,xl:'74%'},  fontWeight:600, fontSize:'18px' }}>{item.discount}</Typography>
                            <Typography  sx={{position:'absolute', color:'white', marginTop:{xs:'350px',sm:'104%',md:'78%',lg:'84%',xl:'78%'},  fontSize:'16px',   }}>{item.product}</Typography>
                        </Grid>
                        <img src={item.img}  alt="1" />
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

export default FocusSwiperComponent;
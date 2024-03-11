import { Grid, Typography, } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const MakeupGloballyCardSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/uploads/e273e605-6c7b-4bb5-b0e1-b475c4beccfe.jpg?tr=w-600,cm-pad_resize',p1:'Iconic Coverage', p2:'In A Single Swipe'},{img:'https://images-static.nykaa.com/uploads/1157bffe-dd52-48ba-b46a-243c7a3b8fee.jpg?tr=w-600,cm-pad_resize',p1:'Best Seller:', p2:'Juicy lasting Tint'},{img:'https://images-static.nykaa.com/uploads/a7293cf1-bb24-4f2d-b6ea-613e136f924e.jpg?tr=w-600,cm-pad_resize',p1:'Makeup With An Attitude', p2:''},{img:'https://images-static.nykaa.com/uploads/d71839ee-5149-4dd6-b8a0-3ac1aa74fb1c.jpg?tr=w-600,cm-pad_resize',p1:'UpTo 20% Off', p2:'Free Gift on Rs999'},{img:'https://images-static.nykaa.com/uploads/36f0e1bc-e412-4082-8ed5-fd3249433df3.jpg?tr=w-600,cm-pad_resize', p1:'Always On', p2:'Nails Salon'}]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                <Grid sx={{ width: { xs: '95%', sm: '85%' } }}>
                    <Grid>
                        <Typography sx={{ fontSize: { xs: '15px', sm: '18px', fontWeight: 550 } }}>Globally Trending</Typography>
                        <Typography sx={{ fontSize: { xs: '10px', sm: '12px' } }}>What Everyone's Loving</Typography>
                    </Grid>
                    <Grid sx={{ display: 'flex' }}>
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="GloballySwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 2.5,
                                },
                                1024: {
                                    slidesPerView: 2,
                                },
                                764: {
                                    slidesPerView: 1.5,
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
                                        <Grid>
                                            <Card sx={{ maxWidth: 520 }}>
                                                <CardActionArea>
                                                    <CardMedia
                                                        component="img"
                                                        height="250"
                                                        image={item.img}
                                                        alt="green iguana"
                                                    />
                                                    <CardContent>
                                                        <Typography sx={{ fontSize: '14px', fontWeight: 550, textAlign:'start', display:{xs:'none', sm:'block'} }} >{item.p1}</Typography>
                                                        <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 550 , textAlign:'start', display:{xs:'none', sm:'block'} }} >{item.p2}</Typography>
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>
                                        </Grid>


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

export default MakeupGloballyCardSwiperComponent;
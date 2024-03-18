
import React from "react";
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
const MakeupCardSecondSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/media/catalog/product/b/c/bc452235060805942580_1.png', name:'L`Oreal Paris Hyaluron Moisture ',h:''},{img:'https://images-static.nykaa.com/media/catalog/product/d/3/d3d574eRELOV00000057_1.jpg', name:'Maybelline New York Superstay Vinyl Ink',h:'OFFER'},{img:'https://images-static.nykaa.com/media/catalog/product/9/e/9e1dc3a5060542725378_1July3.jpg', name:'BBLUNT Hot Shot Heat Protection Hair', h:'BESTSELLER'},{img:'https://images-static.nykaa.com/media/catalog/product/b/3/b3f9592843004103663_0.jpg', name:'L`Oreal Paris Hyaluron Moisture', h:'OFFER'},{img:'https://images-static.nykaa.com/media/catalog/product/f/4/f4a4faaSTAZE00000035_1.jpg', name:'L`Oreal Paris Hyaluron Moisture',h:'NEW'},{img:'https://images-static.nykaa.com/media/catalog/product/2/a/2a4cc5e8904320700027_newimg_1.jpg', name:'L`Oreal Paris Hyaluron Moisture',h:'OFFER'},{img:'https://images-static.nykaa.com/media/catalog/product/9/e/9e1dc3a5060542725378_1July3.jpg', name:'BBLUNT Hot Shot Heat Protection Hair',h:'NEW'},{img:'https://images-static.nykaa.com/media/catalog/product/3/6/36047888906087778288_1.jpg', name:'L`Oreal Paris Hyaluron Moisture',h:'OFFER'},{img:'https://images-static.nykaa.com/media/catalog/product/0/2/0274c23716170284736_1.jpg', name:'L`Oreal Paris Hyaluron Moisture ',h:'NEW'},{img:'https://images-static.nykaa.com/media/catalog/product/8/e/8efee3eSMASH00000388_1.jpg', name:'Ikonic Professional Glam Straightner (Black)',h:'NEW'},{img:'https://images-static.nykaa.com/media/catalog/product/d/2/d2347b8716170229157-0.jpg', name:'L`Oreal Paris Hyaluron Moisture',h:'OFFER'},{img:'https://images-static.nykaa.com/media/catalog/product/3/6/36047888906087778288_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair',h:'NEW'},]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid sx={{ width: {xs:'95%' ,sm:'90%', lg:'80%' }}}>
                    <Grid >
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={8}  
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="HotListSwiper"
                            breakpoints={{

                             
                               
                                1440: {
                                    slidesPerView: 8,
                                },
                                1024: {
                                    slidesPerView: 6,
                                },
                                764: {
                                    slidesPerView: 4,
                                },
                                576: {
                                    slidesPerView: 3,


                                },
                                320: {
                                    slidesPerView: 2.5,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>


                                    <SwiperSlide>
                                       <Typography sx={{position:'absolute', fontSize:'9px', marginLeft:'10px', zIndex:'1', marginTop:'10px', fontWeight:550 }}>{item.h}</Typography>

                                        <Card sx={{ maxWidth: 160, boxShadow: 'none',  textAlign:'start' }}>
                                            <CardMedia
                                                sx={{
                                                    position: 'relative',
                                                    height: 180,
                                                    border: '1px solid lightgray',
                                                    borderRadius: '5px',
                                                    overflow: 'hidden', // Ensure text doesn't overflow
                                                }}
                                                image={item.img}
                                                title="green iguana"
                                            >
                                                <Typography sx={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'start', background: 'rgba(255, 255, 255, 0.8)', padding: '4px', fontSize: '10px', fontWeight: 'bold', color: 'gray' }} >
                                                    4.4
                                                </Typography>
                                               
                                                <Typography sx={{ position: 'absolute', bottom: '0', left: '0', right: '0', textAlign: 'start', marginLeft: '18px', color: 'gray' }} > <Icon icon="material-symbols-light:star" width="13" height="13" /> <span style={{ fontSize: '10px' }}>/5 (4.2%)</span></Typography>
                                            </CardMedia>
                                            <CardContent sx={{ display: 'block' }}>
                                                <Grid>
                                                    <Typography variant="p" sx={{ fontSize: '12px' }}>{item.name} </Typography>

                                                </Grid>
                                                <Typography variant="p"> 1L </Typography>
                                                <Typography sx={{ fontSize: '13px', fontWeight: 700 }}> ₹919 <span style={{ fontSize: '10px', textDecoration: 'line-through', fontWeight: 500, color:'grey' }}>₹1149</span> <span style={{ fontWeight: 500, fontSize: '12px', color:'green' }}>20%</span></Typography>
                                            </CardContent>
                                        </Card>

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

export default MakeupCardSecondSwiperComponent;

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
const MakeupCardOneSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/media/catalog/product/1/8/18e24b08904245705053_1.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f6846291106034264_2301241.jpg', name:'Maybelline New York Superstay Vinyl Ink'},{img:'https://images-static.nykaa.com/media/catalog/product/5/9/59d87f88901526589586_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},{img:'https://images-static.nykaa.com/media/catalog/product/e/e/ee03ff55060332329526_1.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/2/3/2382592843004101669_0.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/8/c/8c0c0ceLAKME00000012_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1df1652PIXIX00000122_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},{img:'https://images-static.nykaa.com/media/catalog/product/0/c/0c9573c41554590913_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f684SMASH00000124_2301241.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/0/f/0f9537aNYSWISSB00122_01.jpg', name:'Ikonic Professional Glam Straightner (Black)'},{img:'https://images-static.nykaa.com/media/catalog/product/f/a/faac1ca8809625243715_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/c/4/c4da1f6KAYBE00000217_01.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white', paddingTop:'50px' }}>
                <Grid sx={{ width: {xs:'95%' ,sm:'90%', xl:'85%' }}}>
                    <Grid sx={{ marginLeft: '30px',  paddingBottom: '10px' }}>
                        <Typography variant="h1">Loved By All</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Best Selling Makeup pick </Typography>
                        <Grid sx={{display:'flex'}}>
                        <Typography variant="p" sx={{ border:'1px solid #E80071', padding:'5px  10px', borderRadius:'20px', marginLeft:{ sm:'40px'}, marginTop:'5px', color:'#E80071',}}>All</Typography>
                        <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Lips</Typography>
                        <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Face</Typography>
                        <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Eyes</Typography>

                        </Grid>

                    </Grid>
                    <Grid >
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={8}  
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="makeupCardSwiper"
                            breakpoints={{

                             
                               
                                1440: {
                                    slidesPerView: 7.5,
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
                                    slidesPerView: 3,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>


                                    <SwiperSlide>

                                        <Card sx={{ maxWidth: 160, boxShadow: 'none',  textAlign:'start' }}>
                                            <CardMedia
                                                sx={{
                                                    position: 'relative',
                                                    height: 130,
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

export default MakeupCardOneSwiperComponent;
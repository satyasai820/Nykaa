
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
const HotListSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/media/catalog/product/0/c/0c9573cLOREA00000356_1.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/5/f/5f397c18901023018251.jpg', name:'Maybelline New York Superstay Vinyl Ink'},{img:'https://images-static.nykaa.com/media/catalog/product/7/9/79fbe698906063411147_1.jpg?tr=w-344,h-344,cm-pad_resize', name:'BBLUNT Hot Shot Heat Protection Hair  '},{img:'https://images-static.nykaa.com/media/catalog/product/5/f/5f397c18901023018251.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/6/f/6fa60d9MAMAE00000095_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/b/8/b86d95d23657_S1-8901030983429.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/2/4/24d3ea56902395854005_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},{img:'https://images-static.nykaa.com/media/catalog/product/0/6/066c973N_8904052432975_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/b/4/b40a64a8904231000421_1.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/6/1/61894d98901247577022_1.jpg', name:'Ikonic Professional Glam Straightner (Black)'},{img:'https://images-static.nykaa.com/media/catalog/product/7/4/7439656LOVEE00000117_1a.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/5/9/59d87f8LOREA00000421_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid sx={{ width: {xs:'95%' ,sm:'90%' }}}>
                    <Grid sx={{ marginLeft: '30px', borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Hot List</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Nykaa's Super Sellers</Typography>

                    </Grid>
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

export default HotListSwiperComponent;
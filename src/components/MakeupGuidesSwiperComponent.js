import { Grid, Typography } from "@mui/material";
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

const MakeupGuidesSwiperComponent = () => {
    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/8481c576-7dd5-4226-8b3b-5d81176f1309.jpeg?tr=w-240,cm-pad_resize', p1: 'Take The Lipstick Finder Quize' }, { img: 'https://images-static.nykaa.com/uploads/638abbd9-9358-4179-b680-7c407adb3cc1.jpeg?tr=w-240,cm-pad_resize', p1: 'Get The No Makeup',p2:'Look' }, { img: 'https://images-static.nykaa.com/uploads/bae44e09-a3c8-4caf-b84a-3e13d8e3fb4e.jpeg?tr=w-240,cm-pad_resize', p1: 'Lift, Curl & Slay With', p2:'Mascaras' }, { img: 'https://images-static.nykaa.com/uploads/f6619fc4-3057-4162-98ad-76413f3aae60.jpeg?tr=w-240,cm-pad_resize', p1: 'Let Your Eyes DO The Talking' }, { img: 'https://images-static.nykaa.com/uploads/b1f6a6e0-e071-4b87-beac-21577b3f65e6.jpeg?tr=w-240,cm-pad_resize', p1: 'Best Finds For Vacay!' }, { img: 'https://images-static.nykaa.com/uploads/fc621f73-cd73-4cbf-b469-25605328a5f3.jpg?tr=w-240,cm-pad_resize', p1: 'Drench In Beauty' },]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF', paddingTop: { xs: '20px' },  }}>
                <Grid sx={{ width: { xs: '90%', sm: '90%', lg: '85%', } }}>
                    <Grid sx={{marginBottom:{xs:'10px', sm:'20px'}}}>

                        <Typography sx={{ fontSize: { xs: '13px', sm: '18px' }, fontWeight: 550 }}>Makeup Guides</Typography>
                        <Typography sx={{ fontSize: { xs: '13px', sm: '18px' }, fontWeight: 550 }}>Tips & Advice For Unique Skin</Typography>
                    </Grid>
                    <Swiper
                        spaceBetween={10}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="GuideSwiper"
                        breakpoints={{
                            1440: {
                                slidesPerView: 5.5,
                            },
                            1024: {
                                slidesPerView: 4,
                            },
                            764: {
                                slidesPerView: 3,
                            },
                            576: {
                                slidesPerView: 3,


                            },
                            0: {
                                slidesPerView: 1.5,


                            },
                        }}

                    >

                        {cardData.map((item) => (
                            <>
                                <SwiperSlide>
                                    <Grid sx={{ marginRight: { xs: '5px', sm: '20px' } }}>
                                        <Card sx={{ maxWidth: 230 }}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component="img"
                                                    height="auto"
                                                    image={item.img}
                                                    alt="green iguana"
                                                />
                                                <CardContent sx={{textAlign:'start'}}>
                                                    <Typography sx={{ fontWeight:550, fontSize: {xs:'8px', sm: '11px' } }} >{item.p1}</Typography>
                                                    <Typography sx={{ fontWeight:550, fontSize: {xs:'8px', sm: '11px' } }}>{item.p2}</Typography>
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
        </>
    );
}

export default MakeupGuidesSwiperComponent;
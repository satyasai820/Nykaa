import React from "react";

import { Pagination, Navigation } from 'swiper/modules';
import { Grid, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { Icon } from "@iconify/react";

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules

const MakeupCombosCardSwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/media/catalog/product/1/e/1eaafd38908012952879_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/9/9/99cc84e8610769_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/f/9/f9f915eSWIAC00001594_01.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/0/8/08329e3RENEE00000450_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/7/4/7439656LOVEE00000117_1a.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/0/d/0d7ef2eINSIG00000668_01n.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/a/b/ab69268combo_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/5/4/54dc3124186962434890_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/2/a/2aeee26LOVAD00000005_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/b/c/bc11ca6REVLO00000133.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/e/9/e91d6d7LAGIR00000008_1.jpg', name: 'Revlon Kajal & Lipstick Combo' }, { img: 'https://images-static.nykaa.com/media/catalog/product/a/f/af321bc746935569952_1w.jpg', name: 'Revlon Kajal & Lipstick Combo' },]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white', }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', xl: '85%' } }}>
                    <Grid sx={{ marginLeft: { xs: '2px', sm: '30px' }, paddingBottom: '10px' }}>
                        <Typography variant="h1" sx={{ fontSize: { xs: '15px', sm: '20px' } }}>Crackling Combos</Typography>
                        <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                            <Typography variant="p" sx={{ border: '1px solid #E80071', padding: '5px  10px', borderRadius: '20px', marginLeft: { sm: '40px' }, marginTop: '5px', color: '#E80071', }}>All</Typography>
                            <Typography variant="p" sx={{ border: '1px solid grey', padding: '5px  10px', borderRadius: '20px', marginLeft: '10px', marginTop: '5px' }}>Lips</Typography>
                            <Typography variant="p" sx={{ border: '1px solid grey', padding: '5px  10px', borderRadius: '20px', marginLeft: '10px', marginTop: '5px' }}>Tools & Brushes</Typography>
                            <Typography variant="p" sx={{ border: '1px solid grey', padding: '5px  10px', borderRadius: '20px', marginLeft: '10px', marginTop: '5px' }}>Eyes</Typography>

                        </Grid>

                    </Grid>

                    <Grid >
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={8}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="comboSwiper"
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
                                    slidesPerView: 2.5,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>


                                    <SwiperSlide>

                                        <Card sx={{ maxWidth: 160, boxShadow: 'none', textAlign: 'start' }}>
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
                                                <Typography sx={{ fontSize: '13px', fontWeight: 700 }}> ₹919 <span style={{ fontSize: '10px', textDecoration: 'line-through', fontWeight: 500, color: 'grey' }}>₹1149</span> <span style={{ fontWeight: 500, fontSize: '12px', color: 'green' }}>20%</span></Typography>
                                            </CardContent>
                                        </Card>

                                    </SwiperSlide>


                                </>
                            ))}
                        </Swiper>


                    </Grid>

                </Grid>
                <Grid sx={{ width: { xs: '95%', sm: '90%' } }}>
                    <Grid sx={{ textAlign: 'center', marginTop: { xs: '10px', sm: '20px' } }}>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize" alt="" />
                    </Grid>
                </Grid>
            </Grid>

        </>
    );
}

export default MakeupCombosCardSwiperComponent;
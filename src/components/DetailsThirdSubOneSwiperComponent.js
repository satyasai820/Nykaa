import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { Icon } from "@iconify/react";
import React, { useState } from "react";


import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const DetailsThirdSubOneSwiperComponent = () => {

    const [hoverEffect, setHoverEffect] = useState(null);

    const handleChangeClose = () => {
        setHoverEffect(null)
    }

    const handleChange = (item) => {
        setHoverEffect(item);
    }

    const cardsData = [{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/c/8c12fe48901030790065_1.jpg', c:'1'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/0/5/05408abMAYBE00000025_001.jpg', c:'2'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/b/8/b86d95d22769_H-8901030987861.jpg', c:'3'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/8/18e72df8901030790065_1.jpg', c:'4'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/1/8/18e24b0NYKAC00000142_1.jpg', c:'5'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/c/8c12fe4LAKME00000324_1.jpg', c:'6'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/5/9/59d87f88901526589586_1.jpg', c:'7'},{img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/c/0/c09d14022998_H-8901030978043.jpg', c:'8'}, {img:'https://images-static.nykaa.com/media/catalog/product/tr:h-800,w-800,cm-pad_resize/8/c/8c12fe48901030654886_1.jpg', c:'9'}]

    return (
        <>
            <Grid container sx={{display:'block'}}>
                <Grid sx={{ margin: '20px 0px' }}>
                    <Typography sx={{ fontSize: { xs: '13px', sm: '15px' }, fontWeight: 550 }}>Customers also Viewed</Typography>
                </Grid>
                <Grid  >


                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="detailsSwiper"
                        breakpoints={{



                            1440: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            764: {
                                slidesPerView: 2,
                            },
                            576: {
                                slidesPerView: 2,


                            },
                            320: {
                                slidesPerView: 1,


                            },
                        }}

                    >
                        {cardsData.map((item) => (
                            <>


                                <SwiperSlide>


                                    <Card sx={{ maxWidth: 205, margin: 'auto', boxShadow: 'none' }} onMouseLeave={() => handleChangeClose()}>
                                        <CardActionArea onMouseEnter={() => handleChange(item.c)} >
                                            <CardMedia
                                                component="img"
                                                height="auto"
                                                image={item.img}
                                                alt="green iguana"

                                            />
                                            <CardContent>
                                                <Typography sx={{ fontSize: '11px', textAlign: 'center', color: '#000000', fontWeight: 500 }} >Lakme Absolute Primer</Typography>
                                                <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '10px' }}><span style={{ color: '#001325A3' }}>MRP.</span> <span style={{ textDecoration: 'line-through' }}>₹850</span> <span style={{ borderRight: '1px solid lightgrey', padding: '0px 4px', fontWeight: 'bold' }}> ₹723</span> <span style={{ color: 'green', fontSize: '12px' }}>15% Off</span> </Typography>
                                                <Grid sx={{ justifyContent: 'center', marginTop: '10px', display: 'flex' }}>
                                                    <Icon icon="entypo:star" width="12" height="12" />
                                                    <Icon icon="entypo:star" width="12" height="12" />
                                                    <Icon icon="entypo:star" width="12" height="12" />
                                                    <Icon icon="entypo:star" width="12" height="12" />
                                                    <Icon icon="entypo:star-outlined" width="12" height="12" />
                                                    <Typography sx={{ fontSize: '10px', marginLeft: '5px', color: '#001325A3' }}>(20340)</Typography>
                                                </Grid>
                                                {hoverEffect === (item.c) ? (
                                                    <Grid container sx={{ borderTop: '1px solid lightgrey', alignItems: 'center', marginTop: '26px' }}>
                                                        <Grid sx={{ width: '20%' }}>

                                                            <Icon icon="icon-park-outline:like" width="25" height="25" style={{ color: '#E80071' }} />
                                                        </Grid>
                                                        <Grid sx={{ width: '80%', backgroundColor: '#E80071' }}>
                                                            <Typography sx={{ fontSize: '12px', padding: '10px 0px', textAlign: 'center', color: '#FFFFFF', fontWeight: 550 }}>Preview Shades</Typography>
                                                        </Grid>
                                                    </Grid>

                                                ) :
                                                    (<Typography sx={{ fontSize: '10px', color: '#001325A3', textAlign: 'center', marginTop: '50px' }} >3 shades </Typography>)}

                                            </CardContent>
                                        </CardActionArea>
                                    </Card>

                                </SwiperSlide>


                            </>
                        ))}
                    </Swiper>







                </Grid>
            </Grid>
        </>
    )
}

export default DetailsThirdSubOneSwiperComponent;



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

const MakuupLuxeComponent = () => {
    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/fe9cc3f4-3497-4bd4-9194-3a364801cc7b.jpg?tr=w-240,cm-pad_resize', discount: 'Flat 20% off*', product: 'Bestseller at Rs1090!' }, { img: 'https://images-static.nykaa.com/uploads/0f31cfb4-8c41-4690-8a71-5c0d83d5293a.jpg?tr=w-240,cm-pad_resize', discount: 'New Lash FAN-Tasy', product: 'A Nykaa Exclusive' }, { img: 'https://images-static.nykaa.com/uploads/c65d2d29-72ab-4d87-8e11-990753daff97.jpg?tr=w-240,cm-pad_resize', discount: 'The Iconic Look', product: 'Gifts on All Orders' }, { img: 'https://images-static.nykaa.com/uploads/53d998e3-58f0-4ea9-9078-9f83b6f84bf4.jpg?tr=w-240,cm-pad_resize', discount: 'Everyday Rosy Neutrals', product: 'To Glam Up Your Eyes' }, { img: 'https://images-static.nykaa.com/uploads/6674e69e-1673-4319-8dc6-8f85dcb34922.jpg?tr=w-240,cm-pad_resize', discount: 'BestSeller Starting at Rs.1020', product: 'Shop Now!' }, { img: 'https://images-static.nykaa.com/uploads/37205030-7ddc-4c3a-b83c-9c796d133d65.jpg?tr=w-240,cm-pad_resize', discount: 'Flat 20% Off*', product: 'Festive Kits at Rs2450' }, { img: 'https://images-static.nykaa.com/uploads/ba16ae91-fee1-45ec-8d4d-87c4556def22.jpg?tr=w-240,cm-pad_resize', discount: 'Dior Forever', product: 'New Launch' }, { img: 'https://images-static.nykaa.com/uploads/1f15c330-0aaf-418e-90ac-f3b95fce599b.jpg?tr=w-240,cm-pad_resize', discount: 'Limited Edition', product: '10 Matte Shades' },]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#F9E9E9' }}>
                <Grid sx={{ width: { xs: '99%', sm: '90%', xl: '90%' }, paddingTop: '20px' }}>
                    <Grid sx={{ marginLeft: '30px', }}>
                        <Typography variant="h1" sx={{ fontSize: '17px' }}> Luxe Indulgences</Typography>
                        <Typography variant="p" sx={{ fontSize: '12px', color: 'grey', }}>Exquisite Makeup Marvels</Typography>
                    </Grid>
                    <Grid sx={{ paddingBottom: '0px', marginBottom: '0px' }} >
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="RadarSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 6,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                                764: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 2,


                                },

                                320: {
                                    slidesPerView: 2,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>


                                    <SwiperSlide>

                                        <Grid sx={{}}>
                                            <img src={item.img} alt="1" />
                                            <Grid sx={{ textAlign: 'center', display: { xs: 'none', sm: 'block' } }}>
                                                <Typography variant="p" sx={{ color: 'gray' }}>{item.discount}</Typography>
                                            </Grid>
                                            <Grid sx={{ textAlign: 'center', marginTop: '-5px' }}>
                                                <Typography variant="p" sx={{ color: 'gray', }}>{item.product}</Typography>
                                            </Grid>
                                        </Grid>

                                    </SwiperSlide>


                                </>
                            ))}
                        </Swiper>



                    </Grid>
                </Grid>
            </Grid>
            <Grid container sx={{justifyContent:'center', backgroundColor:'#FFFFFF'}}>
                <Grid sx={{ width: { xs:'95%', sm:'90%',lg: '85%' } }}>
                    <Grid sx={{ marginLeft: { lg: '50px' }, marginTop:'30px',  }}>
                        <Typography variant="h1" sx={{fontSize:{xs:'15px',sm:'20px'},marginBottom:'10px'}} >Skincare Meets Makeup</Typography>
                        <img style={{ maxWidth: '100%', height: 'auto', borderRadius:'10px' }} src="https://images-static.nykaa.com/uploads/bafeba66-9684-4faa-945f-29ce78406c30.jpg?tr=w-1200,cm-pad_resize"  alt="" />

                    </Grid>

                </Grid>

            </Grid>

        </>
    );
}

export default MakuupLuxeComponent;
import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';


const StoreSecondComponent = () => {

    const locationData = [{ name: 'Nykaa Luxe - Infiniti Mall', adress: 'Ground Floor, Unit No 14,New Link Road,', city: 'Oshiwara,Andheri West, Mumbai - 400053 Ph: 022-22762722', }, { name: 'Nykaa On Trend - Seawoods Grand Central Mall', adress: 'Upper Ground floor, Plot No.R-1, Sector 40,', city: 'Seawoods Railway Station, Navi Mumbai- 400706 Ph: 022-22762722', }, { name: 'Nykaa On Trend-MI Road',adress: 'Ground Floor, Unit No 14,New Link Road,', city: 'Oshiwara,Andheri West, Mumbai - 400053 Ph: 022-22762722', }, { name: 'Nykaa Luxe - Westend Mall', adress: '', city: ' Ground Floor, Unit no: GS-09C, Aundh Pune - 411007 Ph: 022-22762722', }, { name: 'Nykaa On Trend - Palladium Mall',  adress: 'Ground Floor, 28, Velachery Road Nagendra', city: 'Nagar, Anna Garden Velachery, Chennai- 600042', }, { name: 'Nykaa On Trend - Prozone Mall', adress: 'Ground Floor, Sivanandhapuram,', city: 'Saravanampatty, Coimbatore, 641035 Ph: 022-22762722', }, { name: 'Nykaa Luxe - Next Treasure Island Next Mall', adress: 'Ground Floor, Rabindranath Tagore Marg, Flim', city: 'Colony Indore- 452001', }, { name: 'Nykaa Luxe - L&T Metro Mall', adress: 'Ground Floor Nagarjuna Hills, Punjagutta', city: 'Hyderabad- 500082', }, { name: 'Nykaa On Trend - Logix City Centre Mall',  adress: 'Ground floor, Store No-6, Plot No BW 58, Sector 32', city: 'Noida: 201301', }, { name: 'Nykaa Luxe - Khan Market',  adress: '58b, Rabindra Nagar New Delhi- 110003', city: '', },]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: { xs: '6px', sm: '20px' }, paddingBottom:'20px'}}>
                <Grid sx={{ width: { xs: '95%', sm:'80%', md: '95%', lg: '75%', xl: '60%' }, backgroundColor: '#FFFFFF', boxShadow:'0px 10px 15px rgba(0, 0, 0, 0.1)' }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <Typography fontFamily='SourceSerifPro' sx={{ fontSize: '20px', fontWeight: 550, padding: '5px 0px 10px 0px', border: '1px solid lightgrey' }} >Find A Nykaa Store Near You</Typography>
                    </Grid>

                    <Grid container>
                        <Grid item xs={12} md={5} lg={4} sx={{ margin: '10px 0px', paddingLeft: '10px', justifyContent: 'center', }}>

                            <Grid sx={{ display: 'flex', alignItems: 'center', marginRight: { xs: '10px', sm: '25px' }, justifyContent: 'center', marginLeft:{xl:'15px'}, borderBottom: '1px solid lightgrey', paddingBottom: '10px' }}>
                                <div style={{ position: 'relative' }}>
                                    <Icon icon="subway:location" width="20" height="20" style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', left: '5px' }} />
                                    <input style={{ padding: '10px', paddingLeft: '25px' }} type="text" placeholder="Search City" />
                                </div>
                                <Grid sx={{ alignItems: 'center', justifyContent: 'center', marginLeft: { xs: '10px', sm: '12px' } }}>
                                    <Typography sx={{ border: '1px solid gray', padding: '7px 10px', fontSize: '14px', color: 'gray', display: 'flex', alignItems: 'center' }}>
                                        <Icon icon="mdi:filter" width="20" height="20" style={{ marginRight: '5px', color: 'black' }} /> Brand
                                    </Typography>
                                </Grid>
                            </Grid>

                            <Grid sx={{justifyContent:'center', textAlign:'center',}} >
                                <Swiper
                                    direction={'vertical'}
                                    slidesPerView={'auto'}
                                    freeMode={true}
                                    scrollbar={true}
                                    mousewheel={true}
                                    modules={[FreeMode, Scrollbar, Mousewheel]}
                                    className="scrollSwiper"
                                    style={{
                                        msOverflowStyle: 'none',
                                        height: '500px', 
                                        width: "100%",
                                        touchAction: 'auto',
                                        '-webkit-overflow-scrolling': 'touch', 
                                        '-ms-touch-action': 'pan-y', 
                                        'touch-action': 'pan-y',


                                    }}
                                >
                                    
                                    
                                    
                                    {locationData.map((item) => (
                                        <>
                                        <SwiperSlide style={{height:'auto'}}>
                                                <Grid sx={{ textAlign:{xs:'center', md: 'start'}, marginTop: '10px', borderBottom: '1px solid lightgrey'  }}>
                                                    <Typography fontFamily='"Source Sans Pro",sans-serif' sx={{ fontSize: '14px' }} >{item.name}</Typography>
                                                    <Typography fontFamily='"Source Sans Pro",sans-serif' sx={{ fontSize: '12px', color: 'grey' }} >Open : 11:00 AM - 09:30 PM</Typography>
                                                    <Typography fontFamily='"Source Sans Pro",sans-serif' sx={{ fontSize: '12px', marginTop: '8px', color: '4A4A4A' }}>{item.adress}</Typography>
                                                    <Typography fontFamily='"Source Sans Pro",sans-serif' sx={{ fontSize: '12px', color: '4A4A4A' }}>{item.city}</Typography>
                                                    <Grid sx={{ alignItems: 'center', width: '60%', textAlign:'center', margin:{xs:'auto',md:'0px'} }}>
                                                        <Typography fontFamily='"Source Sans Pro",sans-serif' sx={{ marginTop: '15px', border: '1px solid #FC2779', textAlign: 'center', fontSize: '11px', fontWeight: 550, color: '#FC2779', padding: '5px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> GET DIRECTIONS
                                                            <Icon icon="formkit:right" width="15" height="15" /> </Typography>
                                                    </Grid>
                                                    <Typography sx={{ fontSize: '10px', marginTop: '20px', color: '#FC2779', marginBottom: '20px' }}>Store Details</Typography>

                                                </Grid>

                                                </SwiperSlide>
                                        </>
                                    ))}

                                </Swiper>


                                

                            </Grid>



                        </Grid>
                        <Grid item xs={12} md={7} lg={8} sx={{ borderTop:{xs:'15px solid lightgrey', md:'none'} }}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3818.1882724784728!2d81.92495637419742!3d16.866578617601636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3797a8372ff79d%3A0x7c0d4df09d940932!2s%20%20%20%20Temple!5e0!3m2!1sen!2sin!4v1688557188291!5m2!1sen!2sin" height='100%' width='100%' style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="map"></iframe>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>


        </>
    );
}

export default StoreSecondComponent;
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

const MakeupAtNykaaComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/media/catalog/product/3/6/36d4d4fLOVAD00000243_1.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/8/f/8f66377NUDES00000516_01.jpg', name:'Maybelline New York Superstay Vinyl Ink'},{img:'https://images-static.nykaa.com/media/catalog/product/5/3/538f5dd843004110760_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},{img:'https://images-static.nykaa.com/media/catalog/product/9/5/95c40c70754523804736_7.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/f/c/fc55c7c5060586635626_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/e/6/e6e506381555433123_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/2/1/21c31f5BLUEH00000906_1.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},{img:'https://images-static.nykaa.com/media/catalog/product/b/6/b6644f28906153190082_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/7/1/710f50b8904417309911_1.jpg', name:'L`Oreal Paris Hyaluron Moisture '},{img:'https://images-static.nykaa.com/media/catalog/product/5/6/56a344d5901905013452_1.jpg', name:'Ikonic Professional Glam Straightner '},{img:'https://images-static.nykaa.com/media/catalog/product/2/1/2140e9d8809546844282_1.jpg', name:'L`Oreal Paris Hyaluron Moisture'},{img:'https://images-static.nykaa.com/media/catalog/product/0/2/02436798906121461336_1New.jpg', name:'BBLUNT Hot Shot Heat Protection Hair  '},]

    return(
        <>
        <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white', paddingTop:'50px' }}>
            <Grid sx={{ width: {xs:'95%' ,sm:'90%', xl:'85%' }}}>
                <Grid sx={{ marginLeft:{xs:'2px', sm:'30px'},  paddingBottom: '10px' }}>
                    <Typography variant="h1" sx={{fontSize:{xs:'15px',sm:'20px'}}}>New At Nykaa</Typography>
                    <Typography variant="p" sx={{ fontSize:{xs:'12px', sm:'15px'}  }}>Exciting & New Launches</Typography>
                    <Grid sx={{display:'flex', alignItems:'center'}}>
                    <Typography variant="p" sx={{ border:'1px solid #E80071', padding:'5px  10px', borderRadius:'20px', marginLeft:{ sm:'40px'}, marginTop:'5px', color:'#E80071',}}>All</Typography>
                    <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Lips</Typography>
                    <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Face</Typography>
                    <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Eyes</Typography>
                    <Typography variant="p" sx={{ border:'1px solid grey', padding:'5px  10px', borderRadius:'20px', marginLeft:'10px', marginTop:'5px'}}>Tools & Brushes</Typography>

                    </Grid>

                </Grid>
                <Grid  >

                    
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
                                slidesPerView: 2,


                            },
                        }}

                    >
                        {cardData.map((item) => (
                            <>


                                <SwiperSlide>

                                    <Card sx={{ maxWidth: 160, boxShadow: 'none',  textAlign:'start',  }}>
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

export default MakeupAtNykaaComponent;
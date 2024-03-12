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

const MakeupMiniSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f6846291106034264_2301241.jpg',name:'Huda Beauty Obsessions  ',h:'OFFER'},{img:'https://images-static.nykaa.com/media/catalog/product/1/9/19b50528906090492294_01.jpg',name:'Huda Beauty Obsessions  ',h:'BEST SELLER'},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f684651986971961_2301241.jpg',name:'Huda Beauty  Obsessions  ',h:'BEST SELLER'},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f684602004057280_2301241.jpg',name:'Huda Beauty Obsessions  ',h:'BEST SELLER'},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f684716170264042_2301241.jpg',name:'Huda Beauty Obsessions  '},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1df1652LAKME00000119_1.jpg',name:'Huda Beauty  Obsessions  ',h:'BEST SELLER'},{img:'https://images-static.nykaa.com/media/catalog/product/1/d/1d8f684SMASH00000206_2301241.jpg',name:'Huda Beauty  Obsessions '},{img:'https://images-static.nykaa.com/media/catalog/product/6/9/6902395697350_5th_avenue_sunset_i0.jpg',name:'Huda Beauty  Obsessions '},{img:'https://images-static.nykaa.com/media/catalog/product/f/0/f0cb2a2NUDES00000091New1.jpg',name:'Huda Beauty  Obsessions  '},{img:'https://images-static.nykaa.com/media/catalog/product/9/e/9e1dc3a5060542727532_1July3.jpg',name:'Huda Beauty  Obsessions  ',h:'BEST SELLER'},{img:'https://images-static.nykaa.com/media/catalog/product/f/7/f727990MACXX00000308_2301241.jpg',name:'Huda Beauty  Obsessions  ',h:'BEST SELLER'}]

    return(
        <>
              <Grid container sx={{ justifyContent: 'center', backgroundColor: 'white' }}>
                <Grid sx={{ width: {xs:'95%' ,sm:'90%', lg:'85%' }}}>
                    <Grid sx={{ marginLeft:{xs:'10px', sm:'30px'} , paddingBottom: '10px' }}>
                        <Typography sx={{fontSize:{xs:'15px', sm:'18px', fontWeight:550, marginTop:'20px'}}}> Mini Collection</Typography>
                        <Typography  sx={{ fontSize:{xs:'11px', sm: '13px', color:'grey',  }}}>"On The Go" Must-Haves</Typography>

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
                                    slidesPerView: 2.5,


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
                    
                    <Grid container sx={{justifyContent:'center', marginBottom:{xs:'15px', sm:'25px'}}}>
                        <Grid>
                            <Typography sx={{position:'absolute', marginTop:{sm:'10%',md:'10%'},fontSize:{sm:'12px',md:'14px'},fontWeight:550,display:{xs:'none', sm:'block'}}}>Makeup Must Have</Typography>
                            <Typography sx={{position:'absolute', marginTop:{sm:'12%',md:'12%', lg:'11.2%'},fontSize:{sm:'10px', md:'12px'} ,display:{xs:'none', sm:'block'}}}>For Your Daily Needs</Typography>
                        <img style={{maxWidth:'100%', height:'auto', borderRadius:'10px'}} src="https://images-static.nykaa.com/uploads/aca3259e-ed53-481e-b18c-c5330892e6b1.jpg?tr=w-1200,cm-pad_resize" alt="" />
                        </Grid>
                        
                    </Grid>

                </Grid>

            </Grid>
        </>
    );
}

export default MakeupMiniSwiperComponent;
import { Grid, Typography } from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const FaceFirstComponent = () => {

    const imgUrl = [{img:'https://images-static.nykaa.com/uploads/f8add4b6-47e0-4d76-8d86-457436b36852.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/435935cb-0005-4172-aba3-308d87e28729.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/853f46eb-78c4-4c4c-9331-a942a595998e.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/d83edcb5-d8aa-4149-8458-3e450048c08e.jpg?tr=cm-pad_resize,w-150'},{img:'https://images-static.nykaa.com/uploads/3bdf6f88-a721-4874-9313-02999a416bd7.jpg?tr=cm-pad_resize,w-150'},]

    return (
        <>
            <Grid container sx={{  justifyContent: 'center', marginTop: { xs: '160px', sm: '120px', md: '20px' } }}>
                <Grid sx={{ width: {xs:'95%',sm:'90%', lg: '65%' } }}>
                    <Grid sx={{ marginBottom: '10px' }}>
                        <Typography sx={{ textAlign: 'center', fontWeight: 'bold', fontSize: { xs: '18px' } }}>Buy Face Primer Online
                            <span style={{ fontSize: '13px', fontWeight: 300, marginLeft: '5px' }}>(459)</span></Typography>
                    </Grid>

                    <Grid sx={{display:{xs:'none',sm:'block'}}}>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            pagination={{ clickable: true }}
                            className="faceSlider"
                            slidesPerView={1}

                        >
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/3e8dfec3-16c2-4a71-a192-3ac1ff280a1b.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/cf23df7f-7651-480f-9547-e98f5cd707b6.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/b37d8e0c-7366-414c-9276-35c5b4c2dbd2.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src='https://images-static.nykaa.com/uploads/3ea085c7-21b2-47e3-ba64-ecbbf1fd3154.png?tr=cm-pad_resize,w-1200' alt="1" />
                            </SwiperSlide>

                        </Swiper>
                    </Grid>
                    <Grid sx={{display:{xs:'block', sm:'none'}}}>
                    <img style={{maxWidth:'100%', height:'auto'}} src='https://images-static.nykaa.com/uploads/3e8dfec3-16c2-4a71-a192-3ac1ff280a1b.jpg?tr=cm-pad_resize,w-1200' alt="1" />
                    </Grid>
                    <Grid sx={{marginTop:'20px', backgroundColor:'#FFFFFF'}}>
                        <Typography sx={{fontSize:{sm:'15px', fontWeight:550,padding:'10px 0px'}}}>Shop By Benefit </Typography>
                        <Grid sx={{display:'flex'}}>
                        {imgUrl.map((item)=>(
                            <Grid sx={{marginRight:'10px'}}>
                                
                              <img style={{maxWidth:'100%', height:'auto', borderRadius:'8px'}} src={item.img} alt="" />
                              </Grid>
                        ))}
                        </Grid>
                      
                    </Grid>

                </Grid>
            </Grid>
        </>
    );
}

export default FaceFirstComponent;
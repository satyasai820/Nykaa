
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

const BeautyGudiesSwiperComponent = () => {
    const cardData =[ {img:'https://images-static.nykaa.com/uploads/01e873b1-614b-4dc5-b077-439e6edc7d1c.jpg?tr=w-240,cm-pad_resize', p1:'',p2:''},{img:'https://images-static.nykaa.com/uploads/75a02ca1-56c0-4c7e-bcf4-1d374273fbcd.jpg?tr=w-240,cm-pad_resize', p1:'2024`s BIGGEST',p2:'BEAUTY TRENDS'},{img:'https://images-static.nykaa.com/uploads/9d02dc22-5b69-4edc-a10f-ec491823dc9d.jpg?tr=w-240,cm-pad_resize', p1:'GET THAT',p2:'WINTER GLOW'},{img:'https://images-static.nykaa.com/uploads/322158df-851b-4426-a9f0-f7d7a6f4f5fb.jpg?tr=w-240,cm-pad_resize', p1:'THE FESTIVE',p2:'BEAUTY EDIT'},{img:'https://images-static.nykaa.com/uploads/fef1f0ef-ad4a-460a-89be-d984abf048b3.jpg?tr=w-240,cm-pad_resize', p1:'SCIENCE-BACKES',p2:'BEAUTY'},{img:'https://images-static.nykaa.com/uploads/36bd0259-cfb9-4657-8f14-ab5d285d8ef7.jpg?tr=w-240,cm-pad_resize', p1:'THE ULTIMATE',p2:'SHANPOO GUIDE'},{img:'https://images-static.nykaa.com/uploads/16ef1d0c-8923-477e-8384-33c7a08a307d.jpg?tr=w-240,cm-pad_resize', p1:'THE O.G CRULY',p2:'HAIR GUIDE'},{img:'https://images-static.nykaa.com/uploads/abebeea7-672e-40c7-b1df-9c96b69a080c.jpg?tr=w-240,cm-pad_resize', p1:'THE WINTER',p2:'STORE'},{img:'https://images-static.nykaa.com/uploads/7b03f41d-d7d5-4267-a451-48a4e03e4679.jpeg?tr=w-240,cm-pad_resize', p1:'HAIR INGRIDENTS',p2:'TO COVET'},{img:'https://images-static.nykaa.com/uploads/4aa7aa1c-a952-4da1-87fb-ab056513fbce.jpeg?tr=w-240,cm-pad_resize', p1:'SKIN CARE FOR',p2:'ALL AGES'},{img:'https://images-static.nykaa.com/uploads/8b61a628-d5b3-404b-a9f6-fb9ad2518439.jpg?tr=w-240,cm-pad_resize', p1:'MAKE UP FOR',p2:'ALL AGES'},{img:'https://images-static.nykaa.com/uploads/35b4754d-5188-478b-b715-6203708cef9e.jpg?tr=w-240,cm-pad_resize', p1:'ANTI HAIRFALL',p2:'GUIDE'}]
    return(
        <>
          <Grid container sx={{justifyContent:'center', backgroundColor:'white'}}> 
                <Grid sx={{width:{xs:'95%',sm:'90%'},}}>
                    <Grid>
                    <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="ProductSwiper"
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
                                            
                                        <Typography sx={{ position:'absolute', fontWeight: 600, fontSize:{xs:'11px', sm:'17px'} , color:'white', marginTop:{xs:'220px',sm:'200px'}, paddingLeft:{xs:'5px',sm:'10px'} }}>{item.p1}</Typography>
                                        <Typography sx={{ position:'absolute', fontWeight: 600, fontSize:{xs:'11px',sm:'17px'} , color:'white', marginTop:{xs:'230px',sm:'220px'}, paddingLeft:{xs:'5px',sm:'10px'} }}>{item.p2}</Typography>
                                        <img src={item.img} alt="1" />

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

export default BeautyGudiesSwiperComponent;
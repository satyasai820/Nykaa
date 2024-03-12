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

const MakeupShopTheLookSwiperComponent = () => {

    const cardData = [{img:'https://images-static.nykaa.com/uploads/70eb4d6b-14ec-4b4c-afbc-9bc23e588d2f.jpg?tr=w-240,cm-pad_resize',name:'Clean Girl Makeup'},{img:'https://images-static.nykaa.com/uploads/90bea12e-872c-4873-aa32-90b967b59fad.jpg?tr=w-240,cm-pad_resize',name:'Soft Glam'},{img:'https://images-static.nykaa.com/uploads/dfd977a5-f65c-4811-8c71-dddcb886e404.png?tr=w-240,cm-pad_resize',name:'Straberry Makeup'},{img:'https://images-static.nykaa.com/uploads/8c6cef96-aaa7-4737-87be-1cca03edf2f0.jpg?tr=w-240,cm-pad_resize',name:'ESPRESSO MAKEUP'},{img:'https://images-static.nykaa.com/uploads/9f976f82-c2eb-41dc-b454-e2cec1f46bac.jpg?tr=w-240,cm-pad_resize',name:'French Girl Beauty'},{img:'https://images-static.nykaa.com/uploads/875323dc-e43d-430f-9787-759446e23dde.jpg?tr=w-240,cm-pad_resize',name:'Glazed Donut Lips'},{img:'https://images-static.nykaa.com/uploads/8488e4c5-b489-474a-a8d6-5818c17751f4.jpg?tr=w-240,cm-pad_resize',name:'CLOUD-SKIN'},{img:'https://images-static.nykaa.com/uploads/cab42980-58a7-43c3-b3f6-ac8cad36894f.jpg?tr=w-240,cm-pad_resize',name:'Glass Skin Look'}]

    return(
        <>
            <Grid container sx={{backgroundColor:'#FFF6F9', justifyContent:'center'}} >
            <Grid sx={{width:{xs:'95%',sm:'90%',lg:'85%'}}}>
                <Grid sx={{marginTop:'20px'}}>
                    <Typography sx={{fontSize:{xs:'12px',md:'18px'}, fontWeight:550}}>Shop The Look</Typography>
                    <Typography sx={{fontSize:{xs:'12px',md:'18px'},fontWeight:550}}>Stay In Vogue</Typography>
                    <Typography sx={{fontSize:{xs:'12px',md:'18px'}, fontWeight:550, textAlign:'center'}}>Shop The Look</Typography>
                    <Typography sx={{fontSize:{xs:'11px',md:'16px'},fontWeight:550, textAlign:'center'}}>Stay In Vogue</Typography>
                </Grid>
                
                <Grid >
                <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="shoplookSwiper"
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
                                    slidesPerView: 1,


                                },
                            }}

                        >
                            {cardData.map((item) => (
                                <>
                                    <SwiperSlide>


                                        <Grid sx={{}}>
                                            <img src={item.img} alt="1" />
                                            <Grid sx={{ textAlign: 'center',  }}>
                                                <Typography sx={{ fontWeight: 600, fontSize: '14px' }}>{item.name}</Typography>
                                            </Grid>
                                        </Grid>
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

export default MakeupShopTheLookSwiperComponent;
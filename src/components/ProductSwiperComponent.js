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

const ProductSwiperComponent = () => {
    const cardData = [{img:'https://images-static.nykaa.com/uploads/434527d6-ad5d-4b38-a648-94df27d77fae.jpg?tr=w-240,cm-pad_resize', p1:'',p2:''},{img:'https://images-static.nykaa.com/uploads/868056ba-6435-4cee-91cb-ae426e071046.jpg?tr=w-240,cm-pad_resize',p1:'VIRAL',p2:'SUNSCREENS'},{img:'https://images-static.nykaa.com/uploads/6439469c-8467-43c5-bace-ac39628aaaf9.jpg?tr=w-240,cm-pad_resize',p1:'PEACH FUZZ',p2:'MAKEUP PICKS'},{img:'https://images-static.nykaa.com/uploads/4517895c-5508-400e-99ab-a645dca6ad9e.jpg?tr=w-240,cm-pad_resize',p1:'BOND REPAIR ',p2:'ESSENTIALS'},{img:'https://images-static.nykaa.com/uploads/de7f2e86-0564-4175-a739-c47fbc6e25a3.jpg?tr=w-240,cm-pad_resize',p1:'BESTSELLING',p2:'MASCARAS'},{img:'https://images-static.nykaa.com/uploads/48674b00-ffb7-44d4-b530-26e7468599df.jpg?tr=w-240,cm-pad_resize',p1:'BASE MAKEUP',p2:'ESSENTIALS'},{img:'https://images-static.nykaa.com/uploads/923d490e-5183-4a66-9812-0f13c886c004.jpg?tr=w-240,cm-pad_resize',p1:'COMFORTING',p2:'SCENTS'},{img:'https://images-static.nykaa.com/uploads/14104b9d-ac0a-4146-96eb-a42abfd56125.jpg?tr=w-240,cm-pad_resize',p1:'ACTIVE',p2:'INGREADENTS'},{img:'https://images-static.nykaa.com/uploads/488c3028-2203-4f88-9aab-5c15260ec6d0.jpg?tr=w-240,cm-pad_resize',p1:'KAJAL & ',p2:'EYELINERS'},{img:'https://images-static.nykaa.com/uploads/07462df3-e0bf-42e6-8596-d4be0ca159fd.jpg?tr=w-240,cm-pad_resize',p1:'SHOWER',p2:'GELS'},{img:'https://images-static.nykaa.com/uploads/07462df3-e0bf-42e6-8596-d4be0ca159fd.jpg?tr=w-240,cm-pad_resize',p1:'SKIN',p2:'SUPPLEMENTS'},{img:'https://images-static.nykaa.com/uploads/f550f08d-42c0-4715-9f62-7806a9d484c1.jpg?tr=w-240,cm-pad_resize',p1:'ANTI FRIZZ',p2:'WARRIORS'},]
    return(
        <>
            <Grid container sx={{justifyContent:'center', backgroundColor:'white'}}> 
                <Grid sx={{width:{xs:'95%',sm:'90%'}}}>
                    <Grid>
                    <Swiper
                            spaceBetween={5}
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
                                            
                                        <Typography sx={{ position:'absolute', fontWeight: 600, fontSize:{xs:'14px', sm:'20px'} , color:'white', marginTop:{xs:'230px'}, paddingLeft:{xs:'5px',sm:'10px'} }}>{item.p1}</Typography>
                                        <Typography sx={{ position:'absolute', fontWeight: 600, fontSize:{xs:'14px',sm:'20px'} , color:'white', marginTop:{xs:'250px'}, paddingLeft:{xs:'5px',sm:'10px'} }}>{item.p2}</Typography>
                                        <img src={item.img} alt="1" />

                                        </SwiperSlide>
                                       

                                </>
                            ))}
                        </Swiper>
                    </Grid>

                </Grid>
            </Grid>
        </>
    )
}

export default ProductSwiperComponent;
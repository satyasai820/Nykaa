import { Grid , Typography} from "@mui/material";
import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const LuxuryComponent = () => {

    const cardData =[{img:'https://images-static.nykaa.com/uploads/9b23a90d-f83f-420e-9c84-bece29eb213a.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/432b666f-df5e-4749-a32e-0ca9cdb60ca1.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/e42fe436-29df-43c2-8295-15bb6a8f5e2c.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/37b4d2e9-a3f7-4285-a97b-447e67f9f1de.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/4cedef39-9efc-469c-9d1c-a977480fe970.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/1a628b2f-af21-4c94-96f1-445c20318f0c.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/317a025c-61de-4f72-ba87-1be2694265b3.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/3a2a6b78-a6d2-4664-bf9d-0c27a47a07aa.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/4850cb52-9383-4b18-b530-71486884beb8.jpg?tr=w-171.42857142857142,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/088771ed-625c-4aee-8458-3ab8679f0680.jpg?tr=w-171.42857142857142,cm-pad_resize'}]

    return(
        <>
        <Grid container sx={{backgroundColor:'white', justifyContent:'center'}}>
        <Grid sx={{width:{xs:'99%',sm:'90%', md:'90%',xl:'90%'},  }}>
            <Grid sx={{margin:'auto',marginLeft:{lg:'30px',xl:'70px'}}}>
                <img 
                style={{ maxWidth:'100%', height:'auto'}}
                 src="https://images-static.nykaa.com/uploads/d95e64c7-3a88-4ad7-a501-25c004d8cf3c.jpg?tr=w-1200,cm-pad_resize" alt=""/>
            </Grid>
            <Grid>
            <Swiper 
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="LuxurySwiper"
                    breakpoints={{
                        1440: {
                          slidesPerView: 7,
                        },
                        1024: {
                          slidesPerView: 5,
                        },
                        764: {
                          slidesPerView: 4,
                        },
                        576: {
                          slidesPerView: 3,
           
           
                        },
                        0: {
                          slidesPerView: 3,
           
           
                        },
                      }}
                  
                >
                    {cardData.map((item)=> (
                        <>
                           <SwiperSlide> 
                        <Grid sx={{marginLeft:'10px'}}>
                            <Typography sx={{position:'absolute', color:'white', marginTop:{xs:'330px',sm:'98%',md:'73%',lg:'79%' ,xl:'74%'},  fontWeight:600, fontSize:'18px' }}>{item.discount}</Typography>
                            <Typography  sx={{position:'absolute', color:'white', marginTop:{xs:'350px',sm:'104%',md:'78%',lg:'84%',xl:'78%'},  fontSize:'16px',   }}>{item.product}</Typography>
                        </Grid>
                        <img src={item.img}  alt="1" />
                    </SwiperSlide>
                        </>
                    ))}
                </Swiper>
            </Grid>

            <Grid>
            <Swiper  
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        1440: {
                          slidesPerView: 2,
                        },
                        1024: {
                          slidesPerView: 1,
                        },
                        764: {
                          slidesPerView: 1, 
                        },
                        576: {
                          slidesPerView: 1,
           
           
                        },
                        0: {
                          slidesPerView: 1,
           
           
                        },
                      }}
                  
                >
                    <SwiperSlide> 
                        <img src="https://images-static.nykaa.com/uploads/7fc4214b-4121-435a-9253-29ac589a1015.jpg?tr=w-600,cm-pad_resize" alt="1" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/uploads/249b0696-8162-405f-a2a8-8dae27038e9d.jpg?tr=w-600,cm-pad_resize"  alt="2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-static.nykaa.com/uploads/11f360f7-0107-4776-af8e-1ced470b7d77.jpg?tr=w-600,cm-pad_resize" alt="3" />
                    </SwiperSlide>
                 
                </Swiper>
            </Grid>
            <Grid sx={{margin:'auto',marginLeft:{lg:'30px',xl:'70px'}, display:{xs:'none',sm:'block'}}}>
                <img 
                style={{ maxWidth:'100%', height:'auto'}}
                 src="https://images-static.nykaa.com/uploads/28690ee2-3f52-494d-9ca2-5a14b5251f16.jpg?tr=w-1200,cm-pad_resize" alt=""/>
            </Grid>
        </Grid>

        </Grid>
        </>
    );
}

export default LuxuryComponent;
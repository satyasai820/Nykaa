import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { Grid, Typography } from "@mui/material";

const FirstSwiperComponent = () => {
    const imageData = [{img:'https://images-static.nykaa.com/uploads/f5dff368-75cf-4fdf-9155-805dc9d53d96.jpg?tr=w-600,cm-pad_resize',discount:'UpTo 50% Off',product:'Shop now'},{img:'https://images-static.nykaa.com/creatives/f14a6f91-d0b3-4109-9de4-558b0b1cab11/default.jpg?tr=w-600,cm-pad_resize', discount:'Make Your Look', product:'100% Budge-Free'},{img:'https://images-static.nykaa.com/creatives/9c24c161-d270-4097-b132-677d6bd73d1b/default.jpg?tr=w-600,cm-pad_resize', discount:'UpTo 20% Off', product:'Shop now'},{img:'https://images-static.nykaa.com/creatives/3289cd45-6b76-4cd7-b7ef-920b557c6370/default.png?tr=w-600,cm-pad_resize',discount:'UpTo 15% Off', product:'Shop now'},{img:'https://images-static.nykaa.com/creatives/f78ac32f-c2e8-45bb-a912-323312a776a3/default.jpeg?tr=w-600,cm-pad_resize', discount:'UpTo 40% Off', product:''},{img:'https://images-static.nykaa.com/creatives/143716a5-147b-4a63-92fa-17cf427a6dcb/default.jpg?tr=w-600,cm-pad_resize', discount:'UpTo 30% Off',product:'Shop now'},{img:'https://images-static.nykaa.com/creatives/530b28db-0181-4e3d-9113-ed05d01b026b/default.jpg?tr=w-600,cm-pad_resize', discount:'UpTo 15% Off', product:'Shop now'}]
    return (
        <>
            <Grid container sx={{justifyContent:'center',  marginTop:{xs:'140px',sm:'90px',md:'4px'}, backgroundColor:'white', paddingBottom:'40px'}}>
                <Grid sx={{width:{md:'90%',lg:'90%',sm:"70%",xs:"90%"},}}>

                
                <Swiper
                    // onSwiper={setSwiperRef}
                    // slidesPerView={3}   
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                    breakpoints={{
                        1440: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 2, 
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
                    {imageData.map((item) => (
                         <SwiperSlide> 
                             <Grid sx={{marginLeft:'10px'}}>
                            <Typography sx={{position:'absolute', color:'white', marginTop:{xs:'330px',sm:'98%',md:'73%',lg:'79%' ,xl:'74%'},  fontWeight:600, fontSize:'18px' }}>{item.discount}</Typography>
                            <Typography  sx={{position:'absolute', color:'white', marginTop:{xs:'350px',sm:'104%',md:'78%',lg:'84%',xl:'78%'},  fontSize:'16px',fontWeight:'bold'   }}>{item.product}</Typography>
                        </Grid>
                         <img src={item.img} alt="1" />
                     </SwiperSlide>
                    ))}
                </Swiper>
            </Grid>
            </Grid>
        </>
    );
}

export default FirstSwiperComponent;
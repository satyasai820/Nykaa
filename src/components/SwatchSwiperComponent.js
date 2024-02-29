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

const cardData = [{img:'https://images-static.nykaa.com/uploads/fef1433c-a149-4283-ad20-e1fe10870625.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/be4c6dcc-5474-4919-be2e-ea215e33b308.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/3b029ea1-c467-48c3-a9d6-46eddf78f234.jpg?tr=w-600,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/92a04fe7-e06d-458c-ba1e-031319a1679a.jpg?tr=w-600,cm-pad_resize'}]

const SwatchSwiperComponent = () => {
    return(
        <>
             <Grid container sx={{ justifyContent: 'center', backgroundColor:'white', paddingTop:{xs:'20px', sm:'30px'} }}>
                <Grid sx={{ width: { xs:'99%', sm:'90%',xl: '90%' } }}>
                    <Grid sx={{ marginLeft:{xs:'10px',sm:'30px'} , borderBottom: '1px solid lightgray', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Swatch, Watch & Shop</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>see love and make these beauties yours!</Typography>
                    </Grid>
                    <Grid >
                    <Swiper 
                    spaceBetween={20}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="swatchSwiper"
                    breakpoints={{
                        1440: {
                          slidesPerView: 3,
                        },
                        1024: {
                          slidesPerView: 2,
                        },
                        764: {
                          slidesPerView: 2, 
                        },
                        576: {
                          slidesPerView: 1,
           
           
                        },
                        0: {
                          slidesPerView: 1,
           
           
                        },
                      }}
                  
                >
                    {cardData.map((item)=> (
                        <>
                           <SwiperSlide> 
                        <Grid sx={{marginLeft:'10px'}}>
                            <Typography sx={{position:'absolute', marginTop:{xs:'240px',sm:'70%',md:'53%',lg:'55%' ,xl:'52%'},  fontWeight:600, fontSize:'18px' }}>Find Your Shadow</Typography>
                            <Typography  sx={{position:'absolute', marginTop:{xs:'260px',sm:'76%',md:'58%',lg:'60%',xl:'58%'},  fontSize:'12px', color:'gray'  }}>Top Foundation Swatches For You</Typography>
                        </Grid>
                        <img src={item.img}  alt="1" />
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

export default SwatchSwiperComponent;
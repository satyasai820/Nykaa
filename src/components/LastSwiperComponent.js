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

const cardData = [{ img: 'https://images-static.nykaa.com/uploads/07133143-09a4-4c1b-a216-0313d9905d35.jpg?tr=w-240,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/d6dd47fb-39b2-4a35-b356-d96bdf2cd73f.jpg?tr=w-240,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/cb1a84a4-2db7-4ba5-9bd0-a8ceb672d38b.jpg?tr=w-240,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/00232027-9779-4b57-9717-d63934c3efad.jpg?tr=w-240,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/0b24641c-632a-46ef-8612-def33d4ccb75.jpg?tr=w-240,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/89d66552-7175-421f-87bc-0d749de045c1.jpg?tr=w-240,cm-pad_resize' },]

const LastSwiperComponent = () => {
    return (
        <>
            <Grid container sx={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '80%', sm: '90%' } }}>
                    <Grid >
                        <Swiper
                            spaceBetween={20}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="lastSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 5,
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

                                        <img src={item.img} alt="1" />
                                    </SwiperSlide>
                                </>
                            ))}
                        </Swiper>
                    </Grid>

                </Grid>
                <Grid sx={{ width: { xs: '95%', sm: '90%' } }}>
                    <Grid sx={{ textAlign: 'center' }}>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src="https://images-static.nykaa.com/uploads/dbd4413d-a84d-4823-992c-2b8c5df73cde.jpg?tr=w-1200,cm-pad_resize" alt="" />
                    </Grid>
                    <Grid>
                    <Grid sx={{ textAlign: 'center', marginTop:{xs:'10px',sm:'30px'} }}>
                        <img style={{ maxWidth: '100%', height: 'auto' }} src="https://images-static.nykaa.com/uploads/49e43a50-37b5-405a-be2d-ab90055115ec.jpg?tr=w-1200,cm-pad_resize" alt="" />
                    </Grid>
                    </Grid>
                </Grid>
                
            </Grid>
            <Grid sx={{paddingLeft:{sm:'50px'}, width:{sm:'100%', backgroundColor:'white' }}}>
                    <Typography sx={{textAlign:{xs:'center',sm:'start'}, fontWeight:'550', fontSize:{xs:'13px',sm:'16px'}}} >Nykaa - The Online Beauty Store</Typography>
                </Grid>
        </>
    );
}

export default LastSwiperComponent;
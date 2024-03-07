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

const MakeupSecondSwiperComponent = () => {

    const cardData = [{ img: 'https://images-static.nykaa.com/uploads/3b94cf59-f6b0-4b5b-872f-56d67cc2b313.jpg?tr=w-150,cm-pad_resize', p: 'LipStick' }, { img: 'https://images-static.nykaa.com/uploads/38718992-579c-4254-a5a4-349c9b30ce05.jpg?tr=w-150,cm-pad_resize', p: 'Foundation' }, { img: 'https://images-static.nykaa.com/uploads/28912955-93b5-4824-96c3-fe60fa35cad9.jpg?tr=w-150,cm-pad_resize', p: 'Bestseller' }, { img: 'https://images-static.nykaa.com/uploads/c6300193-9937-41db-8aad-c3cca2405da9.jpg?tr=w-150,cm-pad_resize', p: 'Eye Shadow' }, { img: 'https://images-static.nykaa.com/uploads/be9559d4-ca2a-4d93-9cb6-0d23b65f4fac.jpg?tr=w-150,cm-pad_resize', p: 'Concealer' }, { img: 'https://images-static.nykaa.com/uploads/2dcd18f4-9273-4f39-a721-090cc2f1e620.jpg?tr=w-150,cm-pad_resize', p: 'Eyeliner & Kajals' }, { img: 'https://images-static.nykaa.com/uploads/a9a6bc9f-3738-44ce-96c1-03ab4de67ef4.jpg?tr=w-150,cm-pad_resize', p: 'Compact' }, { img: 'https://images-static.nykaa.com/uploads/40f6e904-c255-4652-9d48-48b7565254f1.jpg?tr=w-150,cm-pad_resize', p: 'Face Primer' }, { img: 'https://images-static.nykaa.com/uploads/c80d7b15-70fd-4a16-9a68-dff76c137b56.jpg?tr=w-150,cm-pad_resize', p: 'Blush' }, { img: 'https://images-static.nykaa.com/uploads/47ef1e65-ba7b-4303-8155-241081374f85.jpg?tr=w-150,cm-pad_resize', p: 'Nail Polish' }]

    return (
        <>
            <Grid container sx={{ backgroundColor: 'white', justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', xl: '85%' }, }}>



                    <Grid>
                        <Swiper
                            spaceBetween={10}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            className="makeupSecondSwiper"
                            breakpoints={{
                                1440: {
                                    slidesPerView: 7.5,
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
                            {cardData.map((item) => (
                                <>
                                    <SwiperSlide >
                                        <Grid sx={{textAlign:'start'}}>
                                            
                                        <Typography  variant="p" sx={{position:'absolute', marginLeft:{xs:'10vmin',sm:'60px'} ,marginTop:{xs:'135px',  }}} >{item.p}</Typography>
                                        </Grid>
                                        <img src={item.img} alt="1" />
                                        {/* <Card sx={{ maxWidth: 245 , boxShadow:'none',textAlign:'start', border:'1px solid red' }}>
                                            <CardActionArea >
                                                <CardMedia
                                                    component="img"
                                                    height="140"
                                                    image={item.img}
                                                    alt="green iguana"
                                                />
                                                <CardContent>
                                                <Typography  variant="p" sx={{position:'absolute', marginLeft:'40px'   }} >{item.p}</Typography>

                                                </CardContent>
                                            </CardActionArea>
                                        </Card> */}
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

export default MakeupSecondSwiperComponent;
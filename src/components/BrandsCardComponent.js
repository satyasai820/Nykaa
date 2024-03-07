import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const BrandsCardComponent = () => {
    const cardData = [{ img: 'https://images-static.nykaa.com/creatives/67f3f90c-6d99-46b5-8cda-3056c3aea150/default.jpg?tr=w-300,cm-pad_resize', p1: 'Upto 20% off', p2: 'On kay Beauty Bestsellers' }, { img: 'https://images-static.nykaa.com/creatives/63413f7e-f7c4-4cd4-96ca-cc087ac401d5/default.jpg?tr=w-300,cm-pad_resize', p1: 'Upto 25% off', p2: 'Best on Parisian Makeup!' }, { img: 'https://images-static.nykaa.com/creatives/4ff19002-7a5b-430e-81c7-792bc2481414/default.jpg?tr=w-300,cm-pad_resize', p1: 'New Launch alert', p2: 'Luxurious Ayurvedic Makeup' }, { img: 'https://images-static.nykaa.com/creatives/ffabb33c-6e8f-484f-8ca2-5dc0c1f948d8/default.jpg?tr=w-300,cm-pad_resize', p1: 'Upto 30% off', p2: 'On Makeup BestSeller' }, { img: 'https://images-static.nykaa.com/creatives/ae08637d-9b09-41e2-84b4-62ecd652aa8f/default.jpg?tr=w-300,cm-pad_resize', p1: 'Buy 1 get 5% off', p2: 'Buy 2 get 10% off' }, { img: 'https://images-static.nykaa.com/creatives/87a23200-2872-4ac7-8fe2-13850a60144a/default.png?tr=w-300,cm-pad_resize', p1: 'Flat 10% off', p2: 'BestSeller Nude Lipstick:High tea' }, { img: 'https://images-static.nykaa.com/creatives/1048262a-201f-4cb2-bcea-bac3123f7e69/default.jpg?tr=w-300,cm-pad_resize', p1: 'Upto 40% off', p2: 'on Entare Range' }, { img: 'https://images-static.nykaa.com/creatives/bb5e290d-9c54-4e54-9b75-1f21d8d65c91/default.jpg?tr=w-300,cm-pad_resize', p1: 'Upto 25% Off', p2: 'Great Deals on Combo' },]
    return (
        <>
            <Grid container sx={{ backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', xl: '85%' } }}>
                    <Grid sx={{ marginLeft: '30px', paddingBottom: '10px' }}>
                        <Typography variant="h1"> Brands You will Love</Typography>
                        <Typography variant="p" sx={{ fontSize: '15px' }}>Your Makeup Faves</Typography>
                    </Grid>
                    <Grid container rowSpacing={2}  >


                        {cardData.map((item) => (
                            <>

                                <Grid item xs={12} sm={6} md={4} lg={3} sx={{ display: 'flex', justifyContent:'center'  }} >
                                <Card sx={{ maxWidth: 310, }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={item.img}
                                            alt="green iguana"
                                        />
                                        <Typography sx={{ fontSize: '15px', fontWeight: 'bold', marginTop: '10px', marginLeft: '10px' }}>{item.p1}</Typography>
                                        <Typography sx={{ fontSize: '13px', marginLeft: '10px', color: 'gray', marginBottom: '10px' }}>{item.p2}</Typography>
                                    </CardActionArea>
                                </Card>

                            </Grid >

                                </>

                            ))}

                </Grid>
            </Grid>
        </Grid >
        </>
    );
}

export default BrandsCardComponent;
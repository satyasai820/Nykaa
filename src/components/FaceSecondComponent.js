import { Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const FaceSecondComponent = () => {

    const namesData = [{ name: 'Brand' }, { name: 'Price' }, { name: 'Skin Type' }, { name: 'Concern' }, { name: 'Finish' }, { name: 'Formulation' }, { name: 'Color' }, { name: 'Discount' }, { name: 'AvgCustomer Rating' }, { name: 'Perference' }, { name: 'Country Of Origin' }, { name: 'Gender' }, { name: 'Benefits' }, { name: 'Ingredient' }, { name: 'Coverage' }, { name: 'Pack Size' }, { name: 'Conscious' },]
    return (
        <>
            <Grid container sx={{ justifyContent: 'center', border: '2px solid red', marginTop: '20px' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', lg: '65%' }, border: '2px solid black', }}>
                    <Grid sx={{ margin: '10px 0px' }}>
                        <Typography sx={{ fontSize: { xs: '14px', sm: '19px' }, fontWeight: 550, textAlign: 'center' }}>All Products</Typography>
                    </Grid>
                    <Grid container sx={{ border: '2px solid green' }}>
                        <Grid sx={{ width: { xs: '25%', border: '2px solid black', position: 'sticky', overflowY: 'auto', top: 0, } }}>
                            <Grid>
                                <Typography fontFamily='Inter, Roboto, Arial, sans-serif' sx={{ padding: '9px 3px', fontSize: '13px', fontWeight: 550, color: '#000000', display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', marginBottom: '10px', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' }} >Sort By : Popularity <Icon style={{ marginLeft: 'auto', color: '#E80071' }} icon="mingcute:down-line" width="20" height="20" /></Typography>

                            </Grid>
                            <Grid>
                                {namesData.map((item) => (
                                    <>
                                        <Typography fontFamily='Inter, Roboto, Arial, sans-serif' sx={{ padding: '9px 3px', fontSize: { xs: '9px', sm: '13px' }, fontWeight: 550, color: '#000000', display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', borderBottom: '1px solid lightgrey' }} >{item.name} <Icon style={{ marginLeft: 'auto', }} icon="mingcute:down-line" width="20" height="20" /></Typography>
                                    </>
                                ))}

                            </Grid>
                        </Grid>
                        <Grid  sx={{ width: { xs: '75%', border: '2px solid orange' } }}>
                            <Grid sx={{width:{sm:'95%'},margin:'auto'}}>
                                <Card sx={{ maxWidth: 205 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="auto"
                                            image="https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg"
                                            alt="green iguana"
                                            
                                        />
                                        <CardContent>
                                            <Typography sx={{fontSize:'11px', textAlign:'center', color:'#000000', fontWeight:500}} >Lakme Absolute Primer</Typography>
                                            <Typography sx={{textAlign:'center', marginTop:'15px', fontSize:'10px'}}><span style={{}}>MRP.</span> <span style={{ textDecoration: 'line-through'}}>₹850</span> <span style={{ borderRight:'1px solid lightgrey', padding:'0px 4px',fontWeight:'bold' }}> ₹723</span> <span style={{color:'green',fontSize:'12px'}}>15% Off</span> </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default FaceSecondComponent;
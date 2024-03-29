
import { Button, Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import DetailsThirdSubOneSwiperComponent from "./DetailsThirdSubOneSwiperComponent";
import DetailsThirdSubTwoComponent from "./DetailsThirdSubTwoComponent";

const DetailsThirdComponent = () => {


    const cardsData = JSON.parse(localStorage.getItem('productImages'))
    const firstImg = cardsData[0].img


    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: '30px' }}>
                <Grid sx={{ width:{xs:'95%', sm:'90%', lg:'70%'},  display: 'flex', justifyContent:'center' }}>
                    <Grid sx={{ width:{xs:'95%', sm:'70%',lg:'70%'}, }}>
                        <Typography sx={{ fontSize: '15px', fontWeight: 550 }}>Product Description</Typography>
                        <Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF', marginTop: '15px', maxHeight: isExpanded ? 'none' : '200px', overflow: 'hidden', }}>
                            <Grid sx={{ width: '85%', marginTop: '30px' }}>
                                <img style={{ maxWidth: '100%', height: 'auto' }} src="https://adn-static1.nykaa.com/media/wysiwyg/23657_01.jpg" alt="" />
                                <img style={{ maxWidth: '100%', height: 'auto' }} src="https://adn-static1.nykaa.com/media/wysiwyg/23657_02.jpg" alt="" />
                                <img style={{ maxWidth: '100%', height: 'auto' }} src="https://adn-static1.nykaa.com/media/wysiwyg/23657_03.jpg" alt="" />
                                <img style={{ maxWidth: '100%', height: 'auto' }} src="https://adn-static1.nykaa.com/media/wysiwyg/23657_04.jpg" alt="" />
                                <img style={{ maxWidth: '100%', height: 'auto' }} src="https://adn-static1.nykaa.com/media/wysiwyg/23657_05.jpg" alt="" />
                                <Typography sx={{ fontSize:{xs:'10px', sm:'12px'}, color: '#001325B8' }}>Explore the entire range of <span style={{ color: '#E80071', textDecoration: 'underline', }}>Face Primer</span>  available on Nykaa. Shop more <span style={{ color: '#E80071', textDecoration: 'underline', }}>Lakme</span>  products here.You can browse through the complete world of <span style={{ color: '#E80071', textDecoration: 'underline', }}>Lakme Face Primer
                                </span>  .</Typography>
                                <Typography sx={{ fontSize:{xs:'10px', sm:'12px'}, fontWeight: 550, color: '#003125B8' }}>Expiry Date: 15 September 2025</Typography>
                                <Typography sx={{ fontSize:{xs:'10px', sm:'12px'}, fontWeight: 550, color: '#003125B8' }}>Country of Origin: <span style={{ fontWeight: '300' }}> India</span> </Typography>

                            </Grid>
                        </Grid>
                        <Grid container sx={{ justifyContent: 'center', paddingTop: '20px', background: '#FFFFFF',boxShadow:'0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                            <Grid sx={{ width: '95%', borderTop: '1px solid lightgrey', }}>
                                <Grid sx={{ margin: '10px 0px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 550, color: '#E80071', cursor: 'pointer' }} onClick={handleToggleExpand}> {isExpanded ? 'Read Less' : 'Read More'} </Typography>
                                    <Icon icon= {isExpanded ?  "uiw:up" : "uiw:down"  } width="15" height="15" style={{ color: '#E80071' }} />

                                </Grid>
                            </Grid>
                        </Grid>
                        <DetailsThirdSubOneSwiperComponent />
                        <DetailsThirdSubTwoComponent />
                    </Grid>
                    <Grid sx={{ width:{sm:'28%',lg:'30%'},display:{xs:'none', sm:'block'}, paddingLeft:{sm:'10px', md:'0px'}, paddingTop:'30px' }}>
                        <Grid sx={{position: 'sticky', top:110,}}>
                            <Card sx={{ maxWidth: 205, margin: 'auto', boxShadow: 'none' }} >
                                <CardActionArea  >
                                    <CardMedia
                                        component="img"
                                        height="auto"
                                        image={firstImg}
                                        alt="green iguana"

                                    />
                                    <CardContent>
                                        <Typography sx={{ fontSize: '11px', textAlign: 'center', color: '#000000', fontWeight: 500 }} >Lakme Absolute Primer</Typography>
                                        <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '13px', fontWeight: 550, color: '#001325A3' }}><span style={{}}>MRP.</span> <span style={{ textDecoration: 'line-through', fontWeight: 300, }}>₹850</span> <span style={{ fontSize: '15px', color: '#000000', padding: '0px 4px', fontWeight: 'bold' }}> ₹723</span> </Typography>
                                        <Typography sx={{ fontSize: '13px', color: 'green', fontWeight: 550, textAlign: 'center' }}>45% Off</Typography>
                                        <Typography sx={{ marginTop: '50px', backgroundColor: '#E80071', color: '#FFFFFF', fontSize: '12px', fontWeight: 550, textAlign: 'center', padding: '10px 0px' }}>
                                            Add To Buy
                                        </Typography>

                                    </CardContent>
                                </CardActionArea>
                            </Card>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default DetailsThirdComponent;
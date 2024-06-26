import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import React, { useState } from "react";
import { Icon } from "@iconify/react";
import ReactImageMagnify from 'react-image-magnify';

const DetailsSecondComponent = () => {

    const cardsData = JSON.parse(localStorage.getItem('productImages'))
    console.log("this is product details imgs ----->", cardsData)
    const firstImg = cardsData[0].img
    console.log("first one ", firstImg)

    const [selectedImage, setSelectedImage] = useState(firstImg);

    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('xs'));
    const isSmScreen = useMediaQuery(theme.breakpoints.down('md'));



    const handleSetImg = (img) => {
        console.log('this is the img that user clicked---->', img)
        setSelectedImage(img);
    }



    const smallImages = [{ img: 'https://images-static.nykaa.com/media/icons/8901030561924_blurperfectprimer.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/lakme00000766_glowprimernew.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/8901030725692_undercovergelprimer.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/8904245715984_02ylight.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/8904245715991_03plight.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/8904245716011_05pmedium.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/8904245716028_06ymedium.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/8904245716080_12ytan.jpg?tr=w-50,h-50' }]


    const smallImages2 = [{ img: 'https://images-static.nykaa.com/media/icons/773602656790_nc45.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602656806_nc47.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602656929_nw40.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602656936_nw43.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602656943_nw45.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602656998_c3.5.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602657025_c4.5.jpg?tr=w-50,h-50' }, { img: 'https://images-static.nykaa.com/media/icons/773602656769_nc40.jpg?tr=w-50,h-50' }]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', md: '85%', lg: '70%' }, marginTop: '30px', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
                    <Grid container sx={{ width: '100%', display: 'flex', backgroundColor: '#FFFFFF', paddingTop: '20px' }}>
                        <Grid sx={{ width: { xs: '100%', md: '35%' }, display: 'flex' }}>


                            <Grid sx={{ width: '15%', margin: { xs: '2vmin 0px 0px 10px', sm: '40px 0px 0px 10px' }, }}>
                                {cardsData.map((item) => (
                                    <>
                                        <Grid sx={{ marginBottom: '10px', }} onClick={() => handleSetImg(item.img)} >
                                            <img src={item.img} style={{ width: '40px', height: 'auto', border: '1px solid lightgrey' }} />

                                        </Grid>
                                    </>
                                ))}
                            </Grid>

                            <Grid sx={{ width: '85%',  }}>
                                {/* <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: selectedImage,
                                    },
                                    
                                    // largeImage: {
                                    //     src: selectedImage,
                                    //     width: 1900,
                                    //     height: 1800,
                                        
                                    // },
                                    // enlargedImageContainerDimensions: {
                                    //     width: '220%', 
                                    //     height: '165%',
                                      
                                    // },
                                    // isHintEnabled: true,
                                    // shouldHideHintAfterFirstActivation: false

                                    largeImage: (isXsScreen || isSmScreen) ? undefined : {
                                        src: selectedImage,
                                        width: 1900,
                                        height: 1800,
                                    },
                                    enlargedImageContainerDimensions: {
                                        width: '220%',
                                        height: '165%',
                                    },
                                    isHintEnabled: true,
                                    shouldHideHintAfterFirstActivation: false,
                                    pressDuration: 0, // set a very high value or disable it
                                    hoverDelayInMs: 0, // to activate zoom instantly on hover
                                }} /> */}
                                <Grid sx={{display:{xs:'none', md:'block'}}}>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: selectedImage,
                                        },
                                        largeImage: {
                                            src: selectedImage,
                                            width: 1900,
                                            height: 1800,
                                        },
                                        enlargedImageContainerDimensions: {
                                            width: '220%',
                                            height: '165%',
                                        },
                                        isHintEnabled: true,
                                        shouldHideHintAfterFirstActivation: false,
                                        pressDuration: 0, // set a very high value or disable it
                                        hoverDelayInMs: 0, // to activate zoom instantly on hover
                                    }} />
                                </Grid>
                                 <Grid sx={{display:{xs:'block', md:'none'}, paddingRight:{xs:'10px', sm:'20px'}}}>
                                    
                                    <img style={{maxWidth:'100%', height:'auto'}} src={selectedImage} />
                                    </Grid>
                               
                            </Grid>
                           

                        </Grid>
                        <Grid container sx={{ width: { xs: '100%', md: '65%' }, borderLeft: '1px solid lightgrey' }}>
                            <Grid sx={{ paddingLeft: { xs: '10px', sm: '15px' }, }}>
                                <Typography sx={{ fontSize: '16px', color: '#001325', fontWeight: 500 }}>Maybelline New York Fit Me Matte+Poreless Liquid Foundation 16H Oil Control - 128 Warm Nude</Typography>
                                <Typography sx={{ fontSize: '13px', marginBottom: '10px' }}>(30ml)</Typography>
                                <Grid sx={{ display: 'flex', alignItems: 'center' }}>
                                    <Icon icon="entypo:star" width="15" height="15" />
                                    <Icon icon="entypo:star" width="15" height="15" />
                                    <Icon icon="entypo:star" width="15" height="15" />
                                    <Icon icon="entypo:star" width="15" height="15" />
                                    <Icon icon="entypo:star-outlined" width="15" height="15" />
                                    <Typography sx={{ fontSize: '12px', marginLeft: '5px', paddingRight: '5px', borderRight: '1px solid lightgrey' }}>4.4/5</Typography>
                                    <Typography sx={{ fontSize: '12px', paddingLeft: '5px' }}>99124 ratings & 11911 reviews</Typography>
                                </Grid>
                                <Grid sx={{ marginTop: '20px' }}>
                                    <Typography sx={{ fontSize: '13px', color: '#001325A3' }}>MRP: <span style={{ textDecoration: 'line-through' }}>₹649</span> <span style={{ fontSize: '16px', color: '#000000', fontWeight: 550, paddingRight: '5px', borderRight: '1px solid lightgrey' }}>₹409</span>  <span style={{ color: 'green', fontWeight: 550, fontSize: '15px' }}>37% Off</span></Typography>
                                    <Typography sx={{ fontSize: '13px', color: '#001325A3' }}>inclusive of all taxes</Typography>
                                </Grid>
                            </Grid>

                            <Grid container sx={{ marginTop: '60px', marginLeft: { xs: '5px', sm: '20px' }, justifyContent: { xs: 'center', md: 'start' } }}>
                                <Grid sx={{ display: 'flex' }}>
                                    <Typography sx={{ fontSize: '10px', fontWeight: 550, color: 'gray', marginRight: { xs: '30vmin', sm: '200px', lg: '300px' } }}>Blur Perfect Primer</Typography>
                                    <Typography sx={{ fontSize: '11px', paddingBottom: '3px', borderBottom: '1px solid #E80071' }}>All Shades (3)</Typography>
                                </Grid>
                                <Grid container sx={{ display: { xs: 'block', sm: 'flex' }, marginTop: '10px', justifyContent: { xs: 'center', lg: 'start' } }}>
                                    <Grid sx={{ marginRight: '30px', textAlign: 'center' }}>
                                        <img style={{ width: '60px', height: 'auto' }} src="https://images-static.nykaa.com/media/icons/8901030561924_blurperfectprimer.jpg" alt="" />
                                    </Grid>
                                    <Grid sx={{ width: { xs: '95%', sm: '50%', md: '65%', lg: '55%' }, }}>
                                        <Grid container sx={{ display: 'block', justifyContent: 'center', border: { xs: 'none', sm: '1px solid lightgrey' } }}>
                                            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                                {smallImages.map((item) => (
                                                    <>
                                                        <Grid sx={{ padding: { xl: '5px 10px ', sm: '5px 8px', xs: '5px 1vmin' } }}>
                                                            <img style={{ width: '20px', height: 'auto', padding: '1px', border: '1px solid white', boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)' }} src={item.img} alt="" />
                                                        </Grid>
                                                    </>
                                                ))}
                                            </Grid>
                                            <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                                                {smallImages2.map((item) => (
                                                    <>
                                                        <Grid sx={{ padding: { xl: '5px 10px ', sm: '5px 8px', xs: '5px 1vmin' } }}>
                                                            <img style={{ width: '20px', height: 'auto', padding: '1px', border: '1px solid white', boxShadow: '0 0 3px rgba(0, 0, 0, 0.5)' }} src={item.img} alt="" />
                                                        </Grid>
                                                    </>
                                                ))}
                                            </Grid>

                                        </Grid>
                                    </Grid>
                                </Grid>

                                <Grid container sx={{ marginTop: { xs: '20px', sm: '30px' } }}>
                                    <Grid container sx={{ width: '35%', justifyContent: 'center', paddingTop: '50px' }}>

                                        <Typography sx={{ width: { xs: '100%', sm: '80%' }, border: '1px solid red', color: '#FFFFFF', backgroundColor: '#E80071', fontSize: { xs: '11px', sm: '13px' }, fontWeight: 550, textAlign: 'center', padding: '8px 0px', marginBottom: '30px' }}>Add to Bag</Typography>
                                    </Grid>
                                    <Grid sx={{ width: '60%', borderLeft: '1px solid lightgrey', marginLeft: '5px' }}>
                                        <Grid sx={{ display: 'flex', paddingLeft: { xs: '10px', sm: '30px' }, marginTop: '30px' }}>
                                            <Icon icon="system-uicons:location" width="15" height="15" />
                                            <Typography sx={{ fontSize: '12px', color: 'grey', fontWeight: 550 }}>Delivery Options</Typography>
                                        </Grid>
                                        <Grid sx={{ paddingLeft: { xs: '10px', sm: '10px' }, marginTop: '10px', display: 'flex', border: '1px solid lightgrey', width: { xs: '100%', sm: '50%', lg: '55%', xl: '50%' }, marginLeft: { xs: '5px', sm: '35px' } }}>

                                            <Typography sx={{ fontSize: { xs: '10px', sm: '12px' }, padding: { xs: '5px 5px', }, color: 'grey' }}>Enter pincode</Typography>
                                            <Typography sx={{ color: '#E80071', fontWeight: 'bold', fontSize: { xs: '10px', sm: '12px' }, padding: '5px 5px', marginLeft: 'auto' }}>Check</Typography>
                                        </Grid>
                                    </Grid>

                                </Grid>

                            </Grid>
                            <Grid container sx={{ borderTop: '1px solid lightgrey', backgroundColor: '#6F798114', display: 'flex', justifyContent: 'center', padding: '9px 0px', marginTop: '10px' }}>
                                <Grid sx={{ width: { xs: '100%', sm: '30%' }, alignItems: 'center', display: 'flex', marginTop: { xs: '5px', sm: '0px' }, justifyContent: 'center' }}>
                                    <Icon icon="carbon:ibm-data-product-exchange" width="20" height="20" />
                                    <Typography sx={{ fontSize: '11px', paddingLeft: '5px' }}>100% Genuine Products</Typography>
                                </Grid>
                                <Grid sx={{ width: { xs: '100%', sm: '30%' }, alignItems: 'center', display: 'flex', marginTop: { xs: '10px', sm: '0px' }, justifyContent: 'center' }}>
                                    <Icon icon="icon-park-outline:return" width="10" height="10" style={{ color: 'white', border: '1px solid black', padding: '3px', borderRadius: '10px', backgroundColor: 'grey' }} />
                                    <Typography sx={{ fontSize: '11px', paddingLeft: '5px' }}>Easy Return Policy</Typography>

                                </Grid>
                                <Grid sx={{ width: { xs: '100%', sm: '30%' }, alignItems: 'center', display: 'flex', margin: { xs: '10px 0px', sm: '0px' }, justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: '11px', }}>Sold by : NYKAA E RETA...</Typography>

                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    );
}

export default DetailsSecondComponent;
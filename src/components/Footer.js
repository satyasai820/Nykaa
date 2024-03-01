import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Icon } from "@iconify/react";

const Footer = () => {

    const NykaaData = [{ name: 'who are we?' }, { name: 'Careers' }, { name: 'Authenticity' }, { name: 'Press' }, { name: 'Testimonials' }, { name: 'Nykaa CSR' }, { name: 'Responsible Discclosure' }, { name: 'Inverstor Relations' }, { name: 'Link to Smart ODR' }]

    const helpData = [{ name: 'Contact Us' }, { name: 'Frequently asked quations' }, { name: 'Store Locator' }, { name: 'Cancellation & Return' }, { name: 'Shipping & Delivery' }, { name: 'Sell on Nykaa' },]

    const inspairData = [{ name: 'Beauty Book' }, { name: 'Nykaa TV' }, { name: 'Nykaa Network' }, { name: 'Buying Guides' }]

    const quickData = [{ name: 'Offer Zone' }, { name: 'New Launches' }, { name: 'Nykaa Man' }, { name: 'Nykaa Fashions' }, { name: 'Nykaa Pro' }, { name: 'Sitemap' },]

    const TopData = [{ name: 'Makeup' }, { name: 'Skin' }, { name: 'Hair' }, { name: 'Bath & Body' }, { name: 'Appliances' }, { name: 'Mom and Baby' }, { name: 'Health & Wellness' }, { name: 'Fragrance' }, { name: 'Natural' }, { name: 'Luxe' },]
    return (
        <>
            <Grid container sx={{ width: '100%' }}>
                <Grid sx={{ backgroundColor: '#3A4047', justifyContent: 'center', width: '100%', marginTop: '30px', paddingBottom: '40px' }}>
                    <Grid sx={{ width: { xs: '100%', md: '80%', lg: '60%' }, display: { sm: 'flex' }, margin: 'auto', marginTop: '30px' }}>
                        <Grid item xs={12} sm={4} sx={{}} >
                            <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', sm: 'start' }, }}>
                                <Icon icon="fluent:mail-24-filled" width="20" height="20" style={{ color: '#FFFFFF' }} />
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, marginLeft: '10px', }}>Get special discount on your inbox</Typography>
                            </Grid>
                            <Grid sx={{ textAlign: { xs: 'center', md: 'start' } }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, paddingRight: '100px', paddingBottom: '5px', borderBottom: '1px solid white', marginRight: '10px' }}>Your Email</Typography>
                                <Button sx={{ border: '1px solid #FFFFFF', fontSize: '9px', color: '#FFFFFF', fontWeight: 'bold' }}>send</Button>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ marginTop: { xs: '40px', sm: '0px' } }} >
                            <Grid sx={{ display: 'flex', alignItems: 'center', paddingLeft: '10px', justifyContent: { xs: 'center', sm: 'start' }, }}>
                                <Icon icon="entypo:mobile" width="20" height="20" style={{ color: '#FFFFFF' }} />
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, marginLeft: '10px', textAlign: 'center' }}>EXPERIENCE THE NYKAA MOBILE</Typography>
                            </Grid>
                            <Grid sx={{ justifyContent: 'center', textAlign: 'center', display: 'block' }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontWeight: 550, marginLeft: '10px', }}>APP</Typography>

                            </Grid>
                            <Grid sx={{ textAlign: 'center', }}>
                                <img src="https://en.logodownload.org/wp-content/uploads/2019/06/get-it-on-google-play-badge.png" alt="" width='110px' height='30px' />

                            </Grid>
                            <Grid sx={{ textAlign: 'center', }}>
                                <img src="https://tse1.mm.bing.net/th?id=OIP.ZgivgsBKdCd-Qb_hazm-8wHaCM&pid=Api&P=0&h=180" alt="" width='95px' height='30px' />

                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={4} sx={{ marginTop: { xs: '40px', sm: '0px' } }}>
                            <Grid sx={{ display: 'flex', alignItems: 'center', paddingLeft: { xs: '0px', sm: '30px' }, justifyContent: { xs: 'center', sm: 'start' }, }}>
                                <Icon icon="ion:call" width="20" height="20" style={{ color: '#FFFFFF' }} />
                                <Typography variant="p" sx={{ color: '#FFFFFF', marginLeft: '10px', }}>FOR ANY HELP, YOU MAY CALL US AT
                                    1800-267-4444</Typography>
                            </Grid>
                            <Grid sx={{ alignItems: 'center', paddingLeft: { xs: '0px', sm: '40px' }, marginTop: '10px', textAlign: { xs: 'center', sm: 'start' } }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontSize: '11px', }}>(Monday to Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
                <Grid sx={{ backgroundColor: '#8C8D94', width: '100%', margin: 'auto' }}>
                    <Grid sx={{ width: { xs: '100%', md: '80%', lg: '60%' }, marginBottom: { xs: '30px' }, display: { sm: 'flex' }, margin: 'auto', marginTop: '30px' }}>
                        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
                            <Grid sx={{}}>
                                <img src="https://www.cointab.net/wp-content/uploads/2022/08/Untitled-design-16-1.png" width='65' height='50' alt="" />

                            </Grid>
                            {NykaaData.map((item) => (
                                <Grid>
                                    <Typography variant="p" sx={{ color: '#FFFFFF', lineHeight: 2, fontSize: { xs: '11px', sm: '10px', '&:hover': { color: '#E80071' } } }}>{item.name}</Typography>
                                </Grid>
                            ))}

                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
                            <Grid sx={{ marginBottom: { xs: '5px', sm: '20px' }, marginTop: { xs: '25px', sm: '0px' } }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '11px' }, fontWeight: 'bold' }}>Help</Typography>
                            </Grid>
                            {helpData.map((item) => (
                                <Grid>
                                    <Typography variant="p" sx={{ color: '#FFFFFF', lineHeight: 2, fontSize: { xs: '11px', sm: '10px', '&:hover': { color: '#E80071' } } }}>{item.name}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
                            <Grid sx={{ marginBottom: { xs: '5px', sm: '20px' }, marginTop: { xs: '25px', sm: '0px' } }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '11px' }, fontWeight: 'bold' }}>Inspire Me</Typography>
                            </Grid>
                            {inspairData.map((item) => (
                                <Grid>
                                    <Typography variant="p" sx={{ color: '#FFFFFF', lineHeight: 2, fontSize: { xs: '11px', sm: '10px', '&:hover': { color: '#E80071' } } }}>{item.name}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
                            <Grid sx={{ marginBottom: { xs: '5px', sm: '20px' }, marginTop: { xs: '25px', sm: '0px' } }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '11px' }, fontWeight: 'bold' }}>Quick Links</Typography>
                            </Grid>
                            {quickData.map((item) => (
                                <Grid>
                                    <Typography variant="p" sx={{ color: '#FFFFFF', lineHeight: 2, fontSize: { xs: '11px', sm: '10px', '&:hover': { color: '#E80071' } } }}>{item.name}</Typography>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'center', sm: 'start' } }}>
                            <Grid sx={{ marginBottom: { xs: '5px', sm: '20px' }, marginTop: { xs: '25px', sm: '0px' } }}>
                                <Typography variant="p" sx={{ color: '#FFFFFF', fontSize: { xs: '14px', sm: '11px' }, fontWeight: 'bold' }}>Top Categories</Typography>
                            </Grid>
                            {TopData.map((item) => (
                                <Grid>
                                    <Typography variant="p" sx={{ color: '#FFFFFF', lineHeight: 2, fontSize: { xs: '11px', sm: '10px', '&:hover': { color: '#E80071' } } }}>{item.name}</Typography>
                                </Grid>
                            ))}
                        </Grid>

                    </Grid>

                </Grid>


                {/* 3rd grid */}
                <Grid sx={{  width: '100%' }}>
                    <Grid sx={{ width: { md: '80%', lg: '70%' }, margin: 'auto', display: { sm: 'flex' }, marginTop: { xs: '30px', sm: '50px' }, marginBottom: { xs: '45px' } }}>
                        <Grid item xs={12} md={3} >
                            <Grid sx={{ display: { sm: 'flex' }, textAlign: { xs: 'center', sm: 'start' }, }}>
                                <Icon icon="circum:delivery-truck" width="30" height="30" style={{ color: 'white', backgroundColor: '#E80071', borderRadius: '100px', padding: '5px' }} />
                                <Grid sx={{ display: { md: 'block' } }}>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '10px', fontWeight: '550', marginLeft: '15px', borderBottom: '1px solid lightgray', paddingBottom: '5px' }} >FREE SHIPPING</Typography>
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography variant="p" sx={{ fontSize: '10px', marginLeft: '15px', color: 'grey' }}>On Orders Above </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '10px', marginLeft: '15px', color: 'grey' }}>₹299</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid sx={{ display: { sm: 'flex' }, textAlign: { xs: 'center', sm: 'start' }, marginTop: { xs: '15px', sm: '0px' } }}>
                                <Icon icon="system-uicons:reset-forward" width="30" height="30" style={{ color: 'white', backgroundColor: '#E80071', borderRadius: '100px', padding: '5px' }} />
                                <Grid sx={{ display: { md: 'block' } }}>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '10px', fontWeight: '550', marginLeft: '15px', borderBottom: '1px solid lightgray', paddingBottom: '5px' }} >EASY RETURNS</Typography>
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography variant="p" sx={{ fontSize: '10px', marginLeft: '15px', color: 'grey' }}>15-Day Return Policy </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid sx={{ display: { sm: 'flex' }, textAlign: { xs: 'center', sm: 'start' }, marginTop: { xs: '15px', sm: '0px' } }}>
                                <Icon icon="carbon:badge" width="30" height="30" style={{ color: 'white', backgroundColor: '#E80071', borderRadius: '100px', padding: '5px' }} />
                                <Grid sx={{ display: { md: 'block' } }}>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '12px', fontWeight: '550', marginLeft: '15px', }} >100%</Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '10px', fontWeight: '550', marginLeft: '15px', borderBottom: '1px solid lightgray', paddingBottom: '5px' }} >AUTHENTIC</Typography>
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography variant="p" sx={{ fontSize: '10px', marginLeft: '15px', color: 'grey' }}>  Products Sourced </Typography>
                                    </Grid>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '10px', marginLeft: '15px', color: 'grey' }}>Directly</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid sx={{ display: { sm: 'flex' }, textAlign: { xs: 'center', sm: 'start' }, marginTop: { xs: '15px', sm: '0px' } }}>
                                <Icon icon="ion:pricetags-outline" width="30" height="30" style={{ color: 'white', backgroundColor: '#E80071', borderRadius: '100px', padding: '5px' }} />
                                <Grid sx={{ display: { md: 'block' } }}>
                                    <Grid>
                                        <Typography variant="p" sx={{ fontSize: '10px', fontWeight: '550', marginLeft: '15px', borderBottom: '1px solid lightgray', paddingBottom: '5px', }} >1900+ BRANDS </Typography>
                                    </Grid>
                                    <Grid sx={{ marginTop: '10px' }}>
                                        <Typography variant="p" sx={{ fontSize: '10px', marginLeft: '15px', color: 'grey' }}>1.2 Lakh+ Products </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Grid sx={{ textAlign: { xs: 'center', sm: 'start' }, marginTop: { xs: '15px', sm: '0px' } }} >
                                <Grid sx={{ marginTop: { xs: '10px', sm: '0px' } }}>
                                    <Typography variant="p" sx={{ fontSize: '10px', paddingLeft: { xs: '0px', lg: '25px' } }}>Show us some love ❤ on social</Typography>
                                </Grid>

                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', marginTop: { xs: '10px', sm: '0px' } }}>
                                    <Typography variant="p" sx={{ fontSize: '10px', textAlign: 'center' }}>Media</Typography>
                                </Grid>
                                <Grid container sx={{ justifyContent: 'center', alignItems: 'center', marginTop: { xs: '10px', sm: '10px' } }}>
                                    <Icon icon="ri:instagram-fill" width="15" height="15" style={{ color: 'white', backgroundColor: 'black', borderRadius: '100%', padding: '2' }} />
                                    <Icon icon="ic:round-facebook" width="15" height="15" style={{ color: 'white', backgroundColor: 'black', borderRadius: '100%', padding: '2', marginLeft: '10px' }} />
                                    <Icon icon="mdi:youtube" width="15" height="15" style={{ color: 'white', backgroundColor: 'black', borderRadius: '100%', padding: '2', marginLeft: '10px' }} />
                                    <Icon icon="ri:twitter-fill" width="15" height="15" style={{ color: 'white', backgroundColor: 'black', borderRadius: '100%', padding: '2', marginLeft: '10px' }} />
                                    <Icon icon="ri:instagram-fill" width="15" height="15" style={{ color: 'white', backgroundColor: 'black', borderRadius: '100%', padding: '2', marginLeft: '10px' }} />
                                </Grid>


                            </Grid>
                        </Grid>



                    </Grid>
                </Grid>


                {/* 4th Grid */}

                <Grid container sx={{ backgroundColor: '#E80071', width: '100%', justifyContent: 'center' }}>
                    <Grid sx={{ width: { xs: '100%', sm: '50%', lg: '30%' }, marginTop: '15px', textAlign: 'center', marginBottom: '10px' }}>
                        <Grid>
                            <Typography variant="p" sx={{ fontSize: '10px', color: '#FFFFFF', }}>Terms & conditions </Typography>
                            <Typography variant="p" sx={{ fontSize: '10px', color: '#FFFFFF', paddingLeft: { xs: '3vmin', sm: '25px' } }}>Shipping Policy</Typography>
                            <Typography variant="p" sx={{ fontSize: '10px', color: '#FFFFFF', paddingLeft: { xs: '3vmin', sm: '25px' } }}>Cancellation </Typography>
                            <Typography variant="p" sx={{ fontSize: '10px', color: '#FFFFFF', paddingLeft: { xs: '3vmin', sm: '25px' } }}>Privacy Policy</Typography>
                        </Grid>
                        <Grid sx={{ marginTop: '10px' }}>
                            <Typography variant="p" sx={{ fontSize: '10px', color: '#FFFFFF' }}>© 2024 NYKAA E-RETAIL LIMITED All Rights Reserved.</Typography>
                        </Grid>
                    </Grid>

                </Grid>


                {/* 5th Grid */}

                <Grid container sx={{ width:'100%', justifyContent:'center'}}>
                    <Grid sx={{width:{xs:'95%',sm:'95%', md:'90%',lg:'85%' },  marginBottom:{xs:'30px',lg:'50px'}, marginTop:'20px'}}>
                                <Typography sx={{color:'#8C8D94', fontFamily:'Inter, Roboto, Arial, sans-serif', fontSize:'13px', fontWeight:550}}>Popular Links</Typography>
                                <Typography  sx={{color:'#8C8D94', fontFamily:'Inter, Roboto, Arial, sans-serif', fontSize:'12px', fontWeight:50}}>Lipstick,Highlighter,Hair Serum,Concealer,Face Mask,Biotique,Lip Gloss,Perfume For Women,Facial Kit,Bb Cream,Victoria Secret,Love Beauty And Planet Shampoo,Eyeliner,Hair Mask,Face Wash For Oily Skin,Ordinary,Toner,Eyeshadow Palette,Cleanser,Chemist At Play,Mascara,Loreal Professional,Hair Extensions,Olay Cream,Fogg,Lip Tint,Under Eye Cream,Wax Strips,Shower Gel,Sunscreen For Face,Insight Cosmetics,Face Foundation,Hair Removal Machine,Mac Foundation,Choker,Oud Perfume,Makeup Pouch,Olaplex,Body Mist,Wella Shampoo,Huda Beauty Foundation,Night Cream,Facewash,Nyx,Schwarzkopf Shampoo,Blue Heaven,Peel Off Mask,Best Lip Balm,Face Scrub,Cetaphil Face Wash,Mederma Cream,Mens Perfume,Multivitamins Tablet,Himalaya Face Wash,Garnier Face Wash,Hair Color For Women,Cetaphil Moisturizers,Denver Perfume,Ponds Face Wash,Streax Hair Serum,Nivea Body Lotions,Vaseline Body Lotions,Sugar Lipstick,Biotin Tablet,Aqualogica Sunscreen,Salicylic Acid Face Wash,Sensodyne Toothpaste,Fogg Perfume,Womens Perfume,Clean And Clear Face Wash,Neutrogena Sunscreen,Pears Soaps,Hair Color For Men,Dry Cleansers,Face Serum</Typography>
                    </Grid>

                </Grid>

            </Grid>
        </>
    );
}

export default Footer;
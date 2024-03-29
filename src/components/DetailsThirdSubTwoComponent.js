import { Grid, Typography } from "@mui/material";
import React from "react";
import Avatar from '@mui/material/Avatar';
import { Icon } from "@iconify/react";
const DetailsThirdSubTwoComponent = () => {

    const imgurl = [{ img: 'https://images-static.nykaa.com/prod-review/1711291205854_a1ee0720-49a5-4d53-9df1-0051596331a3_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1709794838347_772fdab4-6184-48c3-996f-077e9c85aced_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1709218686727_34ada3bd-ddbd-4d08-84d5-cbe7b750f9a9_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708604997487_c2408ef9-6022-4449-8046-91b739408875_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708531427464_a01a5e14-6e99-48d2-b7e8-496114c1ca8e_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708531394686_b3aa4011-1b43-4a26-bf21-3dc44e23994f_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708232559815_6045fb2a-2487-425b-86ee-a5fa23afd687_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1707826173266_2ce254f5-c243-4bb0-ad3d-185c6f437abb_1.jpg?tr=w-145,h-145,cm-pad_resize' }]

    const reviewData = [{ avatar: 'P', name: 'Puja Khakha', data: '17/03/2023', m1: '"Nice"', m2: 'Nice', img1: 'https://images-static.nykaa.com/prod-review/1679031643804_bf870a84-504f-408b-bfa7-1613c1b579a4_1.jpg?tr=w-150,h-150,pr-true', img2: 'https://images-static.nykaa.com/prod-review/1679031761076_d3aca2dd-5045-4c26-9a14-bb61da527e10_1.jpg?tr=w-150,h-150,pr-true', img3: 'https://images-static.nykaa.com/prod-review/1679031818668_f693f9b4-84e3-4fc4-96d9-5c84f14c8329_1.jpg?tr=w-150,h-150,pr-true', h: '12' }, { avatar: 'S', name: 'Sheik Tabassum', data: '12/04/2023', m1: '"???"', m2: 'One of the best primer?', img1: 'https://images-static.nykaa.com/prod-review/1681281013392_ed221384-738f-4012-9118-f1d0ae7cca1c_1.jpg?tr=w-150,h-150,pr-true', img2: 'https://images-static.nykaa.com/prod-review/1681281032525_f720e586-98ac-4b75-84e7-52bff1ed5cb3_1.jpg?tr=w-150,h-150,pr-true', img3: 'https://images-static.nykaa.com/prod-review/1681281080790_cee64dd3-bad5-4042-922d-255daf57e9f0_1.jpg?tr=w-150,h-150,pr-true', h: '3' }, { avatar: 'R', name: 'Rohini Kale', data: '10/02/2023', m1: '"Best primer "', m2: 'Best and affordable primer..in this price range it`s very affordable and feels soft skin after application .. Thanks Nykaa.. for Making wonderful products ?❤️❤️?', img1: 'https://images-static.nykaa.com/prod-review/1676561089608_e8cfbcc0-ef56-4706-9e75-0c21f7a64830_1.jpg?tr=w-150,h-150,pr-true', img2: 'https://images-static.nykaa.com/prod-review/1676561188813_60199aaa-5416-4af6-8b40-f37f243b4c91_1.jpg?tr=w-150,h-150,pr-true', img3: 'https://images-static.nykaa.com/prod-review/1676567559915_8fcf945c-820e-4d19-90a1-da95426cdd52_1.jpg?tr=w-150,h-150,pr-true', h: '13' }, { avatar: 'P', name: 'Preety Chaudhary', data: '29/01/2023', m1: '"Soooo good"', m2: 'It`s smooth like butter ?', img1: 'https://images-static.nykaa.com/prod-review/1674987001386_a2292335-9f41-44ec-bcd5-b3b84bf6e5bc_1.jpg?tr=w-150,h-150,pr-true', img2: 'https://images-static.nykaa.com/prod-review/1678682981135_e28618b7-0934-4722-8692-489fa7b3b24f_1.jpg?tr=w-150,h-150,pr-true', img3: 'https://images-static.nykaa.com/prod-review/1678683024937_6026593c-676a-4284-bf87-da61196aa0ee_1.jpg?tr=w-150,h-150,pr-true', h: '4' },]


    return (
        <>
            <Grid container sx={{ margin: '20px 0px', display: 'block' }} >
                <Grid>
                    <Typography sx={{ fontSize: { xs: '13px', sm: '16px' }, fontWeight: 550 }}>Product Details</Typography>
                </Grid>
                <Grid sx={{ backgroundColor: '#FFFFFF' }}>
                    <Grid>
                        <Typography sx={{ fontSize: '13px', fontWeight: 550, color: '#E80071', padding: '10px 5px', borderBottom: '1px solid lightgrey', }}>Rating & Reviews </Typography>
                    </Grid>
                    <Grid container sx={{ borderBottom: '1px solid lightgrey' }}>
                        <Grid item xs={12} sm={4} sx={{ display: 'flex', margin: { xs: '10px 0px', sm: '30px 0px' }, borderRight: { xs: 'none', sm: '2px solid lightgrey' } }} >
                            <Grid>
                                <Typography sx={{ fontSize: { xs: '17px', md: '25px' }, fontWeight: 550, paddingLeft: { xs: '20px', md: '40px' } }}>4.5/5</Typography>
                            </Grid>
                            <Grid sx={{ paddingLeft: { xs: '4px', md: '20px' }, }}>
                                <Typography sx={{ fontSize: { xs: '10px', md: '12px' }, color: '#003125B8', fontWeight: 550 }}>Overall Rating</Typography>
                                <Typography sx={{ fontSize: { xs: '9px', md: '11px' }, color: '#003125B8', }}>46953 verified ratings</Typography>

                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={8} sx={{ margin: { xs: '10px 0px 20px 0px', sm: '30px 0px' } }}>
                            <Grid sx={{ paddingLeft: '20px', }}>

                                <Typography sx={{ fontSize: '12px', color: '#003125B8' }} >Write a review and win 100 reward points !</Typography>
                                <Typography sx={{ border: '1px solid lightgrey', width: { xs: '40%', sm: '30%', md: '25%' }, padding: '5px', textAlign: 'center', fontSize: '13px', color: '#E80071', fontWeight: 550, }}>Write Review</Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                    <Grid sx={{ borderBottom: '1px solid lightgrey' }}>
                        <Typography sx={{ fontSize: { xs: '11px', sm: '13px' }, fontWeight: 550, padding: { xs: '10px 10px', sm: '10px 20px' } }}> Photos From Customers</Typography>
                        <Grid sx={{ display: 'flex', marginBottom: '10px' }}>
                            {imgurl.map((item) => (
                                <>
                                    <Grid sx={{ paddingLeft: { xs: '5px', sm: '10px', md: '15px' } }}>
                                        <img style={{ maxWidth: '6vmin', height: 'auto', border: '1px solid lightgrey' }} src={item.img} />
                                    </Grid>
                                </>
                            ))}
                        </Grid>


                    </Grid>

                    <Grid container sx={{ marginTop: { xs: '10px', sm: '20px' } }}>
                        <Grid >
                            <Typography sx={{ fontSize: { xs: '12px', sm: '14px' }, fontWeight: 550, paddingLeft: { xs: '10px', sm: '20px' } }}>Most Useful Review</Typography>
                        </Grid>
                        {reviewData.map((item) => (
                            <>
                                <Grid container sx={{ paddingBottom: { xs: '20px', sm: '30px' }, paddingTop: { xs: '10px', sm: '20px' }, borderBottom: '1px solid lightgrey' }}>
                                    <Grid item xs={12} sm={4} sx={{ display: 'flex', }}>
                                        <Grid sx={{ marginLeft: { xs: '5px', sm: '20px' } }}>
                                            <Avatar sx={{ bgcolor: 'pink', border: '2px solid #E80071', color: '#E80071' }}>{item.avatar}</Avatar>

                                        </Grid>
                                        <Grid sx={{ marginLeft: '10px', marginTop: '10px' }}>
                                            <Typography sx={{ fontSize: '11px', color: '#001325B8' }}>{item.name}</Typography>
                                            <Typography sx={{ fontSize: '9px', color: '#00132585' }}>verified Buyers</Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} sm={8} sx={{ paddingLeft: { xs: '10px', sm: '0px' }, marginTop: { xs: '20px', sm: '0px' } }}>
                                        <Grid sx={{ display: 'flex' }}>
                                            <Typography sx={{ color: 'white', backgroundColor: '#068743', fontSize: '11px', padding: '2px 4px', borderRadius: '3px', fontWeight: 550 }}>5 ★ </Typography>
                                            <Typography sx={{ marginLeft: 'auto', paddingRight: '9px', fontSize: '11px', color: '#00132585' }}>{item.data}</Typography>

                                        </Grid>
                                        <Grid sx={{ margin: '10px 0px' }}>
                                            <Typography sx={{ fontSize: '12px' }}>{item.m1}</Typography>
                                            <Typography sx={{ fontSize: '11px', color: '#00132585' }}>{item.m2}</Typography>
                                        </Grid>
                                        <Grid>
                                            <Grid >
                                                <img style={{ maxWidth: '6vmin', height: 'auto', paddingRight: '10px' }} src={item.img1} alt="" />
                                                <img style={{ maxWidth: '6vmin', height: 'auto', paddingRight: '10px' }} src={item.img2} alt="" />
                                                <img style={{ maxWidth: '6vmin', height: 'auto', paddingRight: '10px' }} src={item.img3} alt="" />
                                            </Grid>

                                            <Grid sx={{ display: 'flex', marginTop: '10px' }}>
                                                <Grid>
                                                    <Typography sx={{ border: '1px solid lightgrey', alignItems: 'center', display: 'flex', padding: '5px 10px', textAlign: 'center', fontSize: '13px', color: '#E80071', fontWeight: 550, }}> <Icon icon="bx:like" width="20" height="20" style={{ paddingRight: '5px' }} /> HelpFul</Typography>
                                                </Grid>
                                                <Grid>
                                                    <Typography sx={{ fontSize: '12px', paddingTop: '5px', color: '#00132585', paddingLeft: '10px' }}> <span style={{ fontWeight: 'bold' }}>{item.h}</span> people found this helpful</Typography>
                                                </Grid>
                                            </Grid>


                                        </Grid>

                                    </Grid>

                                </Grid>
                            </>
                        ))}

                        <Grid container sx={{ justifyContent: 'center', background: '#FFFFFF' }}>
                            <Grid >
                                <Grid sx={{ margin: '10px 0px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                                    <Typography sx={{ fontSize: '12px', fontWeight: 550, color: '#E80071', cursor: 'pointer' }} > Read more reviews </Typography>
                                    <Icon icon= "material-symbols-light:keyboard-arrow-right" width="25" height="25" style={{ color: '#E80071' }} />

                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>


                </Grid>



            </Grid>
        </>
    )
}

export default DetailsThirdSubTwoComponent;
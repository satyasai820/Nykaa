import { Grid, Typography } from "@mui/material";
import React from "react";

const DetailsThirdSubTwoComponent = () => {

    const imgurl = [{ img: 'https://images-static.nykaa.com/prod-review/1711291205854_a1ee0720-49a5-4d53-9df1-0051596331a3_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1709794838347_772fdab4-6184-48c3-996f-077e9c85aced_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1709218686727_34ada3bd-ddbd-4d08-84d5-cbe7b750f9a9_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708604997487_c2408ef9-6022-4449-8046-91b739408875_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708531427464_a01a5e14-6e99-48d2-b7e8-496114c1ca8e_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708531394686_b3aa4011-1b43-4a26-bf21-3dc44e23994f_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1708232559815_6045fb2a-2487-425b-86ee-a5fa23afd687_1.jpg?tr=w-145,h-145,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/prod-review/1707826173266_2ce254f5-c243-4bb0-ad3d-185c6f437abb_1.jpg?tr=w-145,h-145,cm-pad_resize' }]

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
                                
                    <Grid container sx={{marginTop:{xs:'10px', sm:'20px'}}}>
                        <Grid sx={{marginBottom:{xs:'10px', sm:'20px'}}}>
                            <Typography sx={{fontSize:{xs:'12px', sm:'14px'}, fontWeight:550, paddingLeft:{xs:'10px', sm:'20px'}}}>Most Useful Review</Typography>
                        </Grid> 
                </Grid>


                </Grid>

                

            </Grid>
        </>
    )
}

export default DetailsThirdSubTwoComponent;
import React from "react";
import { Typography, Grid } from "@mui/material";

const Skin = () => {

    const firstData = [{ name: 'Face Moisturizer & Day' }, { name: 'Cream' }, { name: 'Night Cream' }, { name: 'Face Oil' }, { name: 'Serums & Essence' }, { name: 'All Purpose Gels/Creams' }]
    const firstData2 = [{ name: 'Face Wash' }, { name: 'Cleanser' }, { name: 'Micellar Wipes' }, { name: 'Face Wipes' }, { name: 'Makeup Remover' }, { name: 'Scrubs & Exfoliators' }]
    const trendingData = [{ name: 'Toners Under 1000' }, { name: 'Face wash For Oily Skin' }, { name: 'Oil Free Face' }, { name: 'Moisturizers' }, { name: 'Lip Balm Under 500' }, { name: 'Vitamin C Serum' }]
    const trendingData2 = [{ name: 'Sheets Masks' }, { name: 'Sleeping Masks' }, { name: 'Masks & Peels' }, { name: 'Face Packs' }, { name: 'Face Bleach' },]
    const bodyData = [{ name: 'Lotions & Creams' }, { name: 'Body Butter' }, { name: 'Massage Oils' }, { name: 'Shower Gel & Body' }, { name: 'Wash' }, { name: 'Soaps' }, { name: 'Scrubs & Lofashs' }, { name: 'Bath Salts' },]
    const skinData = [{name:'Face Massagers'},{name:'Cleaning Brushes'},{name:'Blackhead remover'},{name:'Dermarollers'}]

    return (
        <>
            <Grid container >
                <Grid item md={2} sx={{padding:'0px 15px'}} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }} >Moisturizers</Typography>
                    {firstData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}

                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '10px' }} >Cleansers</Typography>
                    {firstData2.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                </Grid>
                <Grid item md={2} sx={{ backgroundColor: '#ebeae8',padding:'0px 15px' }}  >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', }}>Trending Searches</Typography>
                    {trendingData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', paddingTop: '15px' }}>Masks</Typography>
                    {trendingData2.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', paddingTop: '15px' }}>Toners</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Toners & Mists</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Rose Water</Typography>
                </Grid>
                <Grid item md={2} sx={{padding:'0px 15px'}}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Body Care</Typography>
                    {bodyData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '10px' }}>Hands & Feet</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Hand Creams</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Foot Creams</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Hand & Foot Masks</Typography>

                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '10px' }}>CSMS By Nykaa</Typography>

                </Grid>
                <Grid item md={2} sx={{ backgroundColor: '#ebeae8',padding:'0px 15px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Specialised Skincare</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Acene Spot Correctors</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Nose Strips</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Facial Peels</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Eye Care</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Under Eye Creams &</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Serums</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Eye Masks</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Lip Care</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Lip Balm</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Lip Scrubs</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Lip Masks</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Sun Care</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Face Sunscreen</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Body Sunscreen</Typography>
                </Grid>
                <Grid item md={2} sx={{padding:'0px 15px'}} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Kits & Combos</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Facial Kits</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Combos @ Nykaa</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Gift Sets</Typography>
                    
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'12px' }}>Skin Tools</Typography>
                    {skinData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Skin Supplements</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Vitamins & Minerals</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' }}>Ayurvedic Herbs</Typography>
                    
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'12px' }}>Neck Creams</Typography>
                </Grid>
                <Grid item md={2} sx={{ backgroundColor: '#ebeae8',padding:'0px 18px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', backgroundColor: '#ebeae8' }}>Shop By Concern</Typography>
                    {firstData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', backgroundColor: '#ebeae8', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', backgroundColor: '#ebeae8', marginTop: '15px' }}>Trending Searches</Typography>
                    {firstData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', backgroundColor: '#ebeae8', paddingLeft: '5px' }}>{item.name}</Typography>
                    ))}
                </Grid>

            </Grid>
        </>
    )
}

export default Skin;
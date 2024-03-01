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
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}

                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '10px' }} >Cleansers</Typography>
                    {firstData2.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                </Grid>
                <Grid item md={2} sx={{ backgroundColor: '#ebeae8',padding:'0px 15px' }}  >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', }}>Trending Searches</Typography>
                    {trendingData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', paddingTop: '15px' }}>Masks</Typography>
                    {trendingData2.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', paddingTop: '15px' }}>Toners</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Toners & Mists</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Rose Water</Typography>
                </Grid>
                <Grid item md={2} sx={{padding:'0px 15px'}}>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Body Care</Typography>
                    {bodyData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '10px' }}>Hands & Feet</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Hand Creams</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Foot Creams</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Hand & Foot Masks</Typography>

                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '10px' }}>CSMS By Nykaa</Typography>

                </Grid>
                <Grid item md={2} sx={{ backgroundColor: '#ebeae8',padding:'0px 15px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Specialised Skincare</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Acene Spot Correctors</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Nose Strips</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Facial Peels</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Eye Care</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Under Eye Creams &</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Serums</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Eye Masks</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Lip Care</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Lip Balm</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Lip Scrubs</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' ,'&:hover':{color:'#E80071'}  }}>Lip Masks</Typography>
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Sun Care</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Face Sunscreen</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Body Sunscreen</Typography>
                </Grid>
                <Grid item md={2} sx={{padding:'0px 15px'}} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Kits & Combos</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Facial Kits</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Combos @ Nykaa</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>Gift Sets</Typography>
                    
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'12px' }}>Skin Tools</Typography>
                    {skinData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'10px' }}>Skin Supplements</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Vitamins & Minerals</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>Ayurvedic Herbs</Typography>
                    
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop:'12px' }}>Neck Creams</Typography>
                </Grid>
                <Grid item md={2} sx={{ backgroundColor: '#ebeae8',padding:'0px 18px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', }}>Shop By Concern</Typography>
                    {firstData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px',  paddingLeft: '5px' ,'&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', marginTop: '15px' }}>Trending Searches</Typography>
                    {firstData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px',  paddingLeft: '5px','&:hover':{color:'#E80071'}  }}>{item.name}</Typography>
                    ))}
                </Grid>

            </Grid>
        </>
    )
}

export default Skin;
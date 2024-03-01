import { Typography, Grid } from "@mui/material";
import React from "react";

const Lingerie = () => {

    const faceData = [{ name: 'Face Primer' }, { name: 'Concealer' }, { name: 'Foundation' }, { name: 'Compact' }, { name: 'Loose Powder' }, { name: 'Tinted Moisturizer' }, { name: 'Blush' }, { name: 'Bronzer' }, { name: 'BB & CC Cream' }, { name: 'Highlighters' }, { name: 'Setting Spray' }, { name: 'Makeup Remover' }, { name: 'Sindoor' }]

    const eyesData = [{ name: 'Kajal' }, { name: 'Eyeliner' }, { name: 'Mascara' }, { name: 'Eye Shadow' }, { name: 'Eye Brow Enhancers' }, { name: 'Eye Primer' }, { name: 'Eye Makeup Remover' }, { name: 'Under Eye Concealer' }, { name: 'Contact Leanses' }]

    const lipsData = [{name:'Lipsstick'},{name:'Liquid Lipstick'},{name:'Lip Crayon'},{name:'Lip Gloss'},{name:'Lip Liner'},{name:'Lip Plumper'},{name:'Lip Tint'}]

    const toolData = [{name:'Face Brush'},{name:'Eye Brush'},{name:'Lip Brush'},{name:'Brush Sets'},{name:'Brush Cleaners'},{name:'Sponges & Applicators'},{name:'Eyelash Curlers'},{name:'Tweezers'},{name:'Sharpeners'},{name:'Mirrors'},{name:'MakeUp Pouches'}]

    const brandsData = [{name:'Kay Beauty'},{name:'Huda Beauty'},{name:'Charlotte Tibury'},{name:'M.A.C'},{name:'Maybelline New York'},{name:'L`Oreal Paris'},{name:'Nykaa Cosmetics'},{name:'Nyx Pro.Makeup'}]

    const quickData = [{name:'Combos @ Nykaa'},{name:'New Launches'},{name:'NFBA Nominees 2022'},{name:'Gifts @ Nykaa'},{name:'The Gift Store'},]
    return (
        <>
            <Grid container >
                <Grid item md={2} sx={{padding:'0px 25px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }} >Lingerie</Typography>
                    {faceData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px','&:hover':{color:'#E80071'} }}>{item.name}</Typography>
                    ))}
                </Grid>
                <Grid item md={2} sx={{backgroundColor:'#ebeae8', padding:'0px 25px' }}  >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', }}>Bags</Typography>
                    {eyesData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px',  paddingLeft: '5px' ,'&:hover':{color:'#E80071'} }}>{item.name}</Typography>
                    ))}
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', paddingTop:'15px' }}>Makeup Kits & Combos</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px' }}>Makeup Kits</Typography>
                    <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px', paddingBottom:'12px' }}>Makeup Combos</Typography>
                </Grid>
                <Grid item md={2} sx={{padding:'0px 25px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Footware</Typography>
                    {lipsData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' ,'&:hover':{color:'#E80071'}}}>{item.name}</Typography>
                    ))}
                </Grid>
                <Grid item md={2} sx={{backgroundColor:'#ebeae8', padding:'0px 25px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Jewellery</Typography>
                    {toolData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', paddingLeft: '5px','&:hover':{color:'#E80071'} }}>{item.name}</Typography>
                    ))}
                </Grid>
                <Grid item md={2} sx={{padding:'0px 25px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px' }}>Home</Typography>
                    {brandsData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', color: 'gray', paddingLeft: '5px' ,'&:hover':{color:'#E80071'}}}>{item.name}</Typography>
                    ))}
                </Grid>
                <Grid item md={2} sx={{backgroundColor:'#ebeae8', padding:'0px 25px' }} >
                    <Typography sx={{ fontSize: '12px', fontWeight: 'bold', paddingLeft: '6px', backgroundColor: '#ebeae8' }}>Featured Brands</Typography>
                    {quickData.map((item) => (
                        <Typography sx={{ fontSize: '11px', padding: '3px', backgroundColor: '#ebeae8', paddingLeft: '5px','&:hover':{color:'#E80071'} }}>{item.name}</Typography>
                    ))}
                </Grid>

            </Grid>
        </>
    )
}

export default Lingerie;
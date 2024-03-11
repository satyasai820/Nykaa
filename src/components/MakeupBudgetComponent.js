import { Grid, Typography } from "@mui/material";
import React from "react";

const MakeupBudgetComponent = () => {

    const imgUrl = [{ img: 'https://images-static.nykaa.com/uploads/7dde7b31-ca38-4863-971b-5410a9de0615.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/c99c75c0-9ce2-4854-b215-b7469fd11b55.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/aabd5fd9-c86f-461c-9d58-e1e088c0892f.jpg?tr=w-200,cm-pad_resize' }, { img: 'https://images-static.nykaa.com/uploads/c99c75c0-9ce2-4854-b215-b7469fd11b55.jpg?tr=w-200,cm-pad_resize' }]

    const images = [{ img: 'https://images-static.nykaa.com/uploads/e4448049-5aa3-4e53-9c76-6d6a3c187aac.jpg?tr=w-150,cm-pad_resize', p: 'Powder Brushes' }, { img: 'https://images-static.nykaa.com/uploads/8f797280-efec-4637-b0e1-fe8aaa6112d1.jpg?tr=w-150,cm-pad_resize',p:'Sponges & Applicatore' }, { img: 'https://images-static.nykaa.com/uploads/f03e5667-b029-4a3c-aaf9-83b95ae8772c.jpg?tr=w-150,cm-pad_resize',p:'Concealer Brush' }, { img: 'https://images-static.nykaa.com/uploads/5e1ae0b4-5532-408c-b45d-e7eb05ac6780.jpg?tr=w-150,cm-pad_resize', p:'Contact Lenses' }, { img: 'https://images-static.nykaa.com/uploads/4a30702b-f1e5-4a71-96fd-1f4a2439d815.jpg?tr=w-150,cm-pad_resize', p:'Brown & Lash Essential' }, { img: 'https://images-static.nykaa.com/uploads/1c40abd6-42a3-49d7-96de-4c13eb348d3d.jpg?tr=w-150,cm-pad_resize',p:'Foundation Brush' }]
    return (
        <>
            <Grid container sx={{ backgroundColor: 'white', justifyContent: 'center' }} >
                <Grid sx={{ width: { xs: '95%', sm: '85%' } }}>

                    <Grid>
                        <Typography sx={{ fontSize: { xs: '15px', sm: '18px', fontWeight: 550 } }}>Budget Buys</Typography>
                        <Typography variant="p">Pocket-Friendly Makeup</Typography>
                    </Grid>
                    <Grid sx={{ justifyContent: 'center', display: 'flex', marginTop: { xs: '10px' } }}>

                        {imgUrl.map((item) => (
                            <>
                                <Grid sx={{ marginRight: { xs: '10px', sm: '20px' } }}>
                                    <img style={{ maxWidth: '100%', height: 'auto', }} src={item.img} alt="" />
                                </Grid>
                            </>
                        ))}

                    </Grid>
                    <Grid sx={{ textAlign: 'center', marginTop: { xs: '15px', sm: '30px' } }}>
                        <Typography sx={{ color: 'grey', fontSize: '13px', fontWeight: 550 }}>Beauty Tools</Typography>
                        <Typography sx={{ fontSize: { xs: '15px', sm: '18px', fontWeight: 550 } }}>Complete Your Makeup Checklist</Typography>
                    </Grid>
                    <Grid sx={{display:'flex'}}>
                        {images.map((item) => (
                            <>
                                <Grid sx={{marginRight:{xs:'10px', sm:'20px'}}}>
                                    <img style={{ maxWidth: '100%', height: 'auto', }} src={item.img} alt="" />
                                    <Typography sx={{fontSize:{xs:'7px',sm:'10px', md:'12px', textAlign:'center'}}}>{item.p}</Typography>
                                </Grid>
                            </>
                        ))}

                    </Grid>

                </Grid>

            </Grid>
        </>
    );
}

export default MakeupBudgetComponent;
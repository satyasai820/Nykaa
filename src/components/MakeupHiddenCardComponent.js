import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

const MakeupHiddenCardComponent = () => {

    const cardData =[{img:'https://images-static.nykaa.com/uploads/db41b837-9689-4cb8-8c25-a97fb57d1870.jpg?tr=w-240,cm-pad_resize',},{img:'https://images-static.nykaa.com/uploads/be382632-df04-4c55-b4c7-089ab3f103f7.jpg?tr=w-240,cm-pad_resize',p1:'On Entire Range'},{img:'https://images-static.nykaa.com/uploads/0e63876a-f1f6-4a2d-ac79-fc7792f03461.jpg?tr=w-240,cm-pad_resize'},{img:'https://images-static.nykaa.com/uploads/e5f5fc6e-96c4-45c0-81b1-f9ffbb038049.jpg?tr=w-240,cm-pad_resize',p1:'High-impact',p2:'Beauty'},{img:'https://images-static.nykaa.com/uploads/dd12fec1-14d6-4a03-b362-370e4bdf1c4c.jpg?tr=w-240,cm-pad_resize'},]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', backgroundColor: '#FFFFFF' }}>
                <Grid sx={{ width: { xs: '90%', sm: '85%' }, marginTop: '20px' }}>
                    <Grid>
                        <Typography sx={{ fontSize: { xs: '16px', md: '22px' }, fontWeight: 550 }}>Hidden Gems</Typography>
                    </Grid>
                    <Grid sx={{display:'flex'}}>
                    {cardData.map((item)=> (
                        <>
                         <Grid sx={{marginRight:{xs:'5px',sm:'20px'}}}>
                        <Card sx={{ maxWidth: 230 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="auto"
                                    image={item.img}
                                    alt="green iguana"
                                />
                                <CardContent sx={{display:{xs:'none', sm:'block'}}}>
                                    <Typography sx={{fontSize:{sm:'10px', md:'14px'}, fontWeight:550}}>UpTo 20% Off</Typography>
                                    <Typography sx={{color:'grey', fontSize:{sm:'10px'}}} >{item.p1}</Typography>
                                    <Typography  sx={{color:'grey', fontSize:{sm:'10px'}}}>{item.p2}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                        </>
                    ))}
                    
                    </Grid>
                   
                </Grid>
            </Grid>
        </>
    )
}

export default MakeupHiddenCardComponent;
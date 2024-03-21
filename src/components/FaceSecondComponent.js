import { Grid, Typography, } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { GetCradsData } from "../Redux/Api/GetCardData";
import { connect } from "react-redux";
import { Getdata } from "../Redux/Actions/GetDataAction";
import { useNavigate, useParams } from "react-router-dom";

const FaceSecondComponent = ( {Getdata, data}) => {
    const [changeData, setChangeData] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        getDataFromApi();
    }, [])

    const namesData = [{ name: 'Brand' }, { name: 'Price' }, { name: 'Skin Type' }, { name: 'Concern' }, { name: 'Finish' }, { name: 'Formulation' }, { name: 'Color' }, { name: 'Discount' }, { name: 'AvgCustomer Rating' }, { name: 'Perference' }, { name: 'Country Of Origin' }, { name: 'Gender' }, { name: 'Benefits' }, { name: 'Ingredient' }, { name: 'Coverage' }, { name: 'Pack Size' }, { name: 'Conscious' },]


    // const cardsData = [{ img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: 1 }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/5/b/5b999d8MAYBE00000026_1.jpg', p: '2' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '3' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '4' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '5' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '6' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '7' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '8' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '9' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '10' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '11' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '12' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '13' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '14' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '15' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '16' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '17' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '18' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '19' }, { img: 'https://images-static.nykaa.com/media/catalog/product/tr:w-220,h-220,cm-pad_resize/8/c/8c12fe48901030561924_1.jpg', p: '20' },]



    const handleChage = (item) => {
        setChangeData(item)
    }

    const handleChangeClose = () => {
        setChangeData(null);
    }

    const getDataFromApi = async () => {
        try {
            const gettingData = await GetCradsData();
            Getdata(gettingData);
            console.log('This is the data from the APi Using Redux ---->', gettingData)
        }
        catch (error) {
            console.log("this is the error ocured in the redux set up---->", error);
        }
    }


    const prams = useParams();
    const router = prams.id;
    console.log("This is the data from data variable-->", data);
    const gettingCards = data;

    const CardsData = gettingCards.filter( (item)=> item.status === router);
    
    const handleCardClick =  (aboutcard) => {
        const aboutcarddataString = JSON.stringify(aboutcard);
      localStorage.setItem("aboutcarddataString", aboutcarddataString)
      navigate('/Details')
    };
    


    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: '20px' }}>
                <Grid sx={{ width: { xs: '95%', sm: '90%', lg: '65%' }, }}>
                    <Grid sx={{ margin: '10px 0px' }}>
                        <Typography sx={{ fontSize: { xs: '14px', sm: '19px' }, fontWeight: 550, textAlign: 'center' }}>All Products</Typography>
                    </Grid>
                    <Grid container sx={{}}>
                        <Grid sx={{ width: '25%' }}>
                            <Grid sx={{ width: { xs: '100%', position: 'sticky', top: 45, } }}>
                                <Grid>
                                    <Typography fontFamily='Inter, Roboto, Arial, sans-serif' sx={{ padding: '9px 0px 9px 10px', fontSize: { xs: '10px', sm: '13px' }, fontWeight: 550, color: '#000000', display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', marginBottom: '10px', boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.1)' }} >Sort By : Popularity <Icon style={{ marginLeft: 'auto', color: '#E80071', paddingRight: '5px' }} icon="mingcute:down-line" width="20" height="20" /></Typography>

                                </Grid>
                                <Grid>
                                    {namesData.map((item) => (
                                        <>
                                            <Typography fontFamily='Inter, Roboto, Arial, sans-serif' sx={{ padding: { xs: '9px 3px', sm: '9px 0px 9px 10px' }, fontSize: { xs: '9px', sm: '13px' }, fontWeight: 550, color: '#000000', display: 'flex', alignItems: 'center', backgroundColor: '#FFFFFF', borderBottom: '1px solid lightgrey' }} >{item.name} <Icon style={{ marginLeft: 'auto', paddingRight: '5px' }} icon="mingcute:down-line" width="20" height="20" /></Typography>
                                        </>
                                    ))}

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid container sx={{ width: { xs: '75%', justifyContent: 'center' } }}>
                            <Grid container sx={{ display: 'flex', width: '95%' }}>



                                {CardsData.map((item) => (
                                    <>
                                        <Grid item xs={12} sm={6} md={4} lg={4} sx={{ width: { sm: '95%' }, marginBottom: '10px', }} onClick={()=>{handleCardClick(item.aboutcard)}}>

                                            <Card sx={{ maxWidth: 205, margin: 'auto', boxShadow: 'none' }} onMouseLeave={() => handleChangeClose()}>
                                                <CardActionArea onMouseEnter={() => handleChage(item.c)} >
                                                    <CardMedia
                                                        component="img"
                                                        height="auto"
                                                        image={item.imgurl}
                                                        alt="green iguana"

                                                    />
                                                    <CardContent>
                                                        <Typography sx={{ fontSize: '11px', textAlign: 'center', color: '#000000', fontWeight: 500 }} >Lakme Absolute Primer</Typography>
                                                        <Typography sx={{ textAlign: 'center', marginTop: '15px', fontSize: '10px' }}><span style={{ color: '#001325A3' }}>MRP.</span> <span style={{ textDecoration: 'line-through' }}>₹850</span> <span style={{ borderRight: '1px solid lightgrey', padding: '0px 4px', fontWeight: 'bold' }}> ₹723</span> <span style={{ color: 'green', fontSize: '12px' }}>15% Off</span> </Typography>
                                                        <Grid sx={{ justifyContent: 'center', marginTop: '10px', display: 'flex' }}>
                                                            <Icon icon="entypo:star" width="12" height="12" />
                                                            <Icon icon="entypo:star" width="12" height="12" />
                                                            <Icon icon="entypo:star" width="12" height="12" />
                                                            <Icon icon="entypo:star" width="12" height="12" />
                                                            <Icon icon="entypo:star-outlined" width="12" height="12" />
                                                            <Typography sx={{ fontSize: '10px', marginLeft: '5px', color: '#001325A3' }}>(20340)</Typography>
                                                        </Grid>
                                                        {changeData === (item.c) ? (
                                                            <Grid container sx={{ borderTop: '1px solid lightgrey', alignItems: 'center', marginTop: '26px' }}>
                                                                <Grid sx={{ width: '20%' }}>

                                                                    <Icon icon="icon-park-outline:like" width="25" height="25" style={{ color: '#E80071' }} />
                                                                </Grid>
                                                                <Grid sx={{ width: '80%', backgroundColor: '#E80071' }}>
                                                                    <Typography sx={{ fontSize: '12px', padding: '10px 0px', textAlign: 'center', color: '#FFFFFF', fontWeight: 550 }}>Preview Shades</Typography>
                                                                </Grid>
                                                            </Grid>

                                                        ) :
                                                            (<Typography sx={{ fontSize: '10px', color: '#001325A3', textAlign: 'center', marginTop: '50px' }} >3 shades </Typography>)}
                                                    </CardContent>
                                                </CardActionArea>
                                            </Card>



                                        </Grid>
                                    </>
                                ))}


                                <Grid container sx={{ justifyContent: 'center', margin: '10px 0px' }}>
                                    <Pagination count={5} size="small" sx={{ '& .MuiPaginationItem-root': { color: '#E80071' }, }} />
                                    {/* {gotIt.map((item) => (
                                        <Typography>{item.subtitle}</Typography>
                                    ))} */}
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


const mapStateToProps = (state) => {
    console.log("this one", state.data)
    return {
        data: state.Reducer1.data
        
    }
}

const mapDispatchToProps = {
    Getdata,
}

export default connect(mapStateToProps, mapDispatchToProps)(FaceSecondComponent);

// export default FaceSecondComponent;
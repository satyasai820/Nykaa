import React, { useState } from "react";
import { AppBar, Button, Grid, Input, Typography, Tabs, Tab, Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { Icon } from "@iconify/react";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import { Drawer } from "@mui/material";
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import Menu from '@mui/material/Menu';

import InputAdornment from '@mui/material/InputAdornment';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Modal from '@mui/material/Modal';
import { googleAccount } from '../pages/SignUp'


import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 200,
    bgcolor: 'background.paper',
    boxShadow: 24,

};



const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openModalForm, setOpenModalForm] = useState(false);
    const [openSmallMenu, setOpenSmallMenu] = React.useState(false);

    const navigate = useNavigate();

    let token = localStorage.getItem('accessToken');
    const Name = localStorage.getItem('displayName');
    console.log('this is the name in nav bar', Name);
    console.log("this is the token in nav bar ", token)


    

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpenModalForm(false);
    };
    const handleCloseButtonMenu = () => {
        setAnchorEl(null);
    };

    const handleExpansion = () => {
        setExpanded(!expanded);
    };

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    }


    const handleOpen = () => {
        setIsDrawerOpen(true);
    }

    const handleClose = () => {
        setIsDrawerOpen(false);
    }

    // drop down for sign out funcationality



    const handleLogOut = () => {
        signOut(auth).then(() => {
            localStorage.clear();
            navigate('/');
            token = '';
            console.log("token deleted", token);
        }).catch((error) => {
            console.log('hiii not working')
        });
    }


    const handleOpenForm = () => {
        setOpenModalForm(true);
        setAnchorEl(null);
    }
    const handleCloseForm = () => setOpenModalForm(false);



    // dropdown for small screen 




    const handleClickSmallMenu = () => {
        setOpenSmallMenu(!openSmallMenu);
    };

    const catData = [{ n: 'Compact' }, { n: 'Contour' }, { n: 'Loose Powder' }, { n: 'Blush' }, { n: 'BB & CC Cream' }, { n: 'Highlighters' }, { n: 'Setting Spary' }, { n: 'Makeup Remover' }, { n: 'Sindoor' }, { n: 'Tinted Moisturizer' }, { n: 'Bronzer' }]


    const skinData = [{n:'Cleansers'},{n:'Moisturizers'},{n:'Sun Care'},{n:'Shop Toners & Mists'},{n:'Masks'},{n:'Lip Care'},{n:'Eye Care'},{n:'Dermocosmetic Brands'},{n:'Specialised Skin Care'},{n:'Body Care'},{n:'Hands & Feet'},{n:'Kits & Combos'},{n:'Skin Tools'},{n:'Skin Supplements'},{n:'Shop By Concern'},]


    const brandData = [{n:'Lakme'},{n:'Nykaa Cosmetics'},{n:'M.A.C'},{n:'The Face short'},{n:'Nykaa Naturals'},{n:'Biotique'},{n:'Hudabeauty'},{n:'Kama Ayurveda'},{n:'Innisfree'},{n:'The Body Shop'},{n:'L`Oreal Paris'}]




    return (
        <>

            <AppBar sx={{ backgroundColor: 'white', marginTop: '29px', }}>
                <Grid container sx={{ justifyContent: 'center', }} >
                    <Grid container sx={{ width: { lg: '70%', xl: '65%' }, alignItems: 'center', display: 'flex' }} >
                        <Grid sx={{ marginRight: { xs: '5px', sm: '10px' }, marginLeft: { xs: '5px', sm: '10px' }, display: { xs: 'block', md: 'none', color: 'black' } }}>
                            <Icon onClick={handleOpen} icon="el:lines" width="20" height="20" />
                        </Grid>
                        <Grid sx={{ cursor: 'pointer', }} onClick={() => navigate('/')} >
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-nykaa-3384872-2822953.png?f=webp" alt="logo" width={60} height={60} />
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', display: { xs: 'none', md: 'block' } }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071', cursor: 'pointer', } }}>Categories</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', display: { xs: 'none', md: 'block' } }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071', cursor: 'pointer', } }}>Brands</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', display: { xs: 'none', md: 'block' } }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071', cursor: 'pointer', } }}>Luxe</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', display: { xs: 'none', md: 'block' } }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071', cursor: 'pointer', } }}>Nykaa Fashion</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', display: { xs: 'none', md: 'block' }, marginRight: { md: '18%', lg: '17%', xl: '10%' } }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071', cursor: 'pointer', } }}>Beauty Advice</Typography>
                        </Grid>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: { sm: 'center', md: 'none' } }}>
                            <Input
                                placeholder="Search for Nykaa"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                sx={{
                                    border: '1px solid #F4F4F4',
                                    borderRadius: '3px',
                                    background: '#F4F4F4',
                                    '&:hover': { border: '1px solid red', },
                                    '&:focus': { outline: 'none', boxShadow: '0 0 0 2px red' },
                                    '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none',
                                    },
                                }}
                            />

                        </Box>
                        <Grid>
                            {token ? (
                                <>
                                    <Grid sx={{ display: { xs: 'none', md: 'block' } }}>


                                        <Grid sx={{ display: 'flex', alignItems: 'center', }}>
                                            <Icon onClick={handleOpenForm} icon="ant-design:user-outlined" width="20" height="20" style={{ color: 'black', marginRight: '5px', cursor: 'pointer' }} />

                                            {/* <Modal
                                                open={openModalForm}
                                                onClose={handleCloseForm}
                                                aria-labelledby="modal-modal-title"
                                                aria-describedby="modal-modal-description"
                                            >
                                                <Box sx={style}>

                                                    <Grid sx={{ textAlign: 'center', margin: '5px', alignItems:'center' }}>
                                                        <Typography sx={{ padding: '10px', fontSize: '11px',  color: '#00000', cursor: 'pointer' }}>    <Icon style={{color:'red'}} icon='iconamoon:profile-circle-fill' width="15" height="15" />Orders</Typography>
                                                        <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px',  color: '#00000', cursor: 'pointer' }} onClick={(()=>{navigate('/profile')})} >Profile</Typography>
                                                        <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px',  color: '#00000', cursor: 'pointer' }}>Wallet</Typography>
                                                        <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px',  color: '#00000', cursor: 'pointer' }}>Wishlist</Typography>
                                                        <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px',  color: '#00000', cursor: 'pointer' }} onClick={handleLogOut}>Logout</Typography>
                                                    </Grid>

                                                </Box>
                                            </Modal> */}

                                            <Typography sx={{ color: 'black', fontSize: '12px', marginRight: '15px' }}>{Name}</Typography>

                                        </Grid>
                                    </Grid>
                                </>
                            ) : (
                                <>
                                    <Button variant="contained" sx={{ backgroundColor: '#E80071', textTransform: 'none', fontSize: '11px', fontWeight: 'bold', borderRadius: '5px', marginRight: '10px', display: { xs: 'none', md: 'block' }, '&:hover': { backgroundColor: '#E80071', } }}
                                        id="fade-button"
                                        aria-controls={open ? 'fade-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}

                                    >Sign in</Button>
                                    <Menu
                                        id="fade-menu"
                                        MenuListProps={{
                                            'aria-labelledby': 'fade-button',
                                        }}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleCloseButtonMenu}
                                        TransitionComponent={Fade}
                                        sx={{ width: { md: '40%', lg: '20%' } }}
                                    >
                                        <MenuItem onClick={handleCloseButtonMenu} sx={{ paddingLeft: '20px', fontSize: '20px', }}>Login / Create Account</MenuItem>
                                        <MenuItem onClick={handleCloseButtonMenu} >
                                            <Typography variant="p" sx={{ fontSize: '11px', color: 'grey' }}>Register now and get<span style={{ fontWeight: 550, }} > 2000 Nykaa reward </span> </Typography>
                                        </MenuItem>
                                        <MenuItem onClick={handleCloseButtonMenu} >
                                            <Typography variant="p" sx={{ fontSize: '11px', color: 'grey', lineHeight: 0, fontWeight: 550, marginBottom: '15px' }}>points instantly! </Typography>
                                        </MenuItem>
                                        <MenuItem > <Typography onClick={() => navigate('/signup')} sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 30px', borderRadius: '5px', display: 'flex', alignItems: 'center', }}> Sign in with mobile/ Email <Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', paddingLeft: '10px' }} /> </Typography> </MenuItem>
                                        <MenuItem> <Typography onClick={() => googleAccount(navigate)} sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 65px', borderRadius: '5px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}> <Icon icon="devicon:google" width="15" height="15" style={{ marginRight: '5px' }} /> Google<Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', marginLeft: '20px' }} /> </Typography> </MenuItem>
                                    </Menu>
                                </>
                            )}

                        </Grid>
                        <Grid sx={{ marginLeft: 'auto', marginRight: '10px' }}>
                            <Icon icon="iconamoon:shopping-bag-light" color="black" width="25" height="25" />
                        </Grid>
                        {token ? (
                            <>
                                <Grid sx={{ display: { xs: 'block', md: 'none' } }}>


                                    <Grid sx={{ display: 'flex', alignItems: 'center', }}>
                                        <Icon onClick={handleOpenForm} icon="ant-design:user-outlined" width="20" height="20" style={{ color: 'black', marginRight: '5px' }} />



                                        <Modal
                                            open={openModalForm}
                                            onClose={handleCloseForm}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>

                                                <Grid sx={{ padding: '5px' }}>
                                                    <Typography sx={{ padding: '10px', fontSize: '11px', color: '#00000', cursor: 'pointer', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>  <Icon style={{ color: '#000000', marginRight: '5px' }} icon='fontisto:truck' width="15" height="15" />Orders</Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', color: '#00000', cursor: 'pointer', alignItems: 'center', display: 'flex', justifyContent: 'center' }} onClick={(() => { navigate('/profile') })} > <Icon style={{ color: '#000000', marginRight: '5px' }} icon='iconamoon:profile-circle-fill' width="15" height="15" />Profile</Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', color: '#00000', cursor: 'pointer', alignItems: 'center', display: 'flex', justifyContent: 'center' }}> <Icon style={{ color: '#000000', marginRight: '5px' }} icon='ion:wallet-outline' width="15" height="15" />Wallet</Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', color: '#00000', cursor: 'pointer', alignItems: 'center', display: 'flex', justifyContent: 'center' }}> <Icon style={{ color: '#000000', marginRight: '5px' }} icon='icon-park-solid:like' width="15" height="15" />Wishlist</Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', color: '#00000', cursor: 'pointer', alignItems: 'center', display: 'flex', justifyContent: 'center' }} onClick={handleLogOut}> <Icon style={{ color: '#000000', marginRight: '5px' }} icon='icons8:shutdown' width="15" height="15" />Logout</Typography>
                                                </Grid>

                                            </Box>
                                        </Modal>


                                        {/* <Modal
                                            open={openModalForm}
                                            onClose={handleCloseForm}
                                            aria-labelledby="modal-modal-title"
                                            aria-describedby="modal-modal-description"
                                        >
                                            <Box sx={style}>

                                                <Grid sx={{ textAlign: 'center', margin: '5px', }}>
                                                    <Typography sx={{ fontSize: '16px', fontWeight: 550, marginBottom: '20px', marginTop: '20px' }}>
                                                        Are you sure you want to Log out.?
                                                    </Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', fontWeight: 'bold', color: '#E80071', cursor: 'pointer' }} onClick={handleLogOut}>Logout</Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', fontWeight: 'bold', color: '#E80071', cursor: 'pointer' }}>Logout from all devices</Typography>
                                                    <Typography sx={{ borderTop: '1px solid lightgray', padding: '10px', fontSize: '11px', fontWeight: 'bold', color: '#E80071', marginBottom: '10px', cursor: 'pointer' }} onClick={handleCloseForm}>Cancle</Typography>
                                                </Grid>

                                            </Box>
                                        </Modal> */}

                                        <Typography sx={{ color: 'black', fontSize: '12px', marginRight: '10px' }}>{Name}</Typography>

                                    </Grid>
                                </Grid>
                            </>
                        ) :
                            (
                                <>
                                    <Grid>
                                        <Button variant="contained" sx={{ backgroundColor: '#E80071', textTransform: 'none', fontSize: '11px', fontWeight: 'bold', borderRadius: '5px', marginRight: '10px', display: { xs: 'block', md: 'none' }, '&:hover': { backgroundColor: '#E80071', } }}
                                            id="fade-button"
                                            aria-controls={open ? 'fade-menu' : undefined}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}
                                            onClick={handleClick}
                                        >Sign in</Button>
                                        <Menu
                                            id="fade-menu"
                                            MenuListProps={{
                                                'aria-labelledby': 'fade-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleCloseButtonMenu}
                                            TransitionComponent={Fade}
                                        // sx={{ width: { md: '40%', lg: '20%' } }}
                                        >
                                            <MenuItem onClick={handleCloseButtonMenu} sx={{ paddingLeft: '20px', fontSize: '20px', }}>Login / Create Account</MenuItem>
                                            <MenuItem onClick={handleCloseButtonMenu} >
                                                <Typography variant="p" sx={{ fontSize: '11px', color: 'grey' }}>Register now and get<span style={{ fontWeight: 550, }} > 2000 Nykaa reward </span> </Typography>
                                            </MenuItem>
                                            <MenuItem onClick={handleCloseButtonMenu} >
                                                <Typography variant="p" sx={{ fontSize: '11px', color: 'grey', lineHeight: 0, fontWeight: 550, marginBottom: '15px' }}>points instantly! </Typography>
                                            </MenuItem>
                                            <MenuItem> <Typography onClick={() => navigate('/signup')} sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 30px', borderRadius: '5px', display: 'flex', alignItems: 'center', }}> Sign in with mobile/ Email <Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', paddingLeft: '10px' }} /> </Typography> </MenuItem>
                                            <MenuItem> <Typography onClick={() => googleAccount(navigate)} sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 65px', borderRadius: '5px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}> <Icon icon="devicon:google" width="15" height="15" style={{ marginRight: '5px' }} /> Google<Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', marginLeft: '20px' }} /> </Typography> </MenuItem>
                                        </Menu>
                                    </Grid>
                                </>
                            )}

                    </Grid>
                    <Grid>
                        <Box sx={{ flexGrow: 1, display: { xs: 'block', sm: 'none' } }}>
                            <Input
                                placeholder="Search for Nykaa"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                sx={{
                                    width: '300px',
                                    marginBottom: '10px',
                                    border: '1px solid #F4F4F4',
                                    borderRadius: '10px',
                                    background: '#F4F4F4',
                                    '&:hover': { border: '1px solid red', },
                                    '&:focus': { outline: 'none', boxShadow: '0 0 0 2px red' },
                                    '&.MuiInput-underline:before, &.MuiInput-underline:hover:not(.Mui-disabled):before': {
                                        borderBottom: 'none',
                                    },
                                }}
                            />

                        </Box>
                    </Grid>
                </Grid>
            </AppBar>

            <Drawer anchor="left" PaperProps={{
                sx: {
                    width: '70%'
                }
            }} open={isDrawerOpen} onClose={handleClose}>
                <Tabs value={tabValue} onChange={handleTabChange}
                    sx={{

                        '& .MuiTabs-indicator': {
                            backgroundColor: '#E80071'
                        },
                        '& .MuiTab-root': {
                            color: 'black',
                            fontWeight: 550,
                        },
                        '& .Mui-selected': {
                            color: '#E80071 !important',
                            fontWeight: 550,
                        },
                    }}
                >
                    <Tab sx={{ width: '50%' }} label="Categories" />
                    <Tab sx={{ width: '50%' }} label="Brands" />
                </Tabs>
                {tabValue === 0 && (
                    <>
                        {/* <List>
                            <ListItemButton
                                sx={{
                                    backgroundColor: "#E80071",
                                   
                                    "&:hover": {
                                        backgroundColor: "#E80071", 
                                    },
                                }}
                                onClick={handleClickSmallMenu}
                            >
                            
                                <ListItemText sx={{color:'white', fontWeight:550,}} primary="MakeUp" />
                                {openSmallMenu ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                            <Collapse in={openSmallMenu} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    <ListItemButton sx={{ display:'block',  }}>
                                        <ListItemText sx={{fontSize:'64px !important'}} primary="Starred" />
                                        <ListItemText primary="Starred" />
                                        <ListItemText primary="Starred" />
                                        <ListItemText primary="Starred" />
                                        <ListItemText primary="Starred" />
                                        <ListItemText primary="Starred" />
                                    </ListItemButton>
                                </List>
                                </Collapse>
                                </List> */}
                        <Grid sx={{ marginTop: '10px', display: 'flex', padding: '10px 15px', border: '1px solid red', backgroundColor: '#E80071', color: '#FFFFFF', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/makeup')}>Make Up</Typography>
                            {/* <Icon icon="ic:sharp-plus" width="20" height="20" style={{ marginLeft: 'auto' }} /> */}

                        </Grid>
                        {/* <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid lightgrey', color: '#E80071', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>Face</Typography>

                        </Grid> */}
                        <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#E80071', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                            <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/face/faceprimer')}>Face Primer</Typography>

                        </Grid>
                        <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#E80071', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                            <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/face/concealer')}>Concealer</Typography>

                        </Grid>
                        <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#E80071', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                            <Typography sx={{ fontWeight: 550, fontSize: '15px' }} onClick={()=>navigate('/face/foundation')}>Foundation</Typography>

                        </Grid>
                        {catData.map((item) => (
                            <>
                                <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#000000', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                                    <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>{item.n}</Typography>

                                </Grid>
                            </>
                        ))}

                        <Grid sx={{  display: 'flex', padding: '10px 15px', border: '1px solid red', backgroundColor: '#E80071', color: '#FFFFFF', alignItems: 'center' }}>
                            <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>Skin</Typography>
                            {/* <Icon icon="ic:sharp-plus" width="20" height="20" style={{ marginLeft: 'auto' }} /> */}

                        </Grid>

                        {skinData.map((item) => (
                            <>
                                <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#000000', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                                    <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>{item.n}</Typography>

                                </Grid>
                            </>
                        ))}

                    </>
                )}
                {tabValue === 1 && (

                    <>
                    {brandData.map((item) => (
                        <>
                         <Grid sx={{ display: 'flex', padding: '10px 15px', borderBottom: '1px solid white', color: '#000000', alignItems: 'center', backgroundColor: '#EEEEEE' }}>
                        <Typography sx={{ fontWeight: 550, fontSize: '15px' }}>{item.n}</Typography>

                    </Grid>
                        </>
                    ))}
                    </>
                   

                )}

            </Drawer>


        



        </>
    );
}

export default Navbar;





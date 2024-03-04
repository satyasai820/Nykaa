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




const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const [tabValue, setTabValue] = useState(0);
    const [expanded, setExpanded] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const navigate = useNavigate();

    const token = localStorage.getItem('accessToken');
    const Name = localStorage.getItem('DisplayName');
    console.log('this is the name im nav bar', Name);
    console.log("this is the token in nav bar ", token)

    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
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
    return (
        <>

            <AppBar sx={{ backgroundColor: 'white', marginTop: '30px', }}>
                <Grid container sx={{ justifyContent: 'center', }} >
                    <Grid container sx={{ width: { lg: '70%', xl: '60%' }, alignItems: 'center', display: 'flex' }} >
                        <Grid sx={{ marginRight: { xs: '5px', sm: '10px' }, marginLeft: { xs: '5px', sm: '10px' }, display: { xs: 'block', md: 'none', color: 'black' } }}>
                            <Icon onClick={handleOpen} icon="el:lines" width="20" height="20" />
                        </Grid>
                        <Grid sx={{ cursor: 'pointer', }} >
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
                            <Typography sx={{color:'red'}} >{Name}</Typography><Icon icon="bxs:user" width="25" height="25" style={{color:'black'}} />
                            </>
                            ): (
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
                                      <MenuItem > <Typography onClick={()=> navigate('/signup')} sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 30px', borderRadius: '5px', display: 'flex', alignItems: 'center',  }}> Sign in with mobile/ Email <Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', paddingLeft: '10px' }} /> </Typography> </MenuItem>
                                      <MenuItem> <Typography sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 65px', borderRadius: '5px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}> <Icon icon="devicon:google" width="15" height="15" style={{ marginRight: '5px' }} /> Google<Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', marginLeft: '20px' }} /> </Typography> </MenuItem>
                                  </Menu>
                                  </>
                            )}
                          
                        </Grid>
                        <Grid sx={{ marginLeft: 'auto', marginRight: '10px' }}>
                            <Icon icon="iconamoon:shopping-bag-light" color="black" width="25" height="25" />
                        </Grid>
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
                                <MenuItem> <Typography onClick={()=> navigate('/signup')} sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 30px', borderRadius: '5px', display: 'flex', alignItems: 'center', }}> Sign in with mobile/ Email <Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', paddingLeft: '10px' }} /> </Typography> </MenuItem>
                                <MenuItem> <Typography sx={{ fontSize: '11px', color: '#E80071', fontWeight: 'bold', border: '1px solid lightgrey', padding: '8px 65px', borderRadius: '5px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}> <Icon icon="devicon:google" width="15" height="15" style={{ marginRight: '5px' }} /> Google<Icon icon="ph:arrow-right" width="15" height="15" style={{ color: '#E80071', marginLeft: '20px' }} /> </Typography> </MenuItem>
                            </Menu>
                        </Grid>

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

            <Drawer anchor="left" open={isDrawerOpen} onClose={handleClose}>
                <Tabs value={tabValue} onChange={handleTabChange}>
                    <Tab label="Categories" />
                    <Tab label="Brands" />
                </Tabs>
                {tabValue === 0 && (
                    <Accordion expanded={expanded} onChange={handleExpansion}
                        sx={{ border: '1px solid lightgrey', boxShadow: 'none', borderRadius: 'none', '& .MuiAccordionSummary-content': { alignItems: 'center' }, '& .MuiIconButton-root': { color: 'white' }, }}>
                        <AccordionSummary sx={{ '&:hover': { backgroundColor: '#E80071', color: 'white' } }} expandIcon={<Icon icon="basil:plus-outline" color='black' width="25" height="25" />} aria-controls="panel1-content" id="panel1-header">
                            <Typography >Make Up</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography >Hello</Typography>
                            <Typography>Hello</Typography>
                            <Typography> Hello </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}
                {tabValue === 1 && (
                    <Accordion
                        expanded={expanded}
                        onChange={handleExpansion}
                        sx={{
                            border: '1px solid lightgrey',
                            boxShadow: 'none',
                            borderRadius: 'none',
                            '& .MuiAccordionSummary-content': { alignItems: 'center' },
                            '& .MuiIconButton-root': { color: 'white' },
                        }}
                    >
                        <AccordionSummary sx={{ '&:hover': { backgroundColor: '#E80071', color: 'white' } }} expandIcon={<Icon icon="basil:plus-outline" color='black' width="25" height="25" />} aria-controls="panel1-content" id="panel1-header">
                            <Typography >Make Up</Typography>
                        </AccordionSummary>
                        <AccordionDetails >
                            <Typography >Hello</Typography>
                            <Typography>
                                Hello
                            </Typography>
                            <Typography>
                                Hello
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )}

            </Drawer>
        </>
    );
}

export default Navbar;






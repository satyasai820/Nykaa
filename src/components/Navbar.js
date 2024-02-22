import React, { useState } from "react";
import { AppBar, Button, Grid, Input, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import {Drawer} from "@mui/material";

import InputAdornment from '@mui/material/InputAdornment';



const Navbar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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
                    <Grid container sx={{ width:{lg:'70%',xl:'60%'} , border:'1px solid red',  alignItems: 'center', display: 'flex' }} >
                        <Grid sx={{ marginRight:{xs:'2vmin', md:'0px'}}} >
                            <img src="https://cdn.iconscout.com/icon/free/png-256/free-nykaa-3384872-2822953.png?f=webp" alt="logo" width={60} height={60} />
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', display:{xs:'none', md:'block'} }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Categories</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px',  display:{xs:'none', md:'block'} }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Brands</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px' , display:{xs:'none', md:'block'} }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Luxe</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px',  display:{xs:'none', md:'block'} }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Nykaa Fashion</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px',  display:{xs:'none', md:'block'}, marginRight:{md:'18%',lg:'17%',xl:'10%'}  }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Beauty Advice</Typography>
                        </Grid>
                        <Box sx={{ flexGrow: 1, width:{}  }}>
                            <Input
                                placeholder="Search for Nykaa"
                                startAdornment={
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                }
                                sx={{
                                    // width:{xs:'65vmin',},
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
                            <Button variant="contained" sx={{backgroundColor:'#E80071', textTransform:'none', fontSize:'11px', fontWeight:'bold', borderRadius:'5px', marginRight:'30px', display:{xs:'none', md:'block'}}}>Sign in</Button>
                        </Grid>
                        <Grid sx={{ marginLeft: 'auto', display:{xs:'none',md:'block'} }}>
                            <Icon icon="iconamoon:shopping-bag-light" color="black" width="25" height="25" />
                        </Grid>
                            <Grid sx={{ marginLeft: 'auto', marginRight:{xs:'5px',sm:'10px'}, display:{xs:'block',md:'none', color:'black'} }}>
                            <Icon onClick={handleOpen} icon="el:lines" width="20" height="20" />
                            </Grid>

                    </Grid>

                </Grid>
            </AppBar>

            <Drawer anchor="right" open={isDrawerOpen} onClose={handleClose}>
                <Grid sx={{ marginLeft: '20px', marginTop:'10px' }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold',fontSize:'20px', border:'1px solid red', '&:hover': { color: '#E80071' } }}>Categories</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px' }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Brands</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px' }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Luxe</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px' }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Nykaa Fashion</Typography>
                        </Grid>
                        <Grid sx={{ marginLeft: '20px', marginRight:{md:'18%',lg:'17%',xl:'10%'}  }}>
                            <Typography variant="p" sx={{ fontWeight: 'bold', '&:hover': { color: '#E80071' } }}>Beauty Advice</Typography>
                        </Grid>
            </Drawer>
        </>
    );
}

export default Navbar;






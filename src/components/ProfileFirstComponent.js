import { Grid } from "@mui/material";
import React, { useState } from "react";

import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Icon } from "@iconify/react";
import ProfileTabOneComponent from "./ProfileTabOneComponent";



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const ProfileFirstComponent = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };



    // const tabsData = [{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'0' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'1' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'2' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'3' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'4' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'' },]

    return (
        <>
            <Grid container sx={{ justifyContent: 'center', marginTop: { xs: '145px', sm: '100px', md: '2px' } }}>
                <Grid sx={{ width: { xs: '99%', sm: '90%,', md: '80%', lg: '65%' }, border: '2px solid red' }}>
                    <Box
                        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 290, border: '1px solid red', }}
                    >
                        <Tabs
                            orientation="vertical"
                            variant="scrollable"
                            value={value}
                            onChange={handleChange}
                            aria-label="Vertical tabs example"
                            indicatorColor="red"
                            textColor="#E80071"
                            sx={{ border: '1px solid lightgrey', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }}
                        >
                                    <Tab sx={{
                                        fontSize: '12px', textTransform: 'none', borderBottom: '1px solid lightgrey',color:'grey',
                                        '&.Mui-selected': {
                                            color: '#E80071',
                                            borderRight: '3px solid #E80071',
                                            cursor: 'pointer',
                                            fontWeight: 'bold'

                                        },
                                    }} label={
                                        <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto',paddingRight:{xs:'0px',sm:'90px'} }}>
                                            <Icon icon='iconamoon:profile-circle-fill' width="15" height="15" />
                                            <span style={{ marginLeft: '5px',  }}>My Profile</span>
                                        </div>
                                    } {...a11yProps(0)} />

                            <Tab sx={{
                                fontSize: '12px', textTransform: 'none', borderBottom: '1px solid lightgrey',color:'grey',
                                '&.Mui-selected': {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'

                                },
                            }} label={
                                <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
                                <Icon icon='ion:wallet-outline' width="15" height="15" />
                                <span style={{ marginLeft: '5px'}}>My Wallet</span>
                            </div>
                            } {...a11yProps(1)} />
                            <Tab sx={{
                                fontSize: '12px', textTransform: 'none', borderBottom:'1px solid lightgrey',color:'grey',
                                '&.Mui-selected': {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'

                                },
                            }} label={
                                <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
                                <Icon icon='fontisto:truck' width="15" height="15" />
                                <span style={{ marginLeft: '5px' }}>My Order</span>
                            </div>
                            }{...a11yProps(2)} />
                            <Tab sx={{
                                fontSize: '12px', textTransform: 'none',  borderBottom: '1px solid lightgrey',color:'grey',
                                '&.Mui-selected': {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'

                                },
                            }} label={
                                <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
                                <Icon icon='icon-park-solid:like' width="15" height="15" />
                                <span style={{ marginLeft: '5px' }}>My Wishlist</span>
                            </div>
                            }{...a11yProps(3)} />
                            <Tab sx={{
                                fontSize: '12px', textTransform: 'none',  borderBottom: '1px solid lightgrey',color:'grey',
                                '&.Mui-selected': {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'

                                },
                            }} label={
                                <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
                                <Icon icon='fluent:payment-48-filled' width="15" height="15" />
                                <span style={{ marginLeft: '5px'}}>My Saved Payment</span>
                            </div>
                            } {...a11yProps(4)} />
                            <Tab sx={{
                                fontSize: '12px', textTransform: 'none',  borderBottom: '1px solid lightgrey',color:'grey',
                                '&.Mui-selected': {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                    cursor: 'pointer',
                                    fontWeight: 'bold'

                                },
                            }} label={
                                <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
                                <Icon icon='icons8:shutdown' width="15" height="15" />
                                <span style={{ marginLeft: '5px'}}>Log Out</span>
                            </div>
                            } {...a11yProps(5)} />
                        </Tabs>
                        <TabPanel  value={value} index={0}>
                            <ProfileTabOneComponent />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            Item Two 
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            Item Three
                        </TabPanel>
                        <TabPanel value={value} index={3}>
                            Item Four
                        </TabPanel>
                        <TabPanel value={value} index={4}>
                            Item Five
                        </TabPanel>
                        <TabPanel value={value} index={5}>
                            Item Six
                        </TabPanel>
                        <TabPanel value={value} index={6}>
                            Item Seven
                        </TabPanel>

                    </Box>
                </Grid>

            </Grid>
        </>
    );
}

export default ProfileFirstComponent;





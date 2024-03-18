


import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import ProfileTabOneComponent from "./ProfileTabOneComponent";
import { Icon } from "@iconify/react";
import ProfileTabsSecondComponent from "./ProfileTabsSecondComponent";
import ProfileTabThirdComponent from "./ProfileTabThirdComponent";



const ProfileFirstComponent = () => {

    const [displayData, setDisplayData] = useState(null);
    const [selected, setSelected] = useState(null);

    useEffect(() => (
        handleData('profile')
    ), []);

    const handleData = (item) => {
        console.log('yeah clicked')
        setSelected(item);
        setDisplayData(<ProfileTabOneComponent />)

    }
    const handleDataTab2 = (item) => {
        console.log('yeah clicked')
        setSelected(item);
        setDisplayData(<ProfileTabsSecondComponent />)

    }
    const handleDataTab3 = (item) => {
        setSelected(item);
        setDisplayData(<ProfileTabThirdComponent />);
    }

    const handleDataTab4 = (item) => {
        setSelected(item);
        setDisplayData('This is 4th Tab.....')
    }

    const handleDataTab5 = (item) => {
        setSelected(item);
        setDisplayData('log out tab.....')
    }

    return (
        <>

            <Grid container sx={{  justifyContent: 'center', marginTop: {xs:'160px', sm:'120px', md:'20px'} }}>
                <Grid sx={{ width:{xs:'90%', sm:'95%',md:'85%', lg:'60%'} , display:{xs:'block',sm:'flex'},   }}>
                    <Grid container  sx={{  width:{xs:'100%',sm:'20%', md:'30%',lg:'25%'}, margin:{xs:'auto', sm:'0px'}, marginBottom:{xs:'20px',sm:'0px'}}}>
                        <Grid sx={{ width: '100%',}}>
                            <Grid onClick={() => handleData('profile')} sx={{
                                display: 'flex', color: 'grey', fontWeight: 220, alignItems: 'center', padding: '12px', borderBottom: '1px solid lightgrey', cursor: 'pointer', justifyContent:{xs:'center', sm:'start'}, backgroundColor:'#FFFFFF',
                                ...(selected === 'profile' && {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                })
                            }}>

                                <Icon icon='iconamoon:profile-circle-fill' width="15" height="15" />
                                <Typography sx={{ fontSize: '12px', paddingLeft: '5px', fontWeight: selected === 'profile' ? 'bold' : 'normal' }}>My Profile</Typography>
                            </Grid>
                            <Grid onClick={() => handleDataTab2('wallet')} sx={{
                                display: 'flex', color: 'grey', fontWeight: 220, alignItems: 'center', padding: '12px', borderBottom: '1px solid lightgrey', cursor: 'pointer',justifyContent:{xs:'center', sm:'start'},backgroundColor:'#FFFFFF',
                                ...(selected === 'wallet' && {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                })
                            }}>

                                <Icon icon='ion:wallet-outline' width="15" height="15" />
                                <Typography sx={{ fontSize: '12px', paddingLeft: '5px', fontWeight: selected === 'wallet' ? 'bold' : 'normal' }}>My Wallet</Typography>
                            </Grid>
                            <Grid onClick={() => handleDataTab3('order')} sx={{
                                display: 'flex', color: 'grey', fontWeight: 220, alignItems: 'center', padding: '12px', borderBottom: '1px solid lightgrey', cursor: 'pointer',justifyContent:{xs:'center', sm:'start'},backgroundColor:'#FFFFFF',
                                ...(selected === 'order' && {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                })
                            }}>

                                <Icon icon='fontisto:truck' width="15" height="15" />
                                <Typography sx={{ fontSize: '12px', paddingLeft: '5px', fontWeight: selected === 'order' ? 'bold' : 'normal' }}>My Order </Typography>
                            </Grid>
                            <Grid onClick={() => handleDataTab4('wishlist')} sx={{
                                display: 'flex', color: 'grey', fontWeight: 220, alignItems: 'center', padding: '12px', borderBottom: '1px solid lightgrey', cursor: 'pointer',justifyContent:{xs:'center', sm:'start'},backgroundColor:'#FFFFFF',
                                ...(selected === 'wishlist' && {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                })
                            }}>

                                <Icon icon='icon-park-solid:like' width="15" height="15" />
                                <Typography sx={{ fontSize: '12px', paddingLeft: '5px', fontWeight: selected === 'wishlist' ? 'bold' : 'normal' }}>My Wishlist </Typography>
                            </Grid>
                            <Grid onClick={() => handleDataTab5('save')} sx={{
                                display: 'flex', color: 'grey', fontWeight: 220, alignItems: 'center', padding: '12px', borderBottom: '1px solid lightgrey', cursor: 'pointer',justifyContent:{xs:'center', sm:'start'},backgroundColor:'#FFFFFF',
                                ...(selected === 'save' && {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                })
                            }}>

                                <Icon icon='fluent:payment-48-filled' width="15" height="15" />
                                <Typography sx={{ fontSize: '12px', paddingLeft: '5px', fontWeight: selected === 'save' ? 'bold' : 'normal' }}>My Saved Payment </Typography>
                            </Grid>
                            <Grid onClick={() => handleDataTab5('logout')} sx={{
                                display: 'flex', color: 'grey', fontWeight: 220, alignItems: 'center', padding: '12px', borderBottom: '1px solid lightgrey', cursor: 'pointer',justifyContent:{xs:'center', sm:'start'},backgroundColor:'#FFFFFF',boxShadow:'0px 10px 15px rgba(0, 0, 0, 0.2)',
                                ...(selected === 'logout' && {
                                    color: '#E80071',
                                    borderRight: '3px solid #E80071',
                                })
                            }}>

                                <Icon icon='icons8:shutdown' width="15" height="15" />
                                <Typography sx={{ fontSize: '12px', paddingLeft: '5px', fontWeight: selected === 'logout' ? 'bold' : 'normal' }}>Log Out  </Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                    <Grid  sx={{  width:{xs:'100%',sm:'80%',md:'70%',lg:'75%'} }}>
                        {displayData}
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default ProfileFirstComponent;







// import { Grid } from "@mui/material";
// import React, { useState } from "react";

// import PropTypes from 'prop-types';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import { Icon } from "@iconify/react";
// import ProfileTabOneComponent from "./ProfileTabOneComponent";



// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`vertical-tabpanel-${index}`}
//             aria-labelledby={`vertical-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box sx={{ p: 3 }}>
//                     <Typography>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.number.isRequired,
//     value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//     return {
//         id: `vertical-tab-${index}`,
//         'aria-controls': `vertical-tabpanel-${index}`,
//     };
// }


// const ProfileFirstComponent = () => {

//     const [value, setValue] = useState(0);

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//     };



//     // const tabsData = [{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'0' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'1' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'2' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'3' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'4' },{ name: 'My Profile', icon: 'iconamoon:profile-circle-fill',n:'' },]

//     return (
//         <>
//             <Grid container sx={{ justifyContent: 'center', marginTop: { xs: '145px', sm: '100px', md: '2px' } }}>
//                 <Grid sx={{ width: { xs: '99%', sm: '90%,', md: '80%', lg: '65%' }, border: '2px solid red' }}>
//                     <Box
//                         sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 290, border: '1px solid red', }}
//                     >
//                         <Tabs
//                             orientation="vertical"
//                             variant="scrollable"
//                             value={value}
//                             onChange={handleChange}
//                             aria-label="Vertical tabs example"
//                             indicatorColor="red"
//                             textColor="#E80071"
//                             sx={{ border: '1px solid lightgrey', boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.1)' }}
//                         >
//                                     <Tab sx={{
//                                         fontSize: '12px', textTransform: 'none', borderBottom: '1px solid lightgrey',color:'grey',
//                                         '&.Mui-selected': {
//                                             color: '#E80071',
//                                             borderRight: '3px solid #E80071',
//                                             fontWeight: 'bold'

//                                         },
//                                     }} label={
//                                         <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto',paddingRight:{xs:'0px',sm:'90px'} }}>
//                                             <Icon icon='iconamoon:profile-circle-fill' width="15" height="15" />
//                                             <span style={{ marginLeft: '5px',  }}>My Profile</span>
//                                         </div>
//                                     } {...a11yProps(0)} />

//                             <Tab sx={{
//                                 fontSize: '12px', textTransform: 'none', borderBottom: '1px solid lightgrey',color:'grey',
//                                 '&.Mui-selected': {
//                                     color: '#E80071',
//                                     borderRight: '3px solid #E80071',
//                                     cursor: 'pointer',
//                                     fontWeight: 'bold'

//                                 },
//                             }} label={
//                                 <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
//                                 <Icon icon='ion:wallet-outline' width="15" height="15" />
//                                 <span style={{ marginLeft: '5px'}}>My Wallet</span>
//                             </div>
//                             } {...a11yProps(1)} />
//                             <Tab sx={{
//                                 fontSize: '12px', textTransform: 'none', borderBottom:'1px solid lightgrey',color:'grey',
//                                 '&.Mui-selected': {
//                                     color: '#E80071',
//                                     borderRight: '3px solid #E80071',
//                                     cursor: 'pointer',
//                                     fontWeight: 'bold'

//                                 },
//                             }} label={
//                                 <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
//                                 <Icon icon='fontisto:truck' width="15" height="15" />
//                                 <span style={{ marginLeft: '5px' }}>My Order</span>
//                             </div>
//                             }{...a11yProps(2)} />
//                             <Tab sx={{
//                                 fontSize: '12px', textTransform: 'none',  borderBottom: '1px solid lightgrey',color:'grey',
//                                 '&.Mui-selected': {
//                                     color: '#E80071',
//                                     borderRight: '3px solid #E80071',
//                                     cursor: 'pointer',
//                                     fontWeight: 'bold'

//                                 },
//                             }} label={
//                                 <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
//                                 <Icon icon='icon-park-solid:like' width="15" height="15" />
//                                 <span style={{ marginLeft: '5px' }}>My Wishlist</span>
//                             </div>
//                             }{...a11yProps(3)} />
//                             <Tab sx={{
//                                 fontSize: '12px', textTransform: 'none',  borderBottom: '1px solid lightgrey',color:'grey',
//                                 '&.Mui-selected': {
//                                     color: '#E80071',
//                                     borderRight: '3px solid #E80071',
//                                     cursor: 'pointer',
//                                     fontWeight: 'bold'

//                                 },
//                             }} label={
//                                 <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
//                                 <Icon icon='fluent:payment-48-filled' width="15" height="15" />
//                                 <span style={{ marginLeft: '5px'}}>My Saved Payment</span>
//                             </div>
//                             } {...a11yProps(4)} />
//                             <Tab sx={{
//                                 fontSize: '12px', textTransform: 'none',  borderBottom: '1px solid lightgrey',color:'grey',
//                                 '&.Mui-selected': {
//                                     color: '#E80071',
//                                     borderRight: '3px solid #E80071',
//                                     cursor: 'pointer',
//                                     fontWeight: 'bold'

//                                 },
//                             }} label={
//                                 <div style={{ display: 'flex', alignItems: 'start', marginRight: 'auto', }}>
//                                 <Icon icon='icons8:shutdown' width="15" height="15" />
//                                 <span style={{ marginLeft: '5px'}}>Log Out</span>
//                             </div>
//                             } {...a11yProps(5)} />
//                         </Tabs>
//                         <TabPanel  value={value} index={0}>
//                             <ProfileTabOneComponent />
//                         </TabPanel>
//                         <TabPanel value={value} index={1}>
//                             Item Two
//                         </TabPanel>
//                         <TabPanel value={value} index={2}>
//                             Item Three
//                         </TabPanel>
//                         <TabPanel value={value} index={3}>
//                             Item Four
//                         </TabPanel>
//                         <TabPanel value={value} index={4}>
//                             Item Five
//                         </TabPanel>
//                         <TabPanel value={value} index={5}>
//                             Item Six
//                         </TabPanel>
//                         <TabPanel value={value} index={6}>
//                             Item Seven
//                         </TabPanel>

//                     </Box>
//                 </Grid>

//             </Grid>
//         </>
//     );
// }

// export default ProfileFirstComponent;






import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MakeUp from './MakeUp';
import Skin from './Skin';
import Hair from './Hair';
import Appliances from './Appliances';
import Bath from './Bath';
import Natural from './Natural';
import Mom from './Mom';
import Health from './Health';
import Men from './Men';
import Fragrance from './Fragrance';
import Lingerie from './Lingerie';
import { useNavigate } from 'react-router-dom';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
        style={{
      position:"absolute",
        backgroundColor:"white",
        
        zIndex:4,
      }}
    >
      {value === index && (
        <Box sx={{ px: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


 const Appbar3 = () => {
  const [value, setValue] = React.useState(null);

  const navigate = useNavigate();
  const handleChange = ( newValue) => {
    setValue(newValue);
  };
  const handleTabLeave = () => {
    setValue(null);
  }

  const loopingData = [{lable:'Skin', index:1,number:'-35px'},{lable:'Hair', index:2,number:'-35px'},{lable:'Appliance', index:3,number:'-20px'},{lable:'Bath & Body', index:4,number:'-10px'},{lable:'Natural', index:5,number:'-10px'},{lable:'Mom & Baby', index:6,number:'-10px'},{lable:'Health wellness', index:7,number:'-10px'},{lable:'Men', index:8,number:'-10px'},{lable:'Fragrance', index:9,number:'-10px'},{lable:'Lingerie & Accessories', index:10,number:'-10px'},]

  return (
    <>
    <Box sx={{backgroundColor: 'white', marginBottom:'5px'}}>
    <Box sx={{ width:{md:'100%',lg:'65%'} , alignItems:'center',marginTop:{md:'95px'}, display:{xs:'none', md:'block'},  backgroundColor:'white',margin:'auto', }} onMouseLeave={() => handleTabLeave(-1)}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="red" aria-label="basic tabs example">

        <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-10px' , '&:hover': {
            color: '#E80071',
            borderBottom: '3px solid #E80071',
            cursor: 'pointer',
            
          }, }} label='Make up' {...a11yProps(0)} onMouseEnter={() => handleChange(0)} onClick={()=> navigate('/makeup')} />
            {loopingData.map((item) => (
          <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:item.number , '&:hover': {
            color: '#E80071',
            borderBottom: '3px solid #E80071',
            cursor: 'pointer',
            
          }, }} label={item.lable} {...a11yProps(item.index)} onMouseEnter={() => handleChange(item.index)} />
                
            ))}
            
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0} >
        <MakeUp />
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Skin />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <Hair />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
       <Appliances />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
       <Bath />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
       <Natural />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
       <Mom/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
       <Health />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
       <Men />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
       <Fragrance />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={10}>
       <Lingerie />
      </CustomTabPanel>
    </Box>
    </Box>
    </>
    
  );
}

export default Appbar3
     
  







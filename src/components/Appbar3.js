
import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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
  const [value, setValue] = React.useState(-1);

  const handleChange = ( newValue) => {
    setValue(newValue);
  };
  const handleTabLeave = () => {
    setValue(-1);
  }

  const loopingData = [{lable:'Make up', index:0, number:'-10px'},{lable:'Skin', index:1,number:'-35px'},{lable:'Hair', index:2,number:'-35px'},{lable:'Appliance', index:3,number:'-20px'},{lable:'Bath & Body', index:4,number:'-10px'},{lable:'Natural', index:5,number:'-10px'},{lable:'Mom & Baby', index:6,number:'-10px'},{lable:'Health wellness', index:7,number:'-10px'},{lable:'Men', index:8,number:'-10px'},{lable:'Fragrance', index:9,number:'-10px'},{lable:'Lingerie & Accessories', index:10,number:'-10px'},]

  return (
    <>
    <Box sx={{ width:{md:'100%',lg:'65%'} , alignItems:'center', marginTop:{md:'95px', backgroundColor:'white',margin:'auto' }}} onMouseLeave={() => handleTabLeave(-1)}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', border:'1px solid green',  }}>
        <Tabs value={value} onChange={handleChange} indicatorColor="red" aria-label="basic tabs example">
            {loopingData.map((item) => (
          <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:item.number , '&:hover': {
            color: '#E80071',
            borderBottom: '3px solid #E80071',
            cursor: 'pointer',
            
          }, }} label={item.lable} {...a11yProps(item.index)} onMouseEnter={() => handleChange(item.index)} />
                
            ))}
            
        {/* //   <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-10px' }} label="Make up " {...a11yProps(0)} onMouseEnter={() => handleChange(0)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-35px'  }} label="Skin" {...a11yProps(1)} onMouseEnter={() => handleChange(1)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-35px' }} label="Hair" {...a11yProps(2)} onMouseEnter={() => handleChange(2)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-20px'  }} label="Appliance" {...a11yProps(3)} onMouseEnter={() => handleChange(3)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-10px'  }} label="Bath & Body" {...a11yProps(4)} onMouseEnter={() => handleChange(4)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none', marginLeft:'-10px' }} label="Natural" {...a11yProps(5)} onMouseEnter={() => handleChange(5)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none' , marginLeft:'-10px'  }} label="Mom & Baby" {...a11yProps(6)} onMouseEnter={() => handleChange(6)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none' , marginLeft:'-10px' }} label="Health wellness" {...a11yProps(7)} onMouseEnter={() => handleChange(7)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none' ,marginLeft:'-10px'  }} label="Men" {...a11yProps(8)} onMouseEnter={() => handleChange(8)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none' , marginLeft:'-9px'  }} label="Fragrance" {...a11yProps(9)} onMouseEnter={() => handleChange(9)} />
        //   <Tab sx={{fontSize:'12px', textTransform: 'none' , marginLeft:'-10px'  }} label="Lingerie & Accessories" {...a11yProps(10)} onMouseEnter={() => handleChange(10)} /> */}
          
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        Item One
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        Item Two
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        Item Three
      </CustomTabPanel>
    </Box>
    </>
  );
}

export default Appbar3
     
  







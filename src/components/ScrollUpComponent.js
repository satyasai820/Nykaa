


import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Icon } from '@iconify/react';

const ScrollUpComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const scrollStep = -window.scrollY / (500 / 15); 
    const scrollInterval = setInterval(() => {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 15);
  };

  return (
    <Grid sx={{ position: 'sticky', bottom: 0, textAlign: 'end' , padding:'0px 10px 20px 0px', display:{xs:'none', md:'block'}}}>
      {isVisible && (
        <Icon onClick={scrollToTop}  icon="prime:arrow-up" width="25" height="25" style={{ color: 'grey', border:'1px solid #EEEEEE', padding:'5px', borderRadius:'30px' , backgroundColor:'#FFFFFF', }} />
      )}
    </Grid>
  );
};

export default ScrollUpComponent;

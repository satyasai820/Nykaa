import { createTheme } from "@mui/material";


const theme = createTheme({
    palette:{
        background:{
            default:'#FFFFFF'
        }
    },
})

theme.typography.p = {
    fontFamily: 'sans-serif',
    fontSize:'12px',
    color:'#000000',
    fontWeight:200,
}

theme.typography.h1= {
    fontFamily:'"Arial", sans-serif',
    fontSize:'25px',
}

export default theme;
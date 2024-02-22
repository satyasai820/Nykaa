import { createTheme } from "@mui/material";


const theme = createTheme({
    palette:{
        background:{
            default:'#fffff'
        }
    },
})

theme.typography.p = {
    fontFamily: 'sans-serif',
    fontSize:'12px',
    color:'#000000',
    fontWeight:200,
}

export default theme;
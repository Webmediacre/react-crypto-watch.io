
// react import
import React from 'react';

// dom imports
import { useNavigate } from 'react-router-dom';

// AppBar from https://v4.mui.com/components/app-bar/#app-bar
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider, Box, Grid, Link } from '@material-ui/core'; 

// import state CryptoState from CrytoContext
import { CryptoState } from '../CrytoContext';  

import ButtonLinks from './ButtonLinks'; 

import Marquee from './Marquee';

const useStyles = makeStyles(() => ({  
    title: {
        flex: 1,
        color: '#f7931a', 
        // backgroundColor:'#000', 
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
})); 

const Header = () => {

    // used with className
    const classes = useStyles();
    // useHistory() is replaced by useNavigate() ;
    // const history = useNavigate(); 
    const navigate = useNavigate(); 

    const { currency, setCurrency } = CryptoState();
    console.log(currency); 
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#f7931a',   
            },
            type: 'dark',
        },
    }); 

    return (

    <ThemeProvider theme={darkTheme}> 

        <AppBar color='transparent' position='static' style={{ backgroundColor: '#000' }}> 
            <Container>  
                <Toolbar>     
                    <Typography onClick={() => navigate('/')} className={classes.title} variant='h6'> Crypto Watch </Typography>
                    <ButtonLinks />
                    <Select defaultValue={'GBP'} variant='outlined' style={{ display: 'none', color: '#f7931a', width: 100, height: 40, marginRight: 15}} value={currency} onChange={(e) => setCurrency(e.target.value)}>   
                        <MenuItem  value={'GBP'}> GBP </MenuItem>
                        <MenuItem value={'EUR'}> EUR </MenuItem>   
                        <MenuItem value={'USD'}> USD </MenuItem> 
                    </Select> 
                </Toolbar>
            </Container>
        </AppBar>

 
        <header style={{ display: 'column', width: '100%', fontFamily: 'Montserrat', }}> 

            <Box px={{ xs: 1, sm: 10 }} py={{ xs: 5, sm: 1 }}  bgcolor='#f7931a' color='white'>

                <Container maxWidth="lg" > 

                    <Grid container spacing={5} style={{ display: 'column', justifyContent: 'right' }}>

                        <Grid item xs={1} sm={7} > 
                            <Marquee />  
                        </Grid>

                        <Grid item xs={1} sm={3}> 
                            <Box> 
                            <p style={{marginTop: 8, justifyContent: 'right'}}>  Select the dropdown and change  </p>
                            
                            </Box>
                        </Grid>
                        
                        <Grid item xs={12} sm={2}> 
                            <Box> 
                            <Select defaultValue={'GBP'} variant='outlined' style={{ color: '#fff', width: 100, height: 40, marginRight: 15}} value={currency} onChange={(e) => setCurrency(e.target.value)}>   
                                <MenuItem value={'GBP'}> GBP </MenuItem>
                                <MenuItem value={'EUR'}> EUR </MenuItem>   
                                <MenuItem value={'USD'}> USD </MenuItem> 
                            </Select> 
                            </Box>
                        </Grid>

                        
                    </Grid>


                </Container>

            </Box>

        </header>


    </ThemeProvider>   

    )

}

export default Header;
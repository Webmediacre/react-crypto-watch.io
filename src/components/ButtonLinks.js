
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { ThemeContext } from '../contexts/theme';
import Button from '@material-ui/core/Button'; 

import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
// import Icon from '@mui/material/Icon/Chip';
// https://mui.com/material-ui/icons/#size

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }, 
}));

const ButtonLinks = () => { 

    const classes = useStyles();

    const [ { theme, isDark }, toggleTheme ] = useContext(ThemeContext);
    console.log('theme', theme);

    return (  

        <div className={classes.root} style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            <Button variant='outlined' style={{ display: 'none' }}> Default </Button>
            <Button variant='outlined' style={{ display: 'none' }} color='primary'>
                Primary
            </Button> 
            <Button variant='outlined' style={{ display: 'none' }} color='secondary'>
                Secondary
            </Button>
            <Button variant='outlined' style={{ display: 'none' }} disabled>
                Disabled
            </Button>   
            <Button variant='' style={{ display: '', color: '#f7931a' }} color="primary" href='/KnownledgeBase'> 
                KnowledgeBase
            </Button> 
            <Button variant='' style={{ display: '', color: '#f7931a'  }} color="primary" href='https://opensea.io/assets?search[query]=Larry%20Soundz' target='_blank'> 
                NFT
            </Button>  
            <Button variant='' style={{ display: '', color: '#f7931a'  }} color="primary" href='https://www.linkedin.com/groups/13529929/' target='_blank'> 
                LinkedIn
            </Button> 
            <Button variant='' style={{ display: '', color: '#f7931a'  }} color="primary" href='https://www.youtube.com/watch?v=2uYuWiICCM0&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-' target='_blank'> 
                YouTube
            </Button> 
            <Button variant='' style={{ display: '', paddingTop: '15px' }} > 
                <a onClick={toggleTheme}>  
                    { isDark ? <NightlightIcon/>  : <LightModeIcon/> } 
                </a>
            </Button>

        </div>

    );

} 

export default ButtonLinks;
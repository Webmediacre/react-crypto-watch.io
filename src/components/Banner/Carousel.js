
// react import
import React, { useState, useEffect } from 'react';
// dom imports
import { Link } from 'react-router-dom';

// AppBar from https://v4.mui.com/components/app-bar/#app-bar
import { makeStyles } from '@material-ui/core'; 

import axios from 'axios';

import { CryptoState }  from '../../CrytoContext'; 

import { TrendingCoins } from '../../config/apis'; 

import AliceCarousel from 'react-alice-carousel';

import './carousel.css';

const useStyles = makeStyles((theme) => ({
carousel: {
    height: '50%',
    display: 'flex',
    alignItems: 'center', 
},
carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    cursor: 'pointer',
    textTransform: 'uppercase',
    color: 'white',
},
}));   

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
} 

const Carousel = () => { 

    const classes = useStyles();

    const [ trending, setTrending ] = useState([]);
    const { currency, symbol } = CryptoState();
    // fetch data that will get from TrendingCoins(currency)
    const fetchTrendingCoins = async () => {
        // pass const as data
        const { data } = await axios.get(TrendingCoins(currency)); // props 'currency'
        setTrending(data);
    }

    console.log(trending); // trending is the state variable 
    
    // useEffect when app loads
    useEffect(() => {
        fetchTrendingCoins(); // execute fetchTrendingCoins function
        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, [currency])
    
    const items = trending.map((coin) => {

        let profit = coin.price_change_percentage_24h >= 0;

        return (
            <Link className={classes.carouselItem} to={`/coins/${coin.id}`}>

            <div className='card'>
                <span className='left'>
                    <img src={coin.image} alt={coin.name} height='50' style={{ marginRight: 8, marginBottom: 5 }} />
                </span>
                <span className='symbol'> {coin.symbol} &nbsp;</span>
                <span className='right' style={{color: profit > 0 ? "rgb(14, 203, 129)" : "red", fontWeight: 300,}}> 
                            {profit && '+'} {coin.price_change_percentage_24h.toFixed(2)}% 
                </span> 
                <br />
                <span style={{fontSize: 22, fontWeight: 300, marginLeft: 5 }}> 
                    {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
                </span>

            </div>

                
            </Link> 
        )
    })
    
    const responsive = {
        0: {
            items: 2,
        },
        512: {  
            items: 4,
        },
    };

    return (

        <div className={classes.carousel}>  
            <AliceCarousel items={items} autoPlay mouseTracking infinite autoPlayInterval={1000} animationDuration={9000} disableDotsControls disableButtonsControls responsive={responsive} />
        </div>

    )

}

export default Carousel
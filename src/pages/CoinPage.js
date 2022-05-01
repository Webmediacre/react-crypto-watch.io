
// react import
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useParams } from 'react-router-dom';
import ReactHtmlParser from "react-html-parser"; // fix later
import CoinInfo from "../components/CoinInfo";
import { SingleCoin } from '../config/apis'; 
import { numberWithCommas } from "../components/CoinsTable";
import { CryptoState } from '../CrytoContext';  

import { Container, LinearProgress, makeStyles, Typography } from "@material-ui/core";

const CoinPage = () => {
 
  const { id } = useParams();
  const [ coin, setCoin ] = useState();

  const { currency, symbol } = CryptoState();

  const fetchCoin = async () => { 
    const { data } = await axios.get(SingleCoin(id));
    setCoin(data); // setCoin state to data
  }; 
  console.log(coin); // retrieve coin state as console.log

  useEffect(() => {
    fetchCoin(); // load function when app loads
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

    const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
    sidebar: {
      width: '30%',
      [theme.breakpoints.down('md')]: {
        width: '100%',
      },
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 25,
      borderRight: '1px solid grey',
    },
    heading: {
      fontWeight:'bold',
      marginBottom: 20,
      fontFamily: 'Montserrat',
    },
    description: {
      width: '100%',
      fontFamily: 'Montserrat',
      padding: 25,
      paddingBottom: 15,
      paddingTop: 0,
      textAlign: 'justify',
    },
    marketData: {
      alignSelf: 'start',
      padding: 25,
      paddingTop: 10,
      width: '100%',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        justifyContent: 'space-around',
      },
      [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center',
      },
      [theme.breakpoints.down('xs')]: {
        alignItems: 'start',
      }, 
    },
  }));

  const classes = useStyles();

  if (!coin) return <LinearProgress style={{ backgroundColor: "#f7931a" }} thickness={0.3} />; 

  return (
    
    <Container style={{textAlign: 'center'}}> 

    <div className={classes.container}>

      <div className={classes.sidebar}>

        <img src={coin.image.large} alt={coin.name} height='200' style={{ marginBottom: 20 }} />
        <Typography variant='h3' className={classes.heading}>
          {coin.name}
        </Typography>

        <Typography variant='subtitle1' className={classes.description}>
          {ReactHtmlParser(coin.description.en.split('. ')[0])}.
        </Typography>

        <div className={classes.marketData}>

          <span style={{ display: 'flex' }}>
            <Typography variant='h7' className={classes.heading}>
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h7' style={{ fontFamily: 'Montserrat', }}>
              {numberWithCommas(coin.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography variant='h7' className={classes.heading}>
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h7' style={{ fontFamily: 'Montserrat', }} >
              {symbol}{''}
              {numberWithCommas( coin.market_data.current_price[currency.toLowerCase()] )}
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography variant='h7' className={classes.heading}>
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h7' style={{ fontFamily: 'Montserrat', }} >
              {symbol}{' '} {numberWithCommas(coin.market_data.market_cap[currency.toLowerCase()].toString().slice(0, -6))}M
            </Typography>
          </span>

          <span style={{ display: 'flex' }}>
            <Typography variant='h7' className={classes.heading}>
              Liquidity Score:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h7' style={{ fontFamily: 'Montserrat', }} >
              {coin.liquidity_score}  
            </Typography> 
          </span>

          <span style={{ display: 'flex' }}>
            <Typography variant='h7' className={classes.heading}>
              Homepage:
            </Typography>
            &nbsp; &nbsp;
            <Typography variant='h7' style={{ fontFamily: 'Montserrat', }} >
              <a href={coin.links.homepage}> {coin.links.homepage} </a>  
            </Typography> 
          </span> 

        </div>

      </div>

        <CoinInfo coin={coin} /> 

    </div>
    
    <div style={{ width: '100%' }}> 
      <br />
      <coingecko-coin-compare-chart-widget coin-ids="bitcoin,ethereum,eos,ripple,litecoin" currency="usd" locale="en"></coingecko-coin-compare-chart-widget> 
    </div>
    
    <br />
    <br />
    <br />

  </Container>

  )

}

export default CoinPage;
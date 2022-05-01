
// react import
import React, { useState, useEffect } from 'react';

import { makeStyles } from "@material-ui/core/styles";

// dom imports
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import { CryptoState }  from '../CrytoContext';

import { CoinList } from '../config/apis'; 

import CoinConverterWidget from './CoinConverterWidget'; 

import { 
    createTheme, 
    Container, 
    ThemeProvider, 
    Typography, 
    TextField, 
    LinearProgress, 
    TableContainer, 
    Table, 
    TableHead, 
    TableRow, 
    TableCell, 
    TableBody 
    } from '@material-ui/core';

import Pagination from "@material-ui/lab/Pagination";
    
import moment from 'moment';

export function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CoinsTable = () => {

    const [ coins, setCoins ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ search, setSearch ] = useState('');
    const [page, setPage] = useState(1);

    const { currency, symbol } = CryptoState();
    const navigate = useNavigate(); 
  
    const useStyles = makeStyles({
        row: {
            backgroundColor: '#16171a',
            cursor: 'pointer',
            '&:hover': {
            backgroundColor: '#131111',
            },
            fontFamily: 'Montserrat',
            height: '10px'
        },
        pagination: { 
            '& .MuiPaginationItem-root': {
            color: '#f7931a',
            }, 
        },
    });

    const classes = useStyles(); // pass classes to useStyles()

    const fetchCoins = async () => {
        setLoading(true);
        // pass axios.get(CoinList(currency)); to destructured variable
        const { data } = await axios.get(CoinList(currency)); // get(CoinList(currency) by props currency
        setCoins(data); // coins, setCoins states
        setLoading(false); 
    }

    console.log(coins); 
    // useEffect when app loads 
    useEffect(() => {
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]); 
 
    const handleSearch = () => {
        return coins.filter((coin) =>
            coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search)
        )
    } 

    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#fff',
            },
            type: 'dark', 
        }, 
    });

    return (

        <ThemeProvider theme={darkTheme}>
            
            <Container style={{textAlign: 'center'}}>
                <Typography variant='h4' style={{ margin: 18, fontFamily: 'Montserrat'}}>
                    Cryptocurrency prices by Marketcap 
                </Typography> 
                
                <TextField label='Search Cryptocurrency with lowercase letters' variant='outlined' style={{ marginBottom: 20, width: '30%' }} onChange={(e) => setSearch(e.target.value)} />
                
                <TableContainer>
                    { 
                        loading ?  
                        (<LinearProgress style={{ backgroundColor: '#f7931a'}} thickness={0.5} />) : 
                        (
                        <Table>

                            <TableHead style={{ backgroundColor: '#f7931a'}}> 
                                <TableRow>
                                    {
                                        ['Coin', 'Price', '24h Change', 'Volumne', 'Market Cap', 'MrkCap Change'].map((head) => ( 
                                            <TableCell style={{ color: 'black', fontWeight: '700', fontFamily: 'Montserrat'}} key={head} align={head === 'Coin' ? '' : 'right'}>
                                                {head} 
                                            </TableCell>
                                        ))
                                    } 
                                </TableRow>
                            </TableHead>

                            <TableBody>

                                {handleSearch().slice((page - 1) * 10, (page -1) * 10 + 10).map((row) => { 

                                    const profit = row.price_change_percentage_24h > 0; 
                                    
                                        return (

                                            <TableRow onClick={() => navigate(`/coins/${row.id}`)} className={classes.row} key={row.name}>

                                                <TableCell component='th' scope='row' style={{ display: 'flex', gap: 15 }}> 
                                                    <img src={row.image} alt={row.name} height='27' style={{ marginBottom: 3 }} /> 
                                                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                        <span style={{ textTransform: 'uppercase', fontSize: 21 }}>
                                                            { row.symbol } - { row.name } 
                                                        </span>
                                                        <span style={{ display: 'none' }}> 
                                                            { row.name }
                                                        </span>
                                                    </div>
                                                </TableCell> 

                                                <TableCell align='right'>
                                                    {symbol}{''}
                                                    {numberWithCommas(row.current_price.toFixed(2))}
                                                </TableCell>

                                                <TableCell align='right' style={{ color: profit > 0 ? 'rgb(14, 203, 129)' : 'red', fontWeight: 500, }} >
                                                    {profit && '+'}
                                                    {row.price_change_percentage_24h.toFixed(2)}%
                                                </TableCell>

                                                <TableCell align='right'> 
                                                    {symbol}{' '}
                                                    {numberWithCommas(row.total_volume.toString().slice(0, -6))}M
                                                </TableCell>

                                                <TableCell align='right'>
                                                    {symbol}{' '}
                                                    {numberWithCommas(row.market_cap.toString().slice(0, -6))}M
                                                </TableCell> 

                                                <TableCell align='right' style={{ color: profit > 0 ? 'rgb(14, 203, 129)' : 'red', fontWeight: 500, }} >
                                                    {row.market_cap_change_percentage_24h.toFixed(2)}%
                                                </TableCell>

                                                <TableCell align='right' style={{ display: 'none' }}>  
                                                    {moment(row.last_updated).format('MMMM Do YYYY, h').slice(0, -8)} 
                                                </TableCell>

                                            </TableRow>

                                            )
                                        }
                                    )
                                
                                }
                            
                            </TableBody>

                        </Table> 
                        
                        )
                    }

                </TableContainer>

                <Pagination 
                style={ { padding: 20, width: '100%', display: 'flex', justifyContent: 'center', } } 
                classes={{ ul: classes.pagination }} 
                count={(handleSearch().length/10).toFixed(0)}
                onChange={(_, value) => { setPage(value); window.scroll(0, 450); }} 
                >  
                
                </Pagination>

            </Container> 
            
            <br />
            <br />
            <br />
            
            <Container style={{ display: '' }}> 
                <CoinConverterWidget /> 
            </Container>

        </ThemeProvider> 
        
    )

}

export default CoinsTable;
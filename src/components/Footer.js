
// react import
import React from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const Footer = () => {

    return (

        <footer style={{ fontFamily: 'Montserrat' }}>

            <Box px={{ xs: 3, sm: 10 }} py={{ xs: 5, sm: 10 }}  bgcolor='text.secondary' color='white'>

                <Container maxWidth="lg"> 

                    <Grid container spacing={5}>

                        <Grid item xs={12} sm={4}> 
                            <Box borderBottom={1}> Resources </Box>
                            <br /> 
                            <Box>
                                <Link href='/Knowledgebase' color='inherit'> Knowledgebase </Link>
                            </Box>  
                            <Box>
                                <Link href='/' color='inherit'> Developers </Link>
                            </Box>
                        </Grid>
                        
                        <Grid item xs={1} sm={4}>
                            <Box borderBottom={1}> About </Box>
                            <br />
                            <Box>
                                <Link href='/' color='inherit'> Team </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'> Contact </Link>
                            </Box>
                            <Box>
                                <Link href='/' color='inherit'> Support </Link>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <Box borderBottom={1}> Community </Box>
                            <br />
                            <Box>
                                <Link href="https://www.coingecko.com/en/news" color="inherit"> News </Link>
                            </Box>
                            <Box> 
                                <Link href='https://www.linkedin.com/groups/13529929/' color='inherit'> Twitter </Link>
                            </Box>
                            <Box>
                                <Link href='https://www.linkedin.com/groups/13529929/' color='inherit'> Instagram </Link>
                            </Box>
                            <Box>
                                <Link href='https://www.linkedin.com/groups/13529929/' color='inherit'> Facebook </Link>
                            </Box>
                            <Box>
                                <Link href='https://www.linkedin.com/groups/13529929/' color='inherit'> YouTube </Link>
                            </Box>
                            <Box>
                                <Link href='https://www.linkedin.com/groups/13529929/' color='inherit'> Discord </Link>
                            </Box>
                            <Box>
                                <Link href='https://www.linkedin.com/groups/13529929/' color='inherit'> Telegram </Link>
                            </Box>
                        </Grid> 
                        
                    </Grid>

                    <Box textAlign='center' pt={{ xs: 5, sm: 10 }} pb={{ xs: 5, sm: 0 }}> 
                        <Link href='http://web-developer.one/' target='_blank' rel='noopener noreferrer'> web-developer.one &reg; {new Date().getFullYear()} </Link>
                    </Box>

                </Container>

            </Box>

        </footer>

    )

}

export default Footer;
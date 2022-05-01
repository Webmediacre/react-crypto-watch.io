

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// from https://mui.com/material-ui/react-tabs/

import { Link } from 'react-router-dom';
import { Container, makeStyles } from "@material-ui/core";

import CoinConverterWidget from '../components/CoinConverterWidget'; 

function TabPanel(props) {

  // destruct props
  const { children, value, index, ...other } = props;

  return (

    <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel-${index}`} aria-labelledby={`vertical-tab-${index}`} {...other} >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  
  );

}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

  const useStyles = makeStyles(() => ({
    banner: { 
        backgroundImage: 'url(./banner2.jpg)', 
    },
    bannerContent: {
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        justifyContent: 'space-around',
    },
    tagline: {
        display: 'flex',
        height: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center', 
    }, 
}));

const KnownledgeBase = () => {

  const link9 = 'https://www.coindesk.com/learn/what-is-a-dex-how-decentralised-crypto-exchanges-work/#:~:text=Decentralised%20crypto%20exchanges%20(DEXs)%20are,intermediary%20between%20buyers%20and%20sellers';

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


const classes = useStyles(); 

  return (

    <Container>
    
    <br />
    
    <CoinConverterWidget /> 

    <div className={classes.tagline}> 
    
        <br /> 

        <Typography variant='h4' style={{ fontWeight: 'bold', marginBottom: 0, fontFamily: 'Montserrat'}}>
            Intro to Cryptocurrencies
        </Typography>
        
        <br /> 
        <br />
        <br />

    </div>

      <Box sx={{ flexGrow: 1, bgcolor: '', display: 'flex', height: '100%' }}> 

        <Tabs orientation='vertical' variant="scrollable" value={value} onChange={handleChange} aria-label='Vertical tabs example' sx={{ borderRight: 1, borderColor: 'divider' }} >
          <Tab style={{ color: '#fff' }} label='Summary!' {...a11yProps(0)} />
          <Tab style={{ color: '#fff' }} label='Blockchain explained...' {...a11yProps(1)} />
          <Tab style={{ color: '#fff' }} label='What is cryptocurrency' {...a11yProps(2)} />
          <Tab style={{ color: '#fff' }} label='What Is "BitCoin"?' {...a11yProps(3)} />
          <Tab style={{ color: '#fff' }} label='What is a cryptocurrency exchange?' {...a11yProps(4)} />
        </Tabs>
 
        <TabPanel value={value} index={0} style={{ width: '100%' }}> 

          <h1> What? </h1> 
          <br /> 
          <br />
          <p>
            With cryptocurrences there is no gold, silver or cash where it is just the transfer of digital assets on the Blockchain. 
            The Blockchain is a chain of computer nodes that contains records of digital transactions or who paid what to who.
            Instead of separate banks containing their own seprate records, there is one giant spreadsheet of transactions made using that currency which is called a ledger.
          </p>
          <br /> 
          <br /> 

          <h1> Why? </h1> 
          <br /> 
          <br />
          <p> 
          Well, there are distint advantages to currency system like this.
          <br />
          <br />
          1. It is decentralised. This means that while every transction is a given cryptocurrency is recorded on a ledger, there are many copies of the ledger. 
          Anyone that is part of the network has a copy. This leads to BitCoin mining where someone sets of computer to crunch through transactions on their copy of this ledger.
          <br />
          <br />
          There are over a million BitCoin miners around the world where BitCoin is just one type of crypto currecny. When you dedicate your computer to BitCoin mining, you get rewarded in Bit Coin. 
          This If you spend BitCoin or other cryptocurrency, instead of checking with one bank's records, the newtork check each and every single computer in the network to validated the transaction. 
          If you have enough cryptocurrency, each computer will give the go ahead and then each computer will update their records independently. 
          <br />
          <br />
          Because you'll then have some many copies of exactly the same ledger, it becomes difficult to have the same transaction performed more than once or for fraud. 
          If you try to make an invlaid transaction on one computer on the network, all the other computers that hasn't validated said transaction makes that transction invalid.
          <br />
          <br />
          2. As Blockchain is decentralised, you do not need bankc anymore. As all transactions are transparent, you can make internation payments almost instanly instead of it taking half a day with no spending limits. 
          You do not need to worry about exchange rates. You don't need to worry about interest rates and transaction fees are very low or zero for some cryptocurrencies on their networks.
          <br />
          <br />
          The reason it is called CryptoCurrency is because it is secure by the crytography technology. Blockchain is not BitCoin, Blockchain is just a secure type of ledge on computer node on a 
          peer to peer network backed by crytography You can say Blockchain is a way of organistion all to ledgers into blocks where new blocks can be created. 
          Everytime you pay for something with BitCoin that transaction is recorded as a block on that network.
          <br />
          <br />
          It contains information such as 'From', 'To', 'Amount', 'HASH' and 'Previous HASH' where the 'Previous HASH' is the last transaction. If you wan to do something fraudulent, you'll have to you not just have to 
          tamper with a block but you'll have to do this for every single block before and subsequent transactions on over half a million computers on the network. 
          This will most probably never happen. You'll realy need super power computer to achieve such a thing.
          
          <br /> 
          <br />
          <br />
          <h1> Which? </h1> 
          <br /> 
          <br />
          <p> 
          Now, you have investments which people exchange fiat currencies for cryptocurrencies like BitCoin. There hope is to exchange cryptocurrencies back to fiat for more than what they bought them for. 
          As of March 2022, there are 18,465 cryptocurrencies in existence. However, not all cryptocurrencies are active or valuable. 
          Discounting many 'dead' cryptocurrencies leaves only around 10,363 active cryptocurrencies. 
          <br /> 
          <br />
          Each cryptocurrency has different properties. For instance you have 'Ethereum', the 2nd most invested in cryptocurrency can process transactions faster then BitCoin. 
          You have 'Cardano' which is considered to be superior. There is another called 'LiteCoin' which has a never algorithm.
          </p>
          <br /> 
          <br /> 

          </p>

        </TabPanel>

        <TabPanel value={value} index={1} style={{ width: '100%' }}> 

        <h1> Blockchain explained... </h1>

          <br />
          <br />
          <p>
            A blockchain is a distributed database that is shared among the nodes of a computer network (peer-to-peer or P2P network). As a database, a blockchain stores information electronically in digital format. 
            Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralised record of transactions (in the form of ledgers).
            The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.  
            The blockchain is actually a separate network. 
          <br />
          <br /> 
            It is a peer-to-peer network of nodes (also know as computers) that talk to one another. It is a distributed network where computers talk to one another. 
            You'll have to get on one of these nodes or computer to get on the network. A web application be built to access one of the nodes on the network. 
            All of the nodes participate in running the network. They all contain a copy of the code on the blockchain and all of the data on the blockchain. 
            All the data on the blockchain. 
          <br /> 
          <br />          
            All the data on the network are contained in bundles of records which are know as blocks, where therese blocks are chained together to make up the blockchain. 
            All the nodes on the network also participate in ensuring the data on the blockchain (the public ledger) is secure and unchangeable. 
            That is what makes the blockchain so powerful. The code on the blockchain are contain in blockchain programs called "Smart Contracts". 
            They are programs that run on the blockchain. 
          <br /> 
          <br />            
            They are going to be the building blocks if blockchain applications. Smart Contracts are written in programming language written in "Solidity". All the code in a smart contract are Immutable which means it is unchangeable. After it is deployed to the blockchain, we wouldn't be able to update that code.   
            That's what makes the blockchain code so secure. Therefore, when the code is on the blockchain - we know that we can trust it becuase we know that no one can change it. 
          <br /> 
          <br />                
            That means the program will behave the same way everytime.   
            You the user gets to talk to that different network through a traditional client side application via a browser such as internet explorer, chrome, firefox, brave etc.              
            Most blockchains are designed as a decentralised database that functions as a distributed digital ledger. These blockchain ledgers record and store data in blocks, which are organised in a chronological sequence and are linked through cryptographic proofs. 
          <br /> 
          <br />   
            The blockchain techonology is built on cryptography. Cryptography is the study of secure communications techniques that allow only the sender and intended recipient of a message to view its contents.  
            You can watch the hostory of Blockchain here @ <a href='https://academy.binance.com/en/articles/history-of-blockchain' target='_blank'> investopedia </a>   
            Reference: <a href='https://www.investopedia.com/terms/b/blockchain.asp' target='_blank'> investopedia </a> 
          </p> 

        </TabPanel>

        <TabPanel value={value} index={2} style={{ width: '100%' }}>   

        <h1> What is cryptocurrency </h1>

          <br />
          <br />
          <p>
          A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange through a computer network that is not reliant on any central authority, such as a government or bank, to uphold or maintain it.
          You may be wondering how this sort of system differs from PayPal or the digital banking app you have on your phone. They certainly appear to serve the same use cases on the surface – paying friends, making purchases from your favorite website – but under the hood, they couldn’t be more different. 
          Cryptocurrency is unique for many reasons. Its primary function, though, is to serve as an electronic cash system that isn't owned by any one party. A good cryptocurrency will be decentraliSed. 
          <br />
          <br />
          There isn’t a central bank or subset of users that can change the rules without reaching consensus. The network participants (nodes) run software that connects them to other participants so that they can share information between themselves. 
          https://academy.binance.com/en/articles/what-is-cryptocurrency

          When creating a new cryptocurrency, you can choose to make a coin or token. A coin has its own blockchain, while a token is built on a pre-existing network. 
          <br /> 
          <br />
          Cryptocurrencies rely on blockchains for their security and decentralised nature. 
          Creating a token requires less expertise and effort than making a crypto coin. A coin will usually need a team of developers and experts to make it. A token still needs technical knowledge, but it's possible to create them in minutes through the use of other blockchains, such as Ethereum, Binance Smart Chain, Solana, and Polygon. 
          Source: Binance <a href='https://academy.binance.com/en/articles/how-to-create-your-own-cryptocurrency'> how-to-create-your-own-cryptocurrency </a> 
  
          </p>

        </TabPanel>

        <TabPanel value={value} index={3} style={{ width: '100%' }}>  

        <h1> What Is "Bitcoin"? </h1>

          <br /> 
          <br />
          <p>
            
          Bitcoin is a digital form of cash. But unlike the fiat currencies you're used to, there is no central bank controlling it. Instead, the financial system in Bitcoin is run by thousands of computers distributed around the world, i.e. the Blockchain on computers. Anyone can participate in the ecosystem by downloading open-source software. 
          Bitcoin was the first cryptocurrency, announced in 2008 (and launched in 2009). It provides users with the ability to send and receive digital money (bitcoins, with a lower-case b, or BTC). What makes it so attractive is that it can’t be censored, funds can’t be spent more than once, and transactions can be made at any time, from anywhere. 
          <br />
          <br /> 
          Anyone with an Internet connection can send and receive it. It’s a bit like cash in that no one can stop you from using it, but its digital presence means that it can be transferred globally. BTC was the first and gold standard of cryptocurrencies.
          Watch: <a href='what-is-bitcoin'> https://academy.binance.com/en/articles/what-is-bitcoin</a>
          <br />
          <br />
          <br />
          <bold>What are AltCoins?</bold>
          <br />
          <br />
          “Altcoin” refers to any type of cryptocurrency other than Bitcoin. 
          Ethereum is the most popular altcoin, and people use the full name (Ethereum) when talking about the broader blockchain network but Ether (ETH) to discuss the currency itself. 
          The term “altcoin” is shorthand for “alternative coins” and simply means cryptocurrencies other than Bitcoin. After Bitcoin, the nine most popular cryptocurrencies are as follows:
          <br />
          <br />
          * <a href='https://bitcoin.org/en/' target='_blank'> bitcoin </a> official website 
          <br />
          * <a href='https://ethereum.org/en/' target='_blank'> Ethereum </a> official website
          <br />
          * <a href='https://ripple.com/xrp/' target='_blank'> XRP </a> official website
          <br />
          * <a href='https://tether.to/en/' target='_blank'> Tether </a> official website
          <br />
          * <a href='https://cardano.org/' target='_blank'> Cardano </a> official website
          <br />
          * <a href='https://polkadot.network/' target='_blank'> Polkadot </a> official website
          <br />
          * <a href='https://www.stellar.org/' target='_blank'> stellar </a> official website
          <br />
          * <a href='https://www.circle.com/en/usdc' target='_blank'> USD Coin </a> official website
          <br />
          * <a href='https://dogecoin.com/' target='_blank'> Dogecoin </a> official website
          <br />
          * <a href='https://chain.link/' target='_blank'> Chainlink </a> official website
          <br />
          * <a href='https://uniswap.org/' target='_blank'> Uniswap </a> official website 
          <br />
          <br />
          You can read more on @ <a href='https://academy.binance.com/en/articles/altcoins-to-diversify-your-portfolio'> "9 Altcoins To Diversify Your Portfolio" </a>
          </p>

        </TabPanel>
 
        <TabPanel value={value} index={4} style={{ width: '100%' }}>  
        
        <h1> What is a cryptocurrency exchange? </h1>

          <br />
          <br />
          <p>
            A cryptocurrency exchange is a marketplace to buy and sell or trade cryptocurrency. Differences Between Centralised and Decentralised Exchanges. Centralised exchanges can be used to conduct trades from fiat to cryptocurrency (or vice versa). 
            They can also be used to conduct trades between two different cryptocurrencies. While this may seem to cover all of the potential transaction types, there is still a market for another type of cryptocurrency exchange as well. 
            Decentralised exchanges are an alternative; they cut out the middle man, generating what is often thought of as a "trustless" environment. 
          <br /> 
          <br />  
            These types of exchanges function as peer-to-peer exchanges. Assets are never held by an escrow service, and transactions are done entirely based on smart contracts and atomic swaps. The crucial difference between centralised and decentralised exchanges is whether or not a middle man is present. 
            Decentralised exchanges are less widespread and less popular as compared with centralised exchanges. 
          <br /> 
          <br /> 
            Nonetheless, there are more decentralised exchanges all the time, and it's possible that they will give centralised exchanges will run their money in the future. Reference @ <a href="https://www.investopedia.com/tech/what-are-centralised-cryptocurrency-exchanges/" target="_blank"> centralised-cryptocurrency-exchanges </a>
          </p>
          <br />
          <br />

          <p>
            Here are a list of centralised exchanges;
            <br /> 
            <br />
            * <a href='https://www.binance.com'> https://www.binance.com </a>
            <br />
            * <a href='https://www.coinbase.com'> https://www.coinbase.com </a>
            <br />
            * <a href='https://crypto.com'> https://crypto.com </a>
            <br />
            ...and many more
          </p>
          <br />
          <p>
          Her are a list of some decentralised exchanges;
          <br />
          * <a href='https://app.uniswap.org'> https://app.uniswap.org </a> for Etherium
          <br />
          * <a href='https://pancakeswap.finance'> https://pancakeswap.finance </a> for Binance 
          <br />
            ...and many more
          </p>

          <br />
          <br />
          <p>
          Decentralised crypto exchanges (DEXs) are blockchain-based apps that coordinate large-scale trading of crypto assets between many users. They do that entirely through automated algorithms, instead of the conventional approach of acting as financial intermediary between buyers and sellers. 
          The largest DEX is Uniswap, which was created on the Ethereum blockchain in 2018 by a former mechanical engineer who had learned to code only after getting laid off by Siemens the previous year. By late 2021, it was processing transactions worth more than $1 billion each day. 
          <br /> 
          <br />  
          As of February 2022, Uniswap's version 3 protocol was handling almost $2 billion in trading volume on some days, according to CoinGecko data. It typically manages around three times the volume of its closest DEX competitors, such as PancakeSwap, which usually see $300 million to $600 million in daily volume.
          <br /> 
          <br />  

          </p>

          <p>
          There are other platforms where you can also monitor the cryptocurrency markets such as;
          <br />
          * <a href='https://coinmarketcap.com'> https://coinmarketcap.com </a> for coinmarketcap
          <br />
          * <a href='https://www.coingecko.com'> https://www.coingecko.com </a> for coingecko 
          <br />
          * <a href='https://www.gate.io'> https://www.gate.io </a> for gate 
          <br /> 
            ...and many more
          </p>

        </TabPanel>

      </Box>

      <br /> 
      <br />
      <br />

    </Container>

  );

}

export default KnownledgeBase;
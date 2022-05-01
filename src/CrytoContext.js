
// react imports
import React, { createContext, useContext, useState, useEffect } from 'react';

const Cryto = createContext(); 

const CryptoContext = ({children}) => {

    // children
    const [ currency, setCurrency ] = useState('GBP');
    const [ symbol, setSymbol ] = useState('£');

    // useEffect will run whatever is inside of it when the app runs
    useEffect(() => {
        if(currency === 'GBP')  
        setSymbol('£'); 
        else if (currency === 'USD')    
        setSymbol('$');  
        else if (currency === 'EUR')
        setSymbol('€');  
    },[currency]) // currency as a dependency

    return ( // make as provider
    
        <Cryto.Provider value={{ currency, symbol, setCurrency}}>  
            { children }
        </Cryto.Provider>

  )
 
} 

// export context to the whole app
export default CryptoContext;  

// export state to the whole app
export const CryptoState = () => {
    return useContext(Cryto); // react hook 'useContext()' 
}
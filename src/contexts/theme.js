
// reference: https://www.youtube.com/watch?v=N17qMDl4PyM&t=208s
import React from 'react';
import { createContext, useState, useEffect } from 'react';

// create theme object
const themes = {
    dark: { // default
        backgroundColor: 'black',
        color: 'white',
    },
    light: {
    backgroundColor: 'white',
    color: 'black',
    }
}; 

export const ThemeContext = createContext(); // to be access by children

// provider provides context to the whole app
// children lives in index.js chilren are components to be rendered
export const ThemeProvider = ({ children} ) => {

    //  by default, we have a light theme
    const [ isDark, setIsDark ] = useState(false);

    // set theme based on 'isDark' teriary operator
    const theme = isDark ? themes.dark : themes.light;

    // 'toggleTheme' function to inverse current state
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark));
        setIsDark(!isDark);
    }

    // useEffect to be triggered once on initialise
    useEffect(() => {
        const isDark = localStorage.getItem('isDark') === 'true';
        setIsDark(isDark);
    }, [])

    return ( // value is an object with an array of arguement
        // 'theme' is reference to which of objects 'themes'
        // 'isDark' to know which theme is activated - ony two so we can use a boolean
        // 'toggleTheme' fucntion that wee need to change our theme
        <ThemeContext.Provider value={ [{theme, isDark}, toggleTheme ] }>
            { children }
        </ThemeContext.Provider>
    )

}
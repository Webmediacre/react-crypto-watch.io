
import React, { Component } from 'react';
import { Container } from '@material-ui/core';

import Newsfeed from '../widgets/Newsfeed'

// reference: https://www.codegrepper.com/code-examples/javascript/script+tags+in+react
// try: https://www.youtube.com/watch?v=zNHEJI0hK7c 
// try: https://www.w3schools.com/react/react_jsx.asp
class Newsfeeds extends Component {

  componentDidMount() {
    const script = document.createElement('script');    
    script.async = true;    
    script.src = './';    
    //this.div.appendChild(script);  // inserting the script in {} 
  }

  render() {

    return ( 
      <Container>
        <div className="script" id='script' >          
      
        {Newsfeed.Component}   
        
        </div>   
      </Container>

    );

  }

}

export default Newsfeeds;
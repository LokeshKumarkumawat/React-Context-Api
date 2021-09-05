
import React from 'react';
import { CommonContext } from './CommonContext'

class Header extends React.Component{

  render (){
    return(
     



      <CommonContext.Consumer >
        
        {
            ({color}) =>(
                <h1 style={{backgroundColor:color}}>  This Is From Header.js </h1>
            )
        }

      </CommonContext.Consumer>

    );
  }
}

export default Header;

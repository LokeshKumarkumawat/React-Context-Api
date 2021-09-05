
import React from 'react';
import { CommonContext } from './CommonContext'

class Main extends React.Component{

  render (){
    return(
     



      <CommonContext.Consumer >
        
        {
            ({color}) =>(
                <h1 style={{backgroundColor:color}}>  This Is From Main.js </h1>
            )
        }

      </CommonContext.Consumer>

    );
  }
}

export default Main;

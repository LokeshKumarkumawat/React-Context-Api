import './App.css';
import React from 'react';
import { CommonContext } from './components/CommonContext'
import Main from './components/Main'

class App extends React.Component{



  constructor(){
    super();
    this.state={
      color:'black',
      updateColor:this.updateColor
    }

    this.updateColor = ()=>{
      this.setState({
        color:"red"
      })
    }
   

  }




  render (){
    return(
      <div className="App">



      <CommonContext.Provider value={this.state}>
        <h1>Hello World</h1>
        <Main/>
      </CommonContext.Provider>







    </div>
    )
  }
}

export default App;

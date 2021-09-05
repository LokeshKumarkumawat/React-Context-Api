import './App.css';
import React from 'react';
import { CommonContext } from './components/CommonContext'
import Main from './components/Main'
import { UpdateButton } from './components/UpdateButton';

class App extends React.Component {



  constructor() {



    super();




    this.updateColor = () => {
      this.setState({
        color: "red"
      })
    }



    this.state = {
      color: 'black',
      updateColor: this.updateColor
    }




  }




  render() {
    return (
      <div className="App">



        <CommonContext.Provider value={this.state}>
          <h1>Hello World</h1>
          <Main />
          <UpdateButton />
        </CommonContext.Provider>







      </div>
    )
  }
}

export default App;

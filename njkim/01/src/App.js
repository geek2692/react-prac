import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    const style = {
      backgroundColor : 'black',
      padding : '16px',
      color : 'aqua',
      fontSize : '36px'
    };

    const value = 1;
    const name = "React"

    return (
      (() => {
        if(value === 1) return (<div class="App">Hi</div>);
        if(value === 2) return (<div style={style}>{name}</div>);
      })()
    
    );
  }
}

export default App;

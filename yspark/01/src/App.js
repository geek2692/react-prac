import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    const value = 1;
    const style = {
      backgroundColor: 'black',
      padding: '16px',
      color: 'white',
      fontSize: '12px'
    };

    return (
      (() => {
        if (value === 1) return (<div style={style}>하나</div>);
        if (value === 2) return (<div className="App">둘</div>);
      })()
    );
  }
}

export default App;

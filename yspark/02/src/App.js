import React, { Component } from 'react';
import MyName from './components/Myname';
import Myname2 from './components/Myname2';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <MyName/>
        <Myname2/>  
        <Counter/>
      </div>      
    );
  }
}

export default App;

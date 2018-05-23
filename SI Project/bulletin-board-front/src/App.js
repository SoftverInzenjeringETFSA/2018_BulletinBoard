import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {
      userId : String
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="Container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;

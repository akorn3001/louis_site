import React, { Component } from 'react';
import { Route, HashRouter } from 'react-router-dom';
import Header from './components/header.js';
import Footer from './components/footer.js';
import Bio from './components/bio.js';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        
        <Bio />

        <Footer />
      </div>
    );
  }
}


export default App;





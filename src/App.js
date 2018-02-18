import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Bio from './components/bio';
import Videos from './components/videos';
import Gallery from './components/gallery';
import Contact from './components/contact';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route path="/" exact component={Bio} />
        <Route path="/bio" exact component={Bio} />
        <Route path="/videos" exact component={Videos} />
        <Route path="/gallery" exact component={Gallery} />
        <Route path="/contact" exact component={Contact} />
        <Footer />
      </div>
    );
  }
}


export default App;





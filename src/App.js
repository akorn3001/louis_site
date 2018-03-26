import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Bio from './components/bio';
import Videos from './components/videos';
import Gallery from './components/gallery';
import MagnetPodcast from './components/magnetPodcast';
import Contact from './components/contact';
import './styles/App.css';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //
  //   this.state = { footerDisplay: "block" };
  //
  //   this.handleScroll = this.handleScroll.bind(this);
  // }
  //
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }
  //
  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.handleScroll);
  // }
  //
  // componentDidUpdate(prevState) {
  //
  // }
  //
  // handleScroll(event) {
  //   let clearance = document.body.scrollHeight - (window.pageYOffset + window.innerHeight);
  //   console.log(clearance);
  //
  //   if (clearance > 18) {
  //     this.setState({ footerDisplay: "none" });
  //   } else {
  //     this.setState({ footerDisplay: "block" });
  //   }
  // }

  render() {
    return (
      <div className="App">
        <div className="all-but-footer">
          <Header />
            <main className="content">
              <Switch>
                <Redirect from="/" to="/bio" exact />
                <Route path="/bio" exact component={Bio} />
              </Switch>

              <Route path="/videos" exact component={Videos} />
              <Route path="/gallery" exact component={Gallery} />
              <Route path="/magnet-podcast" exact component={MagnetPodcast} />
              <Route path="/contact" exact component={Contact} />
            </main>
          </div>
        <Footer />
      </div>
    );
  }
}


export default App;

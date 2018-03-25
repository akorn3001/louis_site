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
  constructor(props) {
    super(props);

    this.state = { footerDisplay: "block" };

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    // console.log(document.body.scrollHeight - (window.scrollY + window.innerHeight));
    if (document.body.scrollHeight - (window.pageYOffset + window.innerHeight) <= 18) {
      this.setState({ footerDisplay: "block" });
    } else {
      this.setState({ footerDisplay: "none" });
    }
  }

  render() {
    return (
      <div className="App Site">
          <Header />

          <main className="Site-content">
            <Switch>
              <Redirect from="/" to="/bio" exact />
              <Route path="/bio" exact component={Bio} />
            </Switch>

            <Route path="/videos" exact component={Videos} />
            <Route path="/gallery" exact component={Gallery} />
            <Route path="/magnet-podcast" exact component={MagnetPodcast} />
            <Route path="/contact" exact component={Contact} />
          </main>

        <Footer display={this.state.footerDisplay} />
      </div>
    );
  }
}


export default App;

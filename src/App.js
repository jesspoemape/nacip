import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Vendors from './components/Vendors';
import About from './components/About';
import BecomeASponsor from './components/BecomeASponsor';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import './App.scss';

function App() {
  return (
      <Router>
          <div className="App">
            <Header />
            <Navigation />
            <Route exact path="/" component={Home} />
            <Route exact path="/vendors" component={Vendors} />
            <Route exact path="/about" component={About} />
            <Route exact path="/become-a-sponsor" component={BecomeASponsor} />
        </div>
        <Footer />
      </Router>
    
  );
}

export default App;

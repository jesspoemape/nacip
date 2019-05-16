import React from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/home/Home';
import Vendors from './components/vendors/Vendors';
import About from './components/about/About';
import Powwow from './components/powwow/Powwow';
import BecomeASponsor from './components/sponsor/BecomeASponsor';
import Footer from './components/Footer';
import './App.scss';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

const App = () => {
    return (
        <Router>
            <div className="App">
                <ToastContainer />
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/vendors" component={Vendors} />
                <Route exact path="/about" component={About} />
                <Route exact path="/powwow" component={Powwow} />
                <Route exact path="/become-a-sponsor" component={BecomeASponsor} />
            </div>
            <Footer />
        </Router>
    );
}

export default App;

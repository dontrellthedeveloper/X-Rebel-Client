import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import {Navbar, Footer} from "./components/Utils";
import GlobalStyle from './globalStyles';

import HomeSection from './pages/HomeSection';
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Header from "./components/nav/Header";
import RegisterComplete from "./pages/auth/RegisterComplete";

import ScrollToTop from './components/Utils/ScrollToTop';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <GlobalStyle/>
                    <ToastContainer />
                    <ScrollToTop/>
                    <Navbar/>
                    <Header />
                    <Switch>
                        <Route exact path="/" component={HomeSection}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/register/complete" component={RegisterComplete} />
                    </Switch>
                    <Footer/>
                </Router>
            </React.Fragment>
        );
    }

}

export default App;
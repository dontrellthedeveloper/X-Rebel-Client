import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Home} from './Home';
import {About} from './About';
import {Contact} from './Contact';
import {NoMatch} from './NoMatch';
import {Layout} from './components/Layout';
import {NavigationBar} from "./components/NavigationBar";
import {Jumbotron} from './components/Jumbotron';
import Cards from "./cards/Cards";
import HomePage from './components/homepage.component';
import ReactVideoPlayer from './components/video-player.component';
import Slider from './components/Slider';
import Services from './components/Services';
import './App.css';


class App extends Component {
    render() {
        return (
            <React.Fragment>
                <NavigationBar/>
                <Slider/>
                <Services/>
                <HomePage/>
                <Jumbotron/>
                <Cards/>
                <ReactVideoPlayer/>
                <Layout>
                    <Router>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/about" component={About}/>
                            <Route path='/contact' component={Contact}/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </Router>
                </Layout>
            </React.Fragment>
        );
    }

}

export default App;
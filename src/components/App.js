import React from 'react';
import '../css/App.scss';
import Header from './layouts/Header';
import Block1 from './Block1';
import Block2 from './Block2';
import PrivacyPolicy from './PrivacyPolicy';
import Contact from './Contact';
import Download from './Download';
import Footer from './layouts/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">


        <Router>
            <Header/>

            <Switch>
                <Route  exact={true} path="/privacy">
                    <PrivacyPolicy/>
                </Route>
                <Route  exact={true} path="/contact">
                    <Contact/>
                </Route>
                <Route  exact={true} path="/download">
                    <Download/>
                </Route>
                <Route exact={true} path="/">
                    <Block1/>
                    <Block2/>
                </Route>

            </Switch>
        </Router>


        <Footer/>
    </div>
  );
}

export default App;

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
import { createMuiTheme, ThemeProvider, MuiThemeProvider } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import { green, orange } from '@material-ui/core/colors';
import { Button } from '@material-ui/core';
import {theme} from "../styles/material_styles";


function App() {

  return (
      <MuiThemeProvider theme={theme}>

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

      </MuiThemeProvider>

  );
}

export default App;

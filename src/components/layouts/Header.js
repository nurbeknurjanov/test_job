import logo from "../../images/logo.png";
import React, {useEffect} from "react";
import {projectName} from "../../constants/constants";
import { makeStyles, withStyles, styled, useTheme } from '@material-ui/core/styles';
import { Container, Button } from '@material-ui/core';
import {ButtonLink, ButtonLinkRed} from "../../styles/styled_components";
import {headerContainerStyle, buttonStyles} from "../../styles/material_styles";
import PropTypes from 'prop-types';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


const HeaderContainer = withStyles(headerContainerStyle)(Container);

export default function (props){
    return <header id='header'>
        <HeaderContainer maxWidth="md" >
            <nav>
                <Link to="/">
                    <img src={logo} alt={projectName} />
                </Link>
                <div>
                    <div>
                        <Link to="/">
                            Practitioner Sign Up
                        </Link>
                        |
                        <Link to="/privacy">
                            Log In/Sign Up
                        </Link>
                    </div>
                    <Link to="/contact">
                        <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="2" fill="#4F4F4F"/>
                            <rect x="12" y="6" width="12" height="2" fill="#4F4F4F"/>
                        </svg>
                    </Link>
                </div>
            </nav>
        </HeaderContainer>
    </header>;
}
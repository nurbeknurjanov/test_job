import React from 'react';
import '../css/Block1.scss';
import { makeStyles, withStyles } from '@material-ui/styles';
import {containerStyle, buttonStyles} from "../styles/material_styles";
import {Button, Container, useTheme} from '@material-ui/core';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { green, orange } from '@material-ui/core/colors';
import styled, {css} from "styled-components";


/*const MyButton = withStyles(buttonStyles)(Button);
<MyButton color='red' variant='contained' style={{color:'brown'}}>My button</MyButton>*/

const P = styled.p`
    padding: 20px 0;
`

function ToggleButtons() {
    const [meet, setMeet] = React.useState('online');

    const handleMeeting = (event, value) => {
        setMeet(value);
    };

    return (
        <ToggleButtonGroup
            value={meet}
            exclusive
            onChange={handleMeeting}
        >
            <ToggleButton value="online" >
                Online
            </ToggleButton>
            <ToggleButton value="face-to-face" >
                Face-to-face
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

const CustomContainer = withStyles(containerStyle)(Container);

const ImagesBlock = ()=>(
    <div className={'images-block'}>
        <img src={require('../images/block1/2.png')} className={'img2'}/>
        <div className={'images-block-middle'}>
            <img src={require('../images/block1/3.1.png')} className={'img3-1'}/>
            <img src={require('../images/block1/3.2.png')} className={'img3-2'}/>
            <img src={require('../images/block1/3.3.png')} className={'img3-3'}/>
        </div>
        <img src={require('../images/block1/4.png')} className={'img4'}/>
        <img src={require('../images/block1/5.png')} className={'img5'}/>
    </div>
)

const FormBlock = ()=>{
    return <div className={'form-block'}>
        <h1>Psychological care
            <br/>
            on-demand
        </h1>
        <P>
            Speak to a Psychologist, Psychotherapist or Psychiatrist within minutes, 24/7 via our secure video calling App.
        </P>

        <Form/>
    </div>
}

const Form = ()=>{


    return <form>
        <h3 style={{color:'#4F4F4F'}}>Find a Therapist</h3>

        <p className='hint'>Select the type of consultation</p>
        <ToggleButtons/>
    </form>;
}

function Block1() {
  //const theme = useTheme();
  //theme.palette.primary.main = green[500];

  return (
      <div className='Block1'>
          <CustomContainer maxWidth="md" >
              <div className={'inner'}>
                  <img src={require('../images/block1/1.png')} className={'img1'}/>
                  <FormBlock/>
                  <ImagesBlock/>
              </div>
          </CustomContainer>
      </div>

  );
}
export default Block1;

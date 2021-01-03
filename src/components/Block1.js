import React from 'react';
import '../css/Block1.scss';
import { makeStyles, withStyles } from '@material-ui/styles';
import {block1ContainerStyle, buttonStyles} from "../styles/material_styles";
import {Button, Container, useTheme, TextField, InputAdornment, IconButton} from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { green, orange } from '@material-ui/core/colors';
import styled, {css} from "styled-components";
import SearchIcon from '@material-ui/icons/Search';


/*const MyButton = withStyles(buttonStyles)(Button);
<MyButton color='red' variant='contained' style={{color:'brown'}}>My button</MyButton>*/

const P = styled.p`
    padding: 20px 0;
`

/*const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
    },
}));*/
/*const useStyles = makeStyles({
    root: {
        margin: '50px',
    },
});*/



function Field()
{
    return  <TextField
                       label="What problem do you have?"
                       variant="outlined"
                       size="small"
                       helperText="This field is required."
                       required
                       fullWidth
                       error={false}
                       InputProps={{endAdornment:<InputAdornment position="end">
                               <Button style={{margin: '0px -14px 0 0',
                                   zIndex: 1,
                                   height: '39px',
                                   borderTopLeftRadius:0,
                                   borderBottomLeftRadius:0,
                                   minWidth:'40px',
                                   width:'40px',
                               }}
                                       type='submit'
                                       color='secondary'
                                       variant='contained'>
                                   <SearchIcon/>
                               </Button>
                           </InputAdornment>,

                       }}
    />;
}

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

const CustomContainer = withStyles(block1ContainerStyle)(Container);

const ImagesBlock = ()=>(
    <div className={'images-block'}>
        <img src={require('../images/block1/2.png')} className={'img2'}/>
        <img src={require('../images/block1/3.3.png')} className={'img3-3'}/>
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

        <br/>
        <br/>
        <Field/>

        <br/>
        <br/>
        <p className='hint'>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.20675 1.64849L7 0.583328L11.7932 1.64849C11.9228 1.67729 12.0386 1.74939 12.1217 1.8529C12.2047 1.9564 12.25 2.08513 12.25 2.21783V8.04358C12.25 8.61976 12.1077 9.18701 11.8358 9.695C11.5639 10.203 11.1708 10.636 10.6913 10.9556L7 13.4167L3.30867 10.9556C2.82933 10.636 2.43627 10.2031 2.16437 9.69526C1.89247 9.18738 1.75014 8.62024 1.75 8.04416V2.21783C1.75002 2.08513 1.79529 1.9564 1.87833 1.8529C1.96137 1.74939 2.07721 1.67729 2.20675 1.64849ZM7 7.87499L8.71442 8.77625L8.38717 6.86758L9.77375 5.51541L7.85692 5.23658L7 3.49999L6.1425 5.23658L4.22625 5.51541L5.61283 6.86758L5.28617 8.77625L7 7.87499Z" fill="#828282"/>
            </svg>
            <span>
                100% Confidentially face-to-face,
            </span>
        </p>
        <p className='hint'>
            <span>audio call & messaging</span>
        </p>
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

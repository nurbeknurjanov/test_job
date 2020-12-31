import React from 'react';
import '../css/Block1.scss';
import { makeStyles, withStyles, styled } from '@material-ui/styles';
import {containerStyle} from "../styles/material_styles";
import { Container } from '@material-ui/core';
import phone from '../images/phone.png';
import slogan from '../images/slogan.png';
import app_store from '../images/app_store.png';
import google_pay from '../images/google_pay.png';


const CustomContainer = withStyles(containerStyle)(Container);

function Block1() {
  return (
      <div className='Block1'>
          <CustomContainer maxWidth="md" >
              <div className={'inner'}>
                  <img src={require('../images/block1/1.png')} className={'img1'}/>
                  <div className={'form-block'}>1</div>
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

              </div>
          </CustomContainer>
      </div>

  );
}
export default Block1;

import React, {useEffect} from 'react';
import '../css/Block1.scss';
import { makeStyles, withStyles, styled } from '@material-ui/styles';
import {containerStyle} from "../styles/material_styles";
import { Container } from '@material-ui/core';
import phone from '../images/phone.png';
import slogan from '../images/slogan.png';
import app_store from '../images/app_store.png';
import google_pay from '../images/google_pay.png';

//const ContainerChanged = styled(Container)(containerStyle.root);
//containerStyle.root.border = '5px solid orange';
const ContainerChanged = withStyles(containerStyle)(Container);

function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

function Page() {


    useEffect(()=>{
        const OS = getMobileOperatingSystem();
        if(OS==='Android')
            window.location.href = 'https://play.google.com/store/apps/details?id=com.peaksoft.e_commerce';
        if(OS==='iOS')
            window.location.href = 'https://apps.apple.com/us/app/shoppix/id1531698648';
    }, []);


  return (
      <ContainerChanged maxWidth="md" >
          <h1>Загружите наше приложение</h1>
          <div className='mobile_stores' style={{justifyContent:'flex-start', display:'flex'}}>
              <a href="https://apps.apple.com/us/app/shoppix/id1531698648">
                  <img src={app_store}/>
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.peaksoft.e_commerce">
                  <img src={google_pay}/>
              </a>
          </div>
      </ContainerChanged>
  );
}
export default Page;

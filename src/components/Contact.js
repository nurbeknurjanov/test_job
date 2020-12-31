import React, {useEffect} from 'react';
import '../css/Block1.scss';
import { makeStyles, withStyles, styled } from '@material-ui/styles';
import {containerStyle} from "../styles/material_styles";
import { Container } from '@material-ui/core';



//const ContainerChanged = styled(Container)(containerStyle.root);
//containerStyle.root.border = '5px solid orange';
const ContainerChanged = withStyles(containerStyle)(Container);

function Page() {
  return (
      <ContainerChanged maxWidth="md" >
          <h1>Контакты</h1>


              <p>Наш адрес<br />Ибраимова 103<br />Свердловский район, Бишкек, 720011<br />12 этаж ( PeakSoft Ltd)
                  <br/>
                  <br />Контакты +996 505 01 01 96<br />
                  <a href="mailto:shoppix@peaksoft.us">shoppix@peaksoft.us</a>
              </p>

      </ContainerChanged>
  );
}
export default Page;

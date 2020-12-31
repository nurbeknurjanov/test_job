import React from 'react';
import '../../css/Footer.scss';
import { makeStyles, withStyles, styled } from '@material-ui/styles';
import {containerStyle} from "../../styles/material_styles";
import { Container } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


//const ContainerChanged = styled(Container)(containerStyle.root);
//containerStyle.root.border = '5px solid orange';
const ContainerChanged = withStyles(containerStyle)(Container);


const main = (arr=[])=>{
    return  <ul>
        {
            arr.map((el, index)=><li key={index}>{el}</li>)
        }
    </ul>;
}

const inner = (arr=[])=>{
    return  <ul>
        {
            arr.map((el, index)=><li key={index}>{el}</li>)
        }
    </ul>;
}

function Footer() {
  return (
      <footer>
          <ContainerChanged maxWidth="md" >
              {main([
                  inner(['Наш Адрес', <span>
                      Ибраимова 103
                      <br/>
                      Свердловский район, Бишкек, 720011
                      <br/>
                      12 этаж ( PeakSoft Ltd)
                  </span>]),
                  inner(['Сообщество',
                      <a href='/'>Для покупателей</a>,
                      <a href='/'>Для Магазинов</a>,
                      <a href='/'>Facebook Group</a>,
                      <a href='/'>FAQ</a>,
                  ]),
                  inner(['О Нас',
                      <a href='/'>Наша Команда</a>,
                      <a href='/'>Наша История</a>,
                      <a href='/'>Вакансии</a>,
                  ]),
                  inner(['Контакты',<span>
                      +996 505 01 01 96
                      <br/>
                      <a href="mailto:shoppix@peaksoft.us">shoppix@peaksoft.us</a>
                  </span>]),
              ])}




              <div className='copyright'>
                  <div>
                      <hr/>
                  </div>
                  <div>© Shoppix 2020, Все права защищены. </div>
                  <div>
                      <a href="https://www.facebook.com/shoppixbishkek.bishkek" target="_blank">
                          <FacebookIcon/>
                      </a>
                      <a href="https://www.instagram.com/shoppixkg/" target="_blank">
                          <InstagramIcon/>
                      </a>
                  </div>
              </div>


          </ContainerChanged>
      </footer>
  );
}
export default Footer;

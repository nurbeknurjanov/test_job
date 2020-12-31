import React from 'react';
import '../css/Block2.scss';
import { makeStyles, withStyles, styled } from '@material-ui/styles';
import {containerStyle} from "../styles/material_styles";
import { Container } from '@material-ui/core';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import hashtag from '../images/hashtag.png';

//const ContainerChanged = styled(Container)(containerStyle.root);
//containerStyle.root.border = '5px solid orange';
const ContainerChanged = withStyles(containerStyle)(Container);

function Block2() {
  return (
      <ContainerChanged maxWidth="md" >
          <div className='Block2'>
              <div>
                  <h1>Простые интерфейсы на каждой странице</h1>
                  <p>
                      Легко в использовании и в поиске вещей и магазинов Кыргызстана.
                  </p>
                  <ul>
                      <li>
                          <img src={hashtag} />
                          <div>
                              <h1>
                                  Фильтры
                              </h1>
                              <p>
                                  По дате добавления
                                  <br/>
                                  Цена: по возрастанию
                                  <br/>
                                  Цена: по убыванию
                              </p>
                          </div>
                      </li>
                      <li>
                          <FavoriteBorderIcon/>
                          <div>
                              <h1>
                                  Избранные
                              </h1>
                              <p>
                                  Любимые продукты для покупки.
                              </p>
                          </div>
                      </li>
                      <li>
                          <LocalMallIcon />
                          <div>
                              <h1>
                                  Категории
                              </h1>
                              <p>
                                  Топ магазины, Бренды и Тренды
                              </p>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <img src={require('../images/block2.png')} />
              </div>
          </div>
      </ContainerChanged>
  );
}
export default Block2;

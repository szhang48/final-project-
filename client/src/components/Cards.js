import React from 'react'
import CardItem from './CardItem'
import './Cards.css'; 

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Sneakers!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Air Jordan is a line of basketball shoes and athletic apparel produced by American corporation Nike, Inc.'
              label='Jordans'
              path='/products'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Adidas AG is a German multinational corporation'
              label='Adidas'
              path='/products'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='New Balance Athletics, Inc., best known as simply New Balance, is one of the worlds major sports footwear and apparel manufacturers'
              label='New Balance'
              path='/products'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Supreme is an American clothing and skateboarding lifestyle brand established in New York City'
              label='Supreme'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Nike, Inc. is an American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services. '
              label='Nike'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Cards

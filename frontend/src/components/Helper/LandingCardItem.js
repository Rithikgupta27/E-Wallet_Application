import React from 'react';
import { Link } from 'react-router-dom';
import './LandingCard.css'

function LandingCardItem(props) {
  return (
    <>
      <li className='land_cards__item'>
        <Link className='land_cards__item__link' to={props.path}>
          <figure className='land_cards__item__pic-wrap' data-category={props.label}>
            <img
              className='land_cards__item__img'
              alt='Image'
              src={props.src}
            />
          </figure>
          <div className='land_cards__item__info'>
            <h5 className='land_cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default LandingCardItem;

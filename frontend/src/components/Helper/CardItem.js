/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
<<<<<<< HEAD
        <Link className='cards__item__link' to={props.path}>
=======
        <Link className='cards__item__link' to={props.path} target='_blank'>
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img className='cards__item__img' alt='Image' src={props.src}/>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;

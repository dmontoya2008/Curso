import React from 'react';
import './Items.css';   
import ButtonAddToCart from './ButtonAddToCart';
import ItemColorPick from './ItemColorPick';

function Items( { title, img, price } ) {
  //console.log(props) 
  /*Destructuring*/
  // const { title, img, price } = props;
  return (
   <div className='item-cards'>
      <h3 className="item-card_title"> {title} </h3>
      <img className="item-card_img" src={img} alt="tornillo-img.jpg"></img>
      <p className="item-card_price"> Precio : ${price}  </p>
      <ButtonAddToCart />
      <hr/>
      <ItemColorPick />
   </div>
    )
}

 

export default Items;
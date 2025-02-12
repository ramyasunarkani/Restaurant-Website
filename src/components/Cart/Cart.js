import React from 'react';
import style from './Cart.module.css';
import Modal from '../UI/Modal';
function Cart(props) {
    const cartItems=<ul className={style['cart-items']}>{[{id:"c1",name:'Sushi', amount:2 ,price:12.99}]
    .map(item=><li>{item.name}</li>)}</ul>
  return (
    <Modal onClose={props.onClose}>
      <div>{cartItems}</div>
      <div className={style.total}>
        <span>Total Amount:</span>
        <span>$35.62</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
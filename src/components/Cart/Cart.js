import React, { useContext } from "react";
import style from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";

function Cart(props) {
  const cartCtx = useContext(CartContext);

  const cartItems = (
    <ul className={style["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li key={item.id} className={style["cart-item"]}>
          {item.name}
          <div className={style["cart-des"]}>
            <div>
              <span>${item.price.toFixed(2)}</span>
              <span>x{item.amount}</span>
            </div>
            <div>
              <button >-</button>
              <button >
                +
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div>{cartItems}</div>
      <div className={style.total}>
        <span>Total Amount:</span>
        <span>${cartCtx.totalAmount.toFixed(2)}</span>
      </div>
      <div className={style.actions}>
        <button className={style["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={style.button}>Order</button>
      </div>
    </Modal>
  );
}

export default Cart;

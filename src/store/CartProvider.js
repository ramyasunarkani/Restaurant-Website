import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      const existingItem = prevItems[existingItemIndex];

      let updatedItems;
      if (existingItem) {
        // If item exists, update its quantity
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount + item.amount,
        };
        updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        // If item is new, add it
        updatedItems = [...prevItems, item];
      }

      return updatedItems;
    });

    // Update total amount
    setTotalAmount((prevTotal) => prevTotal + item.price * item.amount);
  };

  const removeItemFromCartHandler = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const cartContextValue = {  
    items,  
    totalAmount,
    addItem: addItemToCartHandler,  
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

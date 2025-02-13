import { useContext, useRef } from "react";
import CartContext from "../../../store/cart-context"
import style from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const amountInputRef = useRef(); // Ref for the input field

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +amountInputRef.current.value; // Get input value

    if (enteredAmount < 1 || enteredAmount > 5) {
      return; // Prevent invalid values
    }

    cartCtx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: enteredAmount,
    });
  };

  return (
    <form className={style.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
        ref={amountInputRef} // Pass ref to Input component
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;

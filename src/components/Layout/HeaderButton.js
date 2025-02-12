import { useContext } from "react";
import CartContext from "../../store/cart-context";
import style from "./HeaderButton.module.css"
import CartIcon from "../Cart/CartIcon";
const HeaderButton=(props)=>{

    const cartctx=useContext(CartContext);
    const numberofCartItems=cartctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount
    },0)
    return <button className={style.button} onClick={props.onClick}>
        <span className={style.icon}><CartIcon/> </span>
        <span >your cart</span>
        <span className={style.badge}>{numberofCartItems}</span>
    </button>
}

export  default HeaderButton;
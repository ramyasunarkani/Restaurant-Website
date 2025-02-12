import style from "./HeaderButton.module.css"
import CartIcon from "../Cart/CartIcon";
const HeaderButton=(props)=>{
    return <button className={style.button} onClick={props.onClick}>
        <span className={style.icon}><CartIcon/> </span>
        <span >your cart</span>
        <span className={style.badge}>0</span>
    </button>
}

export  default HeaderButton;
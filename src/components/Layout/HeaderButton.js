import style from "./HeaderButton.module.css"
import CartIcon from "../Cart/CartIcon";
const HeaderButton=()=>{
    return <button className={style.button}>
        <span className={style.icon}><CartIcon/> </span>
        <span >your cart</span>
        <span className={style.badge}>0</span>
    </button>
}

export  default HeaderButton;
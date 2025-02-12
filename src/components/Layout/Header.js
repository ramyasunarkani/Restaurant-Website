 import React,{} from "react";
 import style from './Header.module.css';
 import image from './../../Assests/meals.jpg';
 import HeaderButton from "./HeaderButton";

 const Header=props=>{
    return(
        <>
            <header className={style.header}>
            <h1>ReactMeals</h1>
            <HeaderButton onClick={props.onCartShow}/>
            </header>
            <div className={style["main-image"]}>
                <img src={image} alt="table of foods"/>
            </div>

        </>
    );
 }

 export default Header;
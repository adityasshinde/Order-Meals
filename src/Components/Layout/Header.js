import React,{Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import mealsimg from '../../assests/meals.jpg';

const Header=props=>{
     return <Fragment>
             <header className={classes.header}>
                <h1>MealsAtDoor.com</h1>
                <HeaderCartButton onClick={props.onShownCart} />
             </header>
             <div className={classes["main-image"]}>
            <img src={mealsimg} alt='Image Loading'></img>
             </div>
     </Fragment>
};

export default Header;
import React,{Fragment} from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from './Header.module.css';
import mealsimg from '../../assests/meals.jpg';
import iconApp from '../../assests/foodordering.png';

const Header=props=>{
     return <Fragment>
             <header className={classes.header}>
           <div className={classes.title}>
                <img src={iconApp} className={classes.icon}></img>
                <h1>MealsAtDoor.com</h1>
        </div>
                <HeaderCartButton onClick={props.onShownCart} />
             </header>
             <div className={classes["main-image"]}>
            <img src={mealsimg} alt='Image Loading' className={classes.ima} />
             </div>
     </Fragment>
};

export default Header;
import React from "react";
import classes from './HeaderAd.module.css';

const HeaderAd=props=>{
     return <header className={classes.header}>
                <h1>MealsAtDoor.com</h1>
                <button onClick={props.onShowForm} className={classes.button}>Add Item</button>
             </header>

};

export default HeaderAd;
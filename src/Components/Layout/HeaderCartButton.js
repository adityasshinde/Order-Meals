import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Context/cart-context';



const HeaderCartButton=props=>{
    const CartCtx=useContext(CartContext);
    const [btnIsHigh,setBtnIsHigh]=useState(false);
    const {items}=CartCtx;
    const numberOfCartItems=items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);
    const btnClass=`${classes.button} ${btnIsHigh && classes.bump}`;
    useEffect(()=>
    {
        if(items.length===0){
            return;
        }
     const timer=setBtnIsHigh(true);
    setTimeout(() => {
        setBtnIsHigh(false);
    }, 300);
    return ()=>{
        clearTimeout(timer);
    };
    },[items]);
    return <button className={btnClass} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span className={classes.hid}>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};

export default HeaderCartButton;
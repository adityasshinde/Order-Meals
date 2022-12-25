import React,{ useContext } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../Context/cart-context';
import CartItem from './CartItem';
const Cart=(props)=>{
    const CartCtx=useContext(CartContext);
    const onAddHandler=(item)=>{
        CartCtx.addItem({...item,amount:1});
    };
    const onRemoveHandler=(id)=>{
        CartCtx.removeItem(id);
    };
    const cartItems=(<ul className={classes['cart-items']}>{CartCtx.items.map((item)=>(
         <CartItem
          key={item.id}
          name={item.name} 
          price={item.price} 
          amount={item.amount} 
          onAdd={onAddHandler.bind(null,item)} 
          onRemove={onRemoveHandler.bind(null,item.id)}  />
         )
    )}</ul>);
    const hasItems=CartCtx.totalAmount>0;
    return <Modal onClick={props.onHideCart}>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>Rs.{CartCtx.totalAmount}</span>
        </div>
        <div className={classes.actions}>
           <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
          {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
};

export default Cart;
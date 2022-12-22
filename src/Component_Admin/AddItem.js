import React, { useContext, useState } from "react";
import classes from './AddItem.module.css';
import AddAvailabilityContext from "../Context/addAvailability";
const AddItem=(props)=>{
    const [enteredId,setEnteredId]=useState('');
    const [enteredName,setEnteredName]=useState('');
    const [enteredDesc,setEnteredDesc]=useState('');
    const [enteredPrice,setEnteredPrice]=useState('');
    const adAvCtx=useContext(AddAvailabilityContext);
    const idChangeHandler=(event)=>{
        setEnteredId(event.target.value);
    };
    const nameChangeHandler=(event)=>{
        setEnteredName(event.target.value);
    };
    const descChangeHandler=(event)=>{
        setEnteredDesc(event.target.value);
    };
    const priceChangeHandler=(event)=>{
        setEnteredPrice(event.target.value);
    };
  const submitHandler=(event)=>{
     event.preventDefault();
     if(enteredId.trim().length===0 || enteredName.trim().length===0 || enteredPrice.trim().length<2){
        return;
     }
    const item={
        id:enteredId,
        name:enteredName,
        description:enteredDesc,
        price:+enteredPrice
    };
    adAvCtx.addItem(item);
    props.onCancel();
    setEnteredId('');
    setEnteredName('');
    setEnteredDesc('');
    setEnteredPrice('');
  };
    return <form className={classes.form} onSubmit={submitHandler}>
         <div className={classes.field}>
            <label htmlFor="id">Id: </label>
            <input type='number' value={enteredId} id="id" name="id" onChange={idChangeHandler} />
         </div>
         <div className={classes.field}>
         <label htmlFor="name">Name: </label>
         <input type='text' id="name" value={enteredName} name="name" onChange={nameChangeHandler} />
         </div>
         <div className={classes.field}>
         <label htmlFor="desc">Description: </label>
         <input type='text' id="desc" value={enteredDesc} name="desc" onChange={descChangeHandler} />
         </div>
         <div className={classes.field}>
         <label htmlFor="price">Price: </label>
         <input type='number' id="price" value={enteredPrice} name="price" min='10' onChange={priceChangeHandler}/>
         </div>
         <div className={classes.btnfield}>
         <button type="button" className={classes.button} onClick={props.onCancel}>Cancel</button>
         <button type='submit' className={classes.button} onClick={submitHandler}>Add Item</button>
         </div>
    </form>
};

export default AddItem;
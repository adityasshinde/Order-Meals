import React, { useState} from "react";
import App from './App';
import classes from './Entrance.module.css';
import Modal from "./Components/UI/Modal";
import Admin from "./Admin";

const Entrance=props=>{
  console.log('control in entrance');
   const [userEntered,setUserEntered]= useState();
   const [isAdmin,setIsAdmin]= useState(false);
   const [isVarified,setIsVarified]=useState(false);
   const [isCustomer,setIsCustomer]= useState(false);
   const [password,setPassword]=useState();
    const enterInAdmin=()=>{
        setIsVarified(true);
    };
    const nevigateHandler=()=>{
      setIsVarified(false);
    };
    const enterToCustomer=()=>{
        setUserEntered(true);
        setIsCustomer(true);
    };

    const passwordHandler=event=>{
        setPassword(event.target.value);
    };
    const passwordSubmitHandler=(event)=>{
              event.preventDefault();
              console.log(typeof(password));
              if(password==='10041004'){
                setIsAdmin(true);
                setUserEntered(true);
                setIsVarified(false);
              }
              else{
                alert("Invalid password !!!");
              setIsVarified(false);
                return;
              }
    };
    const seeCustomerHandler=()=>{
      setUserEntered(true);
      setIsCustomer(true);
      setIsAdmin(false);
    };
    const entrance=`${!userEntered && classes.entrance}`;
    return <div className={entrance}>
              {!userEntered && <div>
                <h1 className={classes.h1}>Welcome to MealsAtDoor !!!</h1>
                <button  className={classes.btn} onClick={enterInAdmin}>Enter as Admin</button>
        
               <button  className={classes.btn} onClick={enterToCustomer}>Enter as Customer</button>
               </div>}
               {isVarified &&
                    <Modal onClick={nevigateHandler}>
                      <form className={classes.form}>
                        <h2>Authentication Required !!!</h2>
                    <label>Enter Password : </label>
                    <input type='password' className={classes.input} onChange={passwordHandler}/>
                    <button  className={classes.button} onClick={passwordSubmitHandler}>Submit</button>
                    </form></Modal>}
              {isCustomer && <App />};
              {isAdmin && <Admin onSeeCustomer={seeCustomerHandler}/>};
    </div>
};

export default Entrance;
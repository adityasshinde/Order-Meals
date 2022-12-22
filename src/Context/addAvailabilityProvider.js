import React, { useState } from "react";
import AddAvailabilityContext from "./addAvailability";

let DUMMY_MEALS = [
    {
      id: '11',
      name: 'Paneer',
      description: 'FOAT',
      price: 120,
    },
    {
      id: '33',
      name: 'Idli-Dosa',
      description: 'South Indian',
      price: 66.5,
    },
    {
      id: '12',
      name: 'Paav Bhaji',
      description: 'Mumbai Special',
      price: 25,
    },
    {
      id: '15',
      name: 'Veg Kolhapuri',
      description: 'Kolhapuri Tikhat',
      price: 40,
    },
  ];
const AddAvailabilityProvider=(props)=>{
    const [meals,setMeals]=useState(DUMMY_MEALS)
    const addItemHandler=(item)=>{
        setMeals((prevmeals)=>{
            return [item,...prevmeals]
        })
    };
    const removeItemHandler=()=>{};
   const addAvContext={
    AvailableItems:meals,
    addItem:addItemHandler,
    removeItem:removeItemHandler
   };
    return <AddAvailabilityContext.Provider value={addAvContext}>
        {props.children}
    </AddAvailabilityContext.Provider>
};

export default AddAvailabilityProvider;
import React from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals=()=>{
    console.log('Control in Meals.js')
    return <React.Fragment>
        <MealsSummary />
        <AvailableMeals />
    </React.Fragment>
};

export default React.memo(Meals);
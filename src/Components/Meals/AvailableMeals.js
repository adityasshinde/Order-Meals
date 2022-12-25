import React,{ useState } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';


const AvailableMeals=props=>{
    const [meals,setMeals]=useState([]);
    const [isLoading,setIsLoading]=useState(false);
    async function fetchItemHandler(){
        setIsLoading(true);
        const response=await fetch('https://ordermeals-1b305-default-rtdb.firebaseio.com/meal.json');
        const data=await response.json();
        const loadedMeals=[];
        for (const key in data){
            loadedMeals.push({
                id:key,
                name:data[key].name,
                description:data[key].description,
                price:data[key].price
            });
        }
        setMeals(loadedMeals);
        setIsLoading(false);
    }
  
    const availableMeals=meals.map((meal)=>(
      <MealItem
       id={meal.id}
       name={meal.name} 
       description={meal.description} 
       key={meal.id}
       price={meal.price} />
    ));
    return <section className={classes.meals}>
            <Card>
                <button className={classes.button} onClick={fetchItemHandler}>Today's Menu</button>
            {!isLoading && <ul>
                {availableMeals}
            </ul>}
            {isLoading && <div><p className={classes.load}>Loading Please wait.....</p>
                <div class={classes.loader}></div></div>}
            </Card>
    </section>
};

export default React.memo(AvailableMeals);
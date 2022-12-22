import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItems/MealItem';


const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Paneer',
      description: 'Finest fish and veggies',
      price: 120,
    },
    {
      id: 'm2',
      name: 'Idli-Dosa',
      description: 'A german specialty!',
      price: 66.5,
    },
    {
      id: 'm3',
      name: 'Paav Bhaji',
      description: 'American, raw, meaty',
      price: 25,
    },
    {
      id: 'm4',
      name: 'Veg Kolhapuri',
      description: 'Healthy...and green...',
      price: 40,
    },
  ];
const AvailableMeals=props=>{

    const availableMeals=DUMMY_MEALS.map((meal)=>(
      <MealItem
       id={meal.id}
       name={meal.name} 
       description={meal.description} 
       key={meal.id}
       price={meal.price} />
    ));
    
    return <section className={classes.meals}>
            <Card>
            <ul>
                {availableMeals}
            </ul>
            </Card>
    </section>
};

export default AvailableMeals;
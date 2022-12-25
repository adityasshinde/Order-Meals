import React from "react";
import AddAvailabilityContext from "./addAvailability";

const AddAvailabilityProvider=(props)=>{
    const meals=[];
    // const addItemHandler=(item)=>{
    //     setMeals((prevmeals)=>{
    //         return [item,...prevmeals]
    //     })
    // };
    // const fetchmovieshandler=()=>{
    //     fetch('https://swapi.py4e.com/api/films')
    //     .then((response)=>{
    //         return response.json();
    //     })
    //     .then((data)=>{
    //         const transformedData=data.results.map((movieData)=>{
    //             return {
    //                 id:movieData.episode_id,
    //                 title:movieData.title,
    //                 description:movieData.opening_crawl,
    //                 price:100
    //             }
    //         });
    //         setMeals(transformedData);

    //     })
    // };

 
    async function addItemHandler(item){
       const response=await fetch('https://ordermeals-1b305-default-rtdb.firebaseio.com/meal.json',{
        method:'POST',
        body:JSON.stringify(item),
        headers:{
            'Content-Type':'application/json'
        }
       });
        const data=await response.json();
        console.log(data);
    };
    async function removeItemHandler(id){
        const response=await fetch('https://ordermeals-1b305-default-rtdb.firebaseio.com/meal.json');
        const data=await response.json();
        for (let key in data){
         if(data[key].id===id){
            data[key].remove();
         }
        }
    };
   const addAvContext={
    AvailableItems:meals,
    addItem:addItemHandler,
    removeItem:removeItemHandler
   };
   
    return <AddAvailabilityContext.Provider value={addAvContext}>
        {props.children}
    </AddAvailabilityContext.Provider>
};

export default React.memo(AddAvailabilityProvider);
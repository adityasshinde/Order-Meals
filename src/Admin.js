
import React, { useState } from 'react';
import HeaderAd from './Component_Admin/HeaderAd';
import Modal from './Components/UI/Modal';
import AddItem from './Component_Admin/AddItem';
import AddAvailabilityProvider from './Context/addAvailabilityProvider';
import Meals from './Components/Meals/Meals';


const Admin=(props)=>{
  const [isFormShown,setIsFormShown]=useState(false);

  const formShowHandler=()=>{
    setIsFormShown(true);
  };
  const addAvailabelItemHandler=(item)=>{
    console.log(item);
    setIsFormShown(false);
  };
  const cancelHandler=()=>{
    setIsFormShown(false);
  };
  return <AddAvailabilityProvider>
          <HeaderAd onShowForm={formShowHandler}></HeaderAd>
          {isFormShown && <Modal>
            <AddItem onAddAvailableItem={addAvailabelItemHandler} onCancel={cancelHandler} />
            </Modal>}
          <Meals></Meals>
          </AddAvailabilityProvider>
}

export default Admin;

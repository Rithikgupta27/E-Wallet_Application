import React from 'react';
import '../../../App.css';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddMoneyForm from '../Forms/AddMoneyForm'
function AddMoney() {
  return (
    <div className='add-money'> 
      <Navbar/>        
      <h1>ADD MONEY</h1>
          <AddMoneyForm/>   
          <br/>        
      <Footer/>
    </div>
  );
}

export default AddMoney;

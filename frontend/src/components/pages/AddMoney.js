import React from 'react';
import '../../App.css';
import Footer from '../Footer';
import Navbar from '../Navbar';
import AddMoneyForm from '../forms/AddMoneyForm'
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

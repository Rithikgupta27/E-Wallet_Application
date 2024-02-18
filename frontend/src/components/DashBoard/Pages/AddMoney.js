import React from 'react';
import '../../../App.css';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddMoneyForm from '../Forms/AddMoneyForm'
import BankAccountTable from '../Tables/BankAccountTable';

function AddMoney() {
  return (
    <div className='add-money'> 
      <Navbar/>
      <h1>Bank Account List</h1>
      <BankAccountTable/>        
      <h1>ADD MONEY</h1>
      <AddMoneyForm/>   
      <br/>        
      <Footer/>
    </div>
  );
}

export default AddMoney;

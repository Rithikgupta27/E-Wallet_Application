import React from 'react';
import '../../../App.css';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddMoneyForm from '../Forms/AddMoneyForm'
import BankAccountTable from '../Tables/BankAccountTable';
<<<<<<< HEAD

function AddMoney() {
  return (
    <div > 
      <Navbar/>
=======
import NavbarLand from '../../Header/NavbarLand';

function AddMoney() {
  const isLoggedIn = localStorage.getItem("uniqueId") !== null;
  return (
    <div>
      {isLoggedIn ? <Navbar /> : <NavbarLand />} 
>>>>>>> ef995c31af4ae7585260a585df05690c8ff17c0f
      {/* <h1 className='heading'>Add Money</h1> */}
      <div className='flexed'>
      <div className='boxed' >
         <h1 className='subheading'>BANK ACCOUNT LIST</h1>
         <BankAccountTable/>        
      </div>
      <div >
          <AddMoneyForm/>   
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default AddMoney;

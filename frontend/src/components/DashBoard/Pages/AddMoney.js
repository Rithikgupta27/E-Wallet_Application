import React from 'react';
import '../../../App.css';
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddMoneyForm from '../Forms/AddMoneyForm'
import BankAccountTable from '../Tables/BankAccountTable';

function AddMoney() {
  return (
    <div > 
      <Navbar/>
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

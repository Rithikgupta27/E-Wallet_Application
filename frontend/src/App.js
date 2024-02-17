import React from 'react';
// import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import SendMoney from './components/pages/SendMoney';
import AddMoney from './components/pages/AddMoney';
import PayBills from './components/pages/PayBills';
import CheckBalance from './components/pages/CheckBalance';
import AddBenificary from './components/pages/AddBenificary';
import TransactionHistory from './components/pages/TransactionHistory';
import Kyc from './components/pages/Kyc';
import AddBankAccount from './components/pages/AddBankAccount';
// import HomeAdmin from './components/AdminPages/HomeAdmin'

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about-us' component={AboutUs} />
          <Route path='/contact-us' component={ContactUs} />
          <Route path='/send-money' component={SendMoney} />
          <Route path='/pay-bills' component={PayBills} />
          <Route path='/add-money' component={AddMoney} />
          <Route path='/check-balance' component={CheckBalance} />
          <Route path='/add-benificary' component={AddBenificary} />
          <Route path='/transaction-history' component={TransactionHistory} />
          <Route path='/kyc' component={Kyc} />
          <Route path='/add-bank-account' component={AddBankAccount} />
           
        </Switch>
        
      </Router>
      </>
  );
}

export default App;

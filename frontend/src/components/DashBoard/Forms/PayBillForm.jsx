import React, { useEffect, useState } from 'react';
import './Form.css';
import BillPaymentService from '../../../services/DashBoard/BillPaymentService';

const PayBillForm = () => {
    const [billType, setBillType] = useState("");
    const [amount, setAmount] = useState(0);
    const [billDescription, setBillDescription] = useState("");
    const [bills, setBills] = useState([]);

    const changedAmount = (event) => {
        setAmount(event.target.value);
    };

    const changedBillType = (event) => {
        setBillType(event.target.value);
    };

    const changedBillDescription = (event) => {
        setBillDescription(event.target.value);
    };

    const clickSubmit = (event) => {
      console.log(bills);
      const uniqueId = localStorage.getItem('uniqueId');
      event.preventDefault();
      console.log(uniqueId);
      BillPaymentService.addBill(billType, amount, billDescription, uniqueId);
    };

    useEffect(() => {
      const uniqueId = localStorage.getItem('uniqueId');
    
      const fetchBills = async () => {
        try {
          const bills = await BillPaymentService.getAllBills(uniqueId);
          setBills(bills);
          console.log(bills);
        } catch (error) {
          console.error('Error fetching bills:', error);
        }
      };
    
      fetchBills();
    }, []);

    return (
        <div className="divFlex">
            <div>
                <h2>Images</h2>
            </div>
            <div>
                <form className="styled-form" onSubmit={clickSubmit}>
                    <label>Bill Type:</label>
                    <select onChange={changedBillType} value={billType}>
                        <option value="">Select Bill Type</option>
                        <option value="electricityBill">Electricity Bill</option>
                        <option value="waterBill">Water Bill</option>
                        <option value="wifiRecharge">Wifi Recharge</option>
                        <option value="gasBill">Gas Bill</option>
                        <option value="other">Other</option>
                    </select>
                    <label>Amount:</label>
                    <input type="number" id="amount" name="amount" required value={amount} onChange={changedAmount} placeholder='Enter Amount' />
                    <label>Bill Description:</label>
                    <input type="text" id="billDescription" name="billDescription" required value={billDescription} onChange={changedBillDescription} placeholder='Enter Bill Description' />
                    <button type="submit">Add Bill Payment</button>
                </form>
            </div>
        </div>
    );
};

export default PayBillForm;

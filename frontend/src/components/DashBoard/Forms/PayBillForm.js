import React, { useEffect, useState } from 'react';
import './Form.css';
import BillPaymentService from '../../../services/DashBoard/BillPaymentService';
import axios from 'axios';

const PayBillForm = () => {
    const [billType, setBillType] = useState("");
    const [amount, setAmount] = useState(0);
    const [billDescription, setBillDescription] = useState("");

    const changedAmount = (event) => {
        setAmount(event.target.value);
    };

    const changedBillType = (event) => {
        setBillType(event.target.value);
    };

    const changedBillDescription = (event) => {
        setBillDescription(event.target.value);
    };

    const billInput = { billType, amount, billDescription };

    const uniqueId = localStorage.getItem('uniqueId');
    const clickSubmit = (event) => {
        event.preventDefault();
        console.log(billInput);
        axios.post(`http://localhost:8080/paidBills/9TCQXH0r`, billInput)
            .then((response) => {
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error adding bill payment:', error);
            });
        // BillPaymentService.payBills(billInput);
    };

    // useEffect

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

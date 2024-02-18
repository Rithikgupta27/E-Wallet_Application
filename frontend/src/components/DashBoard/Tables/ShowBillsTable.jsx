import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from '../../../services/API/axios';

const ShowBillsTable = () => {
    const [paidBills, setPaidBills] = useState([]);
  
    const showBills = () => {
      const uniqueId = localStorage.getItem('uniqueId');
      axios.get(`/paidBills/${uniqueId}`).then(
        (response) => {
          setPaidBills(response.data);
        },
        (error) => {
          console.log(error);
        }
      );
    };
  
    useEffect(() => {
      showBills(); 
    }, []);

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Bill Type</th>
            <th>Bill Description</th>
            <th>Payment Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {paidBills.length > 0 ? (
            paidBills.map((item) => (
              <tr key={item.billId}>
                <td>{item.billType}</td>
                <td>{item.billDescription}</td>
                <td>{item.paymentDate}</td>
                <td>{item.amount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Bill data</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBillsTable;

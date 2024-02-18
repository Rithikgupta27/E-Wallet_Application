import React, { useEffect, useState } from 'react';
import './Table.css';
import axios from '../../../services/API/axios';

const BankAccountTable = () => {
  const [beneficiary, setBeneficiary] = useState([]);

  useEffect(() => {
    getAllBeneficiary();
  }, []);

  

 
  

  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Relation</th>
            <th>Remove beneficiary</th>
          </tr>
        </thead>
        <tbody>
          {beneficiary.length > 0 ? (
            beneficiary.map((item) => (
              <tr key={item.id}>
                <td>{item.accountNo}</td>
                <td>{item.bankName}</td>
                <td>{item.ifscCode}</td>
                <td>{item.balance}</td>
                {/* <td>
                  <button style={{color: "white"}} onClick={() => removeBankAccount(item.id)}>Delete</button>
                </td> */}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No beneficiaries</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );

          };
export default BankAccountTable;
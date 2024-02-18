import React from 'react';
import './Table.css'
const Table = ({ beneficiaries }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <tr>
          {/* <th></th> */}
          <th>Bill Type</th>
          <th>Relation</th>
          <th>Remove beneficiary</th>
        </tr>
        {beneficiaries.length > 0 ? (
          beneficiaries.map((item) => (
            <tr key={item.billId}>
              <td>{item.billType}</td>
              <td>{item.paymentDate}</td>
              <td>{item.amount}</td>
              
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="3">No beneficiaries</td>
          </tr>
        )}
      </table>
    </div>
  );
};

export default Table;

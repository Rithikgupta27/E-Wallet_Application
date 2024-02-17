import React from 'react';
import './Table.css'
const Table = ({ beneficiaries }) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <tr>
          <th>Name</th>
          <th>Mobile No.</th>
          <th>Relation</th>
        </tr>
        {beneficiaries.length > 0 ? (
          beneficiaries.map((item) => (
            <tr key={item.bid}>
              <td>{item.name}</td>
              <td>{item.mobileNo}</td>
              <td>{item.relation}</td>
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

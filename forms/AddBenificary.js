// FormComponent.js
import React, { useState } from 'react';
import './Form.css';

    // private String name;
	// private String mobile_no;
	// private String relation;
const AddAccountForm = (props) => {
    const [bname,setBname] = useState("");
    const [mobile,setMobile] = useState(0);
    const [relation,setRelation] = useState("");
    const changedBname = (events) =>{
        setBname(events.target.value);
    }
    const changedMobile = (events) =>{
        setMobile(events.target.value);
    }
    const changedRelation = (events) =>{
        setRelation(events.target.value);
    }
    
    const clickSubmit = (events) =>{
         events.preventDefault();  
        //  props.sendBankAccount(amount); 
        //  props.sendAmount(bankAccount); 
        //  props.sendIfsc(ifsc); 
        //  props.sendBankName(bankName); 

    }
  return (
    <div className="divFlex">
       <div>
          <h2>Images</h2>
       </div>
       <div>
       <form className="styled-form" onSubmit={clickSubmit}>
         <label >Benificary Name:</label>
         <input type="text" id="bname" name="bname" required  onChange={ changedBname} placeholder='Enter Benificary Name'/>
         <label >Mobile Number:</label>
         <input type="number" id="mobile" name="mobile" required  onChange={changedMobile} placeholder='Enter Mobile Number'/>
         <label >Realtion:</label>
         <select onChange={changedRelation}>
           <option defaultValue="select">Select Relation Type</option>
           <option value="father">Father</option>
           <option value="mother">Mother</option>
           <option value="brother">Brother</option>
           <option value="sister">Sister</option>
           <option value="friend">Friend</option>
           <option value="other">other</option>
         </select>
         <button type="submit">Add Benificary</button>
       </form>
       </div>
    </div>
  );
};

export default AddAccountForm;

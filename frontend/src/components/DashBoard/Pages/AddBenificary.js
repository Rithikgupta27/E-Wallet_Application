import React, { useEffect, useState } from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
// import BenificaryService from '../../../services/DashBoard/BenificiaryService'
import axios from 'axios';

const AddBenificary = () => {
  const [beneficiary,setBeneficiary] = useState([]);
const getAllBeneficiary =()=>{
  const uniqueId = 'RVipoth7';
  axios.get(`http://localhost:8080/beneficiary/${uniqueId}`).then(
    (response)=>{
                console.log(response.data.name);
                setBeneficiary(response.data);
    },(error)=>{
                console.log(error);
    }
  );
};
useEffect(()=>{
  // const uniqueId = 'RVipoth7';
  getAllBeneficiary();
  // const response = BenificaryService.getAllBeneficiary(uniqueId);
  // alert('jhh')
  // setBeneficiary(response.data.name);
},[])

  return (
    <div>
      <Navbar/>
      <h1>List of beneficiary</h1>
      {beneficiary.length>0 ? beneficiary.map((item)=>  <h1 key={item.bid}>{item.name}</h1>):"no beneficiary"}
      <h1>Add benificary</h1>
      <AddBenificaryForm/>
      <Footer/>
    </div>
  )
}

export default AddBenificary

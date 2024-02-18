import React, { useEffect, useState } from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
import axios from '../../../services/API/axios'

const AddBenificary = () => {
  const [beneficiary,setBeneficiary] = useState([]);
const getAllBeneficiary =()=>{
  const uniqueId = localStorage.getItem('uniqueId');
  axios.get(`/beneficiary/${uniqueId}`).then(
    (response)=>{
                console.log(response.data.name);
                setBeneficiary(response.data);
    },(error)=>{
                console.log(error);
    }
  );
};
useEffect(()=>{
  getAllBeneficiary();
},[])

  return (
    <div>
      <Navbar/>
      <h1>List of beneficiary</h1>
      {beneficiary.length>0 ? beneficiary.map((item)=>  <h1 key={item.bid}>{item.name} ({item.relation})</h1>):"no beneficiary"}
      <h1>Add benificary</h1>
      <AddBenificaryForm/>
      <Footer/>
    </div>
  )
}

export default AddBenificary

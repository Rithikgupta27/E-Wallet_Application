import React, { useEffect, useState } from 'react'
import Navbar from '../../Header/Navbar'
import Footer from '../../Footer/Footer'
import AddBenificaryForm from '../Forms/AddBenificaryForm'
// import BenificaryService from '../../../services/DashBoard/BenificiaryService'
import '../../../App.css'
import axios from 'axios';
import Table from '../../Helper/Table'

const AddBenificary = () => {
  const [beneficiary,setBeneficiary] = useState([]);
const getAllBeneficiary =()=>{
  const uniqueId = localStorage.getItem('uniqueId');
  axios.get(`http://localhost:8080/beneficiary/${uniqueId}`).then(
    (response)=>{
                // console.log(response.data.name);
                setBeneficiary(response.data);
    },(error)=>{
                console.log(error);
    }
  );
};
useEffect(()=>{
  // const uniqueId = 'RVipoth7';
  getAllBeneficiary();
  },[])

  return (
    <div>
      <Navbar/>
      <h1>List of beneficiary</h1>     
     <Table beneficiaries={beneficiary} />   
       
      <h1>Add benificary</h1>
      <AddBenificaryForm />
      <Footer/>
    </div>
  )
}

export default AddBenificary

import axios from "../API/axios";

const CustomerService = {
    getCustomerDetails: (uniqueId) => {
    return new Promise((resolve, reject) => {
        axios.get(`/customer/${uniqueId}`, {})
        .then(response => {
            resolve(response);
        })
        .catch(error => {
            reject(error);
        });
    });
    },
      
  

  

};

export default CustomerService;
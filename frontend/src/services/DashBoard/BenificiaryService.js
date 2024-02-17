import axios from "../API/axios";

const BenificaryService = {
  addBeneficiary: async (bname, mobile, relation, uniqueId) => {
  try {
    const response = await axios.post(`/beneficiary/${uniqueId}`, {
      bname, mobile, relation
    });
    return response;
  } catch (error) {
    throw error;
  }
},
  getAllBeneficiary: async (uniqueId) => {
    try {
      const response = await axios.get(`/beneficiary/${uniqueId}`, {
      });
      
      console.log(response.data)
      return response;
    } catch (error) {
      throw error;
    }
  },

  

};

export default BenificaryService;


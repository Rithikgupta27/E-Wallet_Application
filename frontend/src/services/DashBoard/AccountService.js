import axios from "../API/axios";

const AccountService = {
    // add bank account
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
  

  

};

export default AccountService;
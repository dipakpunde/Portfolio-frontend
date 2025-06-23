import { toast } from "react-toastify";
import { useState } from "react";
import AdminRepository from "../repository/AdminRepository";

export const useAdmin = () => {
  const [loading, setLoading] = useState(false);

  return {
    loading,
   saveContactus: async (payload) => {
  setLoading(true);
  try {
    const response = await AdminRepository.contactus(payload);
    if (response.status === 200) {
      toast.success(response.data.message); // still show toast
      return response.data.message; // return message for frontend status
    } else {
      const warningMsg = "Unexpected response status: " + response.status;
      toast.warn(warningMsg);
      return warningMsg;
    }
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Network or Server Error";
    toast.error(errorMsg);
    throw new Error(errorMsg); // this will be caught in `Contact.js`
  } finally {
    setLoading(false);
  }
}

  };
};

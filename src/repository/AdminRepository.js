import Repository from "./Repository.js";

class AdminRepository {
  async contactus(payload) {
    try {
      const response = await Repository.get("https://portfolio-frontend-omega-five.vercel.app/auth/contact_us", payload);
      return response;
    } catch (err) {
      console.error("❌ Error in contactus API:", err.response?.data || err.message);
      throw err;
    }
  }
}

export default new AdminRepository();

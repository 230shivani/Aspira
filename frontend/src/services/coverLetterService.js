import API from "./api";

const coverLetterService = {
  create: async (data) => {
    try {
      const response = await API.post("/coverletter", data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAllByUser: async (userId) => {
    try {
      const response = await API.get(`/coverletter/user/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getById: async (id) => {
    try {
      const response = await API.get(`/coverletter/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  update: async (id, data) => {
    try {
      const response = await API.put(`/coverletter/${id}`, data);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  delete: async (id) => {
    try {
      const response = await API.delete(`/coverletter/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default coverLetterService;

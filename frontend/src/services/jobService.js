import API from "./api";

const jobService = {
  getAllJobs: async (params = {}) => {
    try {
      const response = await API.get("/jobs", { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getJobById: async (id) => {
    try {
      const response = await API.get(`/jobs/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  createJob: async (jobData) => {
    try {
      const response = await API.post("/jobs", jobData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  deleteJob: async (id) => {
    try {
      const response = await API.delete(`/jobs/${id}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getLiveJobs: async () => {
    try {
      const response = await API.get("/jobs/live");
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default jobService;

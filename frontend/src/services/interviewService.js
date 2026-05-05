import API from "./api";

const interviewService = {
  getQuestions: async (params = {}) => {
    try {
      const response = await API.get("/interview/questions", { params });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  saveAssessment: async (assessmentData) => {
    try {
      const response = await API.post("/interview/assessment", assessmentData);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  getAnalytics: async (userId) => {
    try {
      const response = await API.get(`/interview/analytics/${userId}`);
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },

  aiChat: async (message, history = []) => {
    try {
      const response = await API.post("/interview/chat", { message, history });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  },
  
  analyzeSession: async (userId, history, category = "technical") => {
    try {
      const response = await API.post("/interview/analyze", { userId, history, category });
      return response.data;
    } catch (error) {
      throw error.response?.data || error.message;
    }
  }
};

export default interviewService;

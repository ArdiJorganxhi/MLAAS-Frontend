import { axiosRequest } from "../utils/baseAxios"

export const sendSummarizeRequest = async(data) => {
    try {
       const response = axiosRequest.post('/api/models/texts/summarize', data);
       return response.data; 
    } catch(error) {
        throw error;
    }
}

export const sendGenerateRequest = async(data) => {
    try {
       const response = axiosRequest.post('/api/models/texts/generate', data);
       return response.data; 
    } catch(error) {
        throw error;
    }
}

export const sendClassificationRequest = async(data) => {
    try {
       const response = axiosRequest.post('/api/models/texts/classify', data);
       return response.data; 
    } catch(error) {
        throw error;
    }
}
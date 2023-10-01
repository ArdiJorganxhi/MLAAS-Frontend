import {axiosRequest} from '../utils/baseAxios'

export const sendRegisterRequest = async(data) => {
    try {
        const response = axiosRequest.post('/api/auth/register', data)
        return response
    } catch (error) {
        throw error;
    }

}

export const sendLoginRequest = async(data) => {
    try {
        const response = axiosRequest.post('/api/auth/login', data);
        localStorage.setItem('token', JSON.stringify(response.data))
        console.log(localStorage.getItem('token'))
        return response
    } catch (error) {
        throw error;
    }

}
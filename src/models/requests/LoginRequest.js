import { useState } from "react"
import { sendLoginRequest } from "../../services/AuthService";


export const LoginRequest = () => {
    const [loginValues, setLoginValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginValues({
          ...loginValues,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await sendLoginRequest(loginValues);
        console.log(response.data)
        return response.data;
        } catch (error) {
          throw error
        }
      }

      return {loginValues, handleChange, handleSubmit }
}
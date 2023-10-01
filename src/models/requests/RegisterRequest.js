import { useState } from "react"
import { sendRegisterRequest } from "../../services/AuthService";

export const RegisterRequest = () => {
    const [registerValues, setRegisterValues] = useState({
        username: '',
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterValues({
          ...registerValues,
          [name]: value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
        const response = await sendRegisterRequest(registerValues);
        return response;
        } catch (error) {
          throw error
        }
      }

      return {registerValues, handleChange, handleSubmit }
}
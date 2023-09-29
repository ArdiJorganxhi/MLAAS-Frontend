import { useState } from "react"

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

      return {loginValues, handleChange }
}
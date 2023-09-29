import { useState } from "react"

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

      return {registerValues, handleChange }
}
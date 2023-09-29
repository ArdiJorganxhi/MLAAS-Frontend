import { useState } from "react";

export function formValidation(loginRequest) {
    const [loginRequest, setLoginRequest] = useState(new LoginRequest('', ''))

    const handleChange = (e) => {
        const {name, value} = e.target;
        setLoginRequest((prevLoginRequest) => ({
            ...prevLoginRequest,
            [name]: value,
          }));
    }
}
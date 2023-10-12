import { useState } from "react"

export const TextRequest = () => {
    const [textValue, setTextValue] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTextValue({
          ...textValue,
          [name]: value
        });
      };


    return {handleChange, textValue}
}
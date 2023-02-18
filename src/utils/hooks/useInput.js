import { useState } from "react";

const useInput = (inputValues = '') => {
    const [text, setText] = useState (inputValues);

    const handleChange = (e) => {
        setText(e.target.value);
    };

    const cleanInput = () => {
        setText("");
    }

    return {
        value:text,
        onChange: handleChange,
        clear: cleanInput
    };
}

export default useInput;
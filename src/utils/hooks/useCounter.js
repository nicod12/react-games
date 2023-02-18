const { useState } = require("react")


const useCounter = (initialcount= 0) => {
    
    const [count,setCount] = useState(initialcount);
    

    return {
        value: count,
        increment: () => setCount((value) => value + 1),
        decrement: () => setCount((value) => value - 1),
        reset: () => setCount(0),
    };
}

export default useCounter;
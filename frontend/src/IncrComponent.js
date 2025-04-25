// import React, { useState } from "react";

// function IncrComponent() {
//     const [count, setCount] = useState(0);

//     const incrementCount = () => {
//         setCount(count + 1);
//     };

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={incrementCount}>Increment</button>
//         </div>
//     );
// }

// export default IncrComponent;

import React, { useState } from "react";

function IncrDecrComponent() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
        </div>
    );
}

export default IncrDecrComponent;


import React from 'react';

export const Counter = () => {

    const [count, setCount] = React.useState(0);

    const increment = () => {

        setCount(count + 1);

    };

    const decrement = () => {

        setCount(count - 1);

    };

    return (
        <>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </>
    )
};
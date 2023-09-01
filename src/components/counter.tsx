import {useState} from "react";

export const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <div>
            <p>Counter: {value}</p>
            <button onClick={() => setValue(value + 1)}>{"+"}</button>
            <button onClick={() => setValue(value - 1)}>{"-"}</button>
        </div>
    );
};

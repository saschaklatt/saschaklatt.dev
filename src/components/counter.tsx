import {useState} from "react";

export const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <section>
            <div className="content my-10">
                <p>Counter: {value}</p>
                <button className="btn-primary" onClick={() => setValue(value + 1)}>
                    {"+"}
                </button>
                <button className="btn-primary" onClick={() => setValue(value - 1)}>
                    {"-"}
                </button>
            </div>
        </section>
    );
};

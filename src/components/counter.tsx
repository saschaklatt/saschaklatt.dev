import {useState} from "react";

export const Counter = () => {
    const [value, setValue] = useState(0);

    return (
        <section>
            <div className="content my-10">
                <p>Counter: {value}</p>
                <div className="flex gap-4">
                    <button className="btn-accent" onClick={() => setValue(value + 1)}>
                        {"+"}
                    </button>
                    <button className="btn-accent" onClick={() => setValue(value - 1)}>
                        {"-"}
                    </button>
                </div>
            </div>
        </section>
    );
};

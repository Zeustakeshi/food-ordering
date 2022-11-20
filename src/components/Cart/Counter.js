import React, { useState } from "react";

const Counter = ({ cnt = 0 }) => {
    const [count, setCount] = useState(cnt);
    const add = () => setCount((prev) => prev + 1);
    const remove = () => setCount((prev) => (prev === 0 ? 0 : prev - 1));
    return (
        <div className="flex  justify-center items-center gap-4 select-none">
            <span
                onClick={remove}
                className="p-2 cursor-pointer bg-gray3 rounded-lg"
            >
                <svg
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon"
                    viewBox="0 0 512 512"
                >
                    <title>Remove</title>
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M400 256H112"
                    />
                </svg>
            </span>
            <div className="font-bold text-base">
                {count <= 9 ? `0${count}` : count}
            </div>
            <span
                onClick={add}
                className="p-2 cursor-pointer bg-gray3 rounded-lg"
            >
                <svg
                    width={20}
                    height={20}
                    xmlns="http://www.w3.org/2000/svg"
                    class="ionicon"
                    viewBox="0 0 512 512"
                >
                    <title>Add</title>
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="32"
                        d="M256 112v288M400 256H112"
                    />
                </svg>
            </span>
        </div>
    );
};

export default Counter;

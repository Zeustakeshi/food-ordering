import React, { useEffect, useState } from "react";

const MoveToTopButton = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    if (!show) return null;
    return (
        <a
            href="#"
            className="transition-all fixed bottom-10 right-10 bg-primary-green p-2 hover:opacity-90 text-gray4 font-medium cursor-pointer rounded-lg shadow-sm"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
                />
            </svg>
        </a>
    );
};

export default MoveToTopButton;

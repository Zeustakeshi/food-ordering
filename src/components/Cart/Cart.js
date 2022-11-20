import React from "react";
import { useApp } from "../../context/AppProvider";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import CartList from "./CartList";

const Cart = () => {
    const { carts } = useApp();
    return (
        <Tippy
            offset={[160, 15]}
            interactive
            placement="bottom-end"
            trigger="click"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    {carts.length > 0 ? <CartList /> : <></>}
                </div>
            )}
        >
            <div className="relative cursor-pointer flex justify-center items-center px-4 py-3">
                <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M19.2857 13.9285V7.38092C19.2857 5.99169 18.7777 4.65936 17.8735 3.67702C16.9693 2.69469 15.743 2.14282 14.4643 2.14282C13.1855 2.14282 11.9592 2.69469 11.055 3.67702C10.1508 4.65936 9.64282 5.99169 9.64282 7.38092V13.9285"
                        stroke="#111112"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="5.28564"
                        y="9.57141"
                        width="18.3571"
                        height="18.3571"
                        rx="3.6"
                        stroke="#111112"
                        strokeWidth="2"
                    />
                </svg>
                {carts.length > 0 && (
                    <span className="absolute top-2 right-1 font-medium  bg-gray text-gray4  flex justify-center items-center w-[40%] h-[42%] text-[12px] rounded-full">
                        {carts.length >= 99 ? "99+" : carts.length}
                    </span>
                )}
            </div>
        </Tippy>
    );
};

export default Cart;

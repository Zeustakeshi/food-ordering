import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../components/button/Button";
import Logo from "../components/logo/Logo";

const headerNavbar = [
    {
        label: "Diets",
        to: "/diets",
    },
    {
        label: "Calorie calculator",
        to: "/calorie-calculator",
    },
    {
        label: "Menu",
        to: "/menu",
    },
    {
        label: "Delivery",
        to: "/delivery",
    },
    {
        label: "about us",
        to: "/about-us",
    },
    {
        label: "Blog",
        to: "/blog",
    },
    {
        label: "FAQ",
        to: "/FAQ",
    },
];

const Header = () => {
    return (
        <div className="flex justify-between items-center px-3">
            <Logo></Logo>
            <ul className="flex justify-between items-center ">
                {headerNavbar.map((item, index) => {
                    return <NavbarItem key={index} data={item} />;
                })}
            </ul>
            <div className="flex justify-between items-center gap-8">
                <div>
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
                </div>
                <div>
                    <Button type="black">Sign In</Button>
                </div>
            </div>
        </div>
    );
};

const NavbarItem = ({ data }) => {
    return (
        <li>
            <NavLink
                className={({ isActive }) =>
                    `p-4 text-sm font-normal uppercase ${
                        isActive ? "text-blue-500" : "text-black"
                    }`
                }
                to={data.to}
            >
                {data.label}
            </NavLink>
        </li>
    );
};

export default Header;

import React from "react";
import { NavLink } from "react-router-dom";

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

const Navbar = () => {
    return (
        <ul className="flex justify-between items-center ">
            {headerNavbar.map((item, index) => {
                return <NavbarItem key={index} data={item} />;
            })}
        </ul>
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

export default Navbar;

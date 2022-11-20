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
        label: "Cart",
        to: "/cart",
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
                    `relative p-4 pb-2 text-sm font-medium uppercase ${
                        isActive ? "nav-active" : "text-black"
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

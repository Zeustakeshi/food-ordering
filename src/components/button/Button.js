import React from "react";
import { NavLink } from "react-router-dom";

const Button = ({
    type,
    children,
    className = "",
    disabled = false,
    to,
    ...props
}) => {
    let nodeclass = `hover:opacity-80 transition-all px-[25px] py-[12px] select-none ${
        disabled ? "!bg-gray3 !text-gray2" : ""
    }`;
    switch (type) {
        case "black":
            nodeclass += " bg-gray rounded-[20px] text-gray5 font-bold text-sm";
            break;
        case "green":
            nodeclass +=
                " bg-primary-green rounded-[10px] text-gray5 font-bold text-sm ";
            break;
        case "orange":
            nodeclass +=
                "bg-primary-orange rounded-[10px] text-gray5 font-bold text-sm ";
            break;

        default:
            break;
    }

    nodeclass += className;
    if (to) {
        return (
            <NavLink
                disabled={disabled}
                {...props}
                className={nodeclass}
                to={to}
            >
                {children}
            </NavLink>
        );
    }
    return (
        <button disabled={disabled} {...props} className={nodeclass}>
            {children}
        </button>
    );
};

export default Button;

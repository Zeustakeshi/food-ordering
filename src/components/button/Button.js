import React from "react";

const Button = ({ type, children, className = "", ...props }) => {
    let nodeclass = "hover:opacity-80 transition-all px-[25px] py-[12px] ";
    switch (type) {
        case "black":
            nodeclass += " bg-gray rounded-[20px] text-gray5 font-bold text-sm";
            break;
        case "green":
            nodeclass +=
                " bg-primary-green rounded-[10px] text-gray5 font-bold text-sm ";
            break;

        default:
            break;
    }

    nodeclass += className;
    return (
        <button {...props} className={nodeclass}>
            {children}
        </button>
    );
};

export default Button;

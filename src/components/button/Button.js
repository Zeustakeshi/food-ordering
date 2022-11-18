import React from "react";

const Button = ({ type, children, className = "", ...props }) => {
    let nodeclass = "hover:opacity-80 transition-all";
    switch (type) {
        case "black":
            nodeclass +=
                " bg-gray rounded-[20px] text-gray5 font-bold text-sm px-[25px] py-[12px] ";
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

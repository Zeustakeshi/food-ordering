import React from "react";

const DropdownList = ({
    items,
    handleChooseItem,
    className = "",
    itemClassName = "",
    width = 350,
}) => {
    return (
        <ul
            style={{
                width,
            }}
            className={`bg-[#fdfbfa] border-2 border-gray2 rounded-xl overflow-hidden ${className}`}
        >
            {items.map((item, index) => {
                return (
                    <li
                        key={item}
                        className={` cursor-pointer px-6 py-2 hover:bg-gray3  ${itemClassName} `}
                        onClick={() => handleChooseItem(index)}
                    >
                        {item}
                    </li>
                );
            })}
        </ul>
    );
};

export default DropdownList;

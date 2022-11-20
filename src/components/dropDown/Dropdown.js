import React, { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";
import DropdownList from "./DropdownList";

const Dropdown = ({
    label,
    wrapperClassName = "",
    className = "",
    listClassName = "",
    itemClassName = "",
    formData = {},
    name = "",
    setFormData,
    items = [],
    ...props
}) => {
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    const handleChooseItem = (index) => {
        setFormData((prev) => ({ ...prev, [name]: index }));
        hide();
    };
    return (
        <Tippy
            offset={[0, 10]}
            interactive
            placement="bottom-start"
            onClickOutside={hide}
            visible={visible}
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <DropdownList
                        items={items}
                        handleChooseItem={handleChooseItem}
                        className={listClassName}
                        itemClassName={itemClassName}
                        width={350}
                    />
                </div>
            )}
            {...props}
        >
            <div
                onClick={visible ? hide : show}
                className={`cursor-pointer select-none ${
                    label ? "flex flex-col" : ""
                } ${wrapperClassName}`}
            >
                {label && <p className="text-sm mb-2 font-medium">{label}</p>}
                <div
                    className={`group flex justify-between items-center px-6 py-3 rounded-3xl border-gray2 border-2 bg-transparent text-gray2 font-normal ${className}`}
                >
                    <span className="content-overflow-one-line">
                        {items[formData[name]]}
                    </span>
                    <span className="hidden group-hover:block transition-all ">
                        <svg
                            width="16"
                            height="8"
                            viewBox="0 0 16 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 1L8 7L15 1"
                                stroke="#111112"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            />
                        </svg>
                    </span>
                </div>
            </div>
        </Tippy>
    );
};

export default Dropdown;

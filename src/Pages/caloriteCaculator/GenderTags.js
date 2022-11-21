import React from "react";

const GenderTags = ({ formData, setFormData }) => {
    const handleChangeTag = (tag) => {
        setFormData((prev) => ({ ...prev, gender: tag }));
    };
    return (
        <div className="flex justify-start items-center gap-14 mb-10">
            <div
                onClick={() => {
                    handleChangeTag(0);
                }}
                className=" flex justify-center items-center gap-2 cursor-pointer text-sm font-semibold "
            >
                <span>
                    <svg
                        width="36"
                        height="35"
                        viewBox="0 0 36 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.6753 2.69165C17.2393 1.62984 18.7607 1.62984 19.3247 2.69165L34.2529 30.7964C34.7836 31.7954 34.0594 33 32.9282 33H3.07184C1.94058 33 1.21645 31.7954 1.74712 30.7964L16.6753 2.69165Z"
                            stroke="#F700FC"
                            stroke-width="3"
                        />
                    </svg>
                </span>
                <span
                    className={`relative ${
                        !formData.gender ? "nav-active" : ""
                    }`}
                >
                    Woman
                </span>
            </div>
            <div
                onClick={() => {
                    handleChangeTag(1);
                }}
                className="flex justify-center items-center gap-2 cursor-pointer text-sm font-semibold "
            >
                <span>
                    <svg
                        width="26"
                        height="38"
                        viewBox="0 0 26 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="24"
                            height="36"
                            rx="7"
                            stroke="#0056FC"
                            stroke-width="2"
                        />
                    </svg>
                </span>
                <span
                    className={`relative ${
                        formData.gender ? "nav-active" : ""
                    }`}
                >
                    Man
                </span>
            </div>
        </div>
    );
};

export default GenderTags;

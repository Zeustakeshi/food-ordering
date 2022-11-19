import React from "react";

const Line = ({
    direction = "all",
    height = 200,
    className = "",
    children,
}) => {
    // direction : top , bottom, all;
    return (
        <div className={className}>
            {(direction === "top" || direction === "all") && (
                <div
                    className="flex gap-[1px] bg-[linear-gradient(180deg,#EAEAEA_0%,#F5F5F5_100%)] rounded-b-full"
                    style={{ height }}
                >
                    <div className="bg-[#fdfbfa] h-full flex-1 rounded-b-[60px]"></div>
                    <div className="bg-[#fdfbfa] h-full flex-1 rounded-b-[60px]"></div>
                </div>
            )}
            {children}
            {(direction === "bottom" || direction === "all") && (
                <div
                    className="flex gap-[1px] bg-[linear-gradient(180deg,#F5F5F5_0%,#EAEAEA_100%)] rounded-t-full"
                    style={{ height }}
                >
                    <div className="bg-[#fdfbfa] h-full flex-1 rounded-t-[60px]"></div>
                    <div className="bg-[#fdfbfa] h-full flex-1 rounded-t-[60px]"></div>
                </div>
            )}
        </div>
    );
};

export default Line;

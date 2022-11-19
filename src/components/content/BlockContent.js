import React from "react";
import Title from "./Title";

const BlockContent = ({
    title,
    titleClassName = "",
    highlightsClassName = "",
    className = "",
    children,
}) => {
    return (
        <div className={`${className}`}>
            <Title
                className={titleClassName}
                content={title}
                highlightsClassName={highlightsClassName}
            ></Title>
            {children}
        </div>
    );
};

export default BlockContent;

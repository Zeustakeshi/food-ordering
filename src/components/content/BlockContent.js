import React from "react";
import Title from "./Title";

const BlockContent = ({
    title,
    titleClassName = "",
    highlightsClassName = "",
    className = "",
    tagsHeader = [],
    children,
}) => {
    return (
        <div className={`${className}`}>
            <Title
                className={titleClassName}
                content={title}
                highlightsClassName={highlightsClassName}
            ></Title>
            {tagsHeader}
            {children}
        </div>
    );
};

export default BlockContent;

import React from "react";
import parse from "html-react-parser";

export const createTitle = ([first, ...strings], ...values) => {
    return values.reduce(
        (prev, curr, index) =>
            `${prev}<span className="highlights">${curr}</span>${strings[index]}`,
        first
    );
};

const Title = ({ highlightsClassName, content, className }) => {
    if (!content) return null;
    const titleHtml = content.replaceAll(
        `className="highlights"`,
        `className=" inline-block mt-1 ${highlightsClassName}"`
    );

    return (
        <h2 className={`text-[38px] font-bold ${className}`}>
            {parse(titleHtml)}
        </h2>
    );
};

export default Title;

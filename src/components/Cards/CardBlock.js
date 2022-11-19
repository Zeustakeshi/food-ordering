import React from "react";
import BlockContent from "../content/BlockContent";
import Card from "./Card";

const CardBlock = ({
    datas,
    className = "",
    title = "",
    titleClassName = "",
}) => {
    if (datas.length == 0) return null;
    return (
        <BlockContent
            className={className}
            titleClassName={titleClassName}
            title={title}
        >
            <div className="grid grid-cols-4 gap-x-5 gap-y-7">
                {datas.map((item, index) => {
                    return <Card key={index} data={item} />;
                })}
            </div>
        </BlockContent>
    );
};

export default CardBlock;

import React from "react";
import BlockContent from "../content/BlockContent";
import { createTitle } from "../content/Title";
import Card from "./Card";

const CardBlock = ({ datas, className }) => {
    const title = createTitle`The most popular diets`;
    return (
        <BlockContent
            className={className}
            titleClassName="mb-[66px]"
            title={title}
        >
            <div className="grid grid-cols-4 gap-5">
                {datas.map((item, index) => {
                    return <Card key={index} data={item} />;
                })}
            </div>
        </BlockContent>
    );
};

export default CardBlock;

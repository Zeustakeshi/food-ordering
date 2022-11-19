import React from "react";
import { useContent } from "../../context/ContentProvider";
import BlockContent from "../content/BlockContent";
import Card from "./Card";
import Card2 from "./Card2";

const CardBlock = ({
    datas: data1,
    className = "",
    title = "",
    titleClassName = "",
    tagsHeader,
    typeCard = 1,
}) => {
    const { activeTag, setActiveTag } = useContent();
    let datas = [];
    if (tagsHeader) {
        datas = data1.filter((data) => data.tags.includes(activeTag));
    } else {
        datas = data1;
    }
    const handleChangeTag = (tag) => {
        setActiveTag(tag);
    };
    return (
        <BlockContent
            className={className}
            titleClassName={titleClassName}
            title={title}
            tagsHeader={
                <div className="flex justify-start items-center gap-5 mb-7">
                    {tagsHeader?.map((tag, index) => {
                        return (
                            <div
                                key={index}
                                className={`px-6 py-2 font-normal cursor-pointer rounded-xl transition-all border select-none
                        ${
                            activeTag === tag
                                ? " border-gray bg-transparent"
                                : "bg-gray4 border-gray4 "
                        }
                        `}
                                onClick={() => {
                                    handleChangeTag(tag);
                                }}
                            >
                                {tag}
                            </div>
                        );
                    })}
                </div>
            }
        >
            <div className="grid grid-cols-4 gap-x-5 gap-y-7">
                {datas.map((item, index) => {
                    switch (typeCard) {
                        case 1:
                            return <Card key={index} data={item} />;
                        case 2:
                            return <Card2 key={index} data={item} />;
                        default:
                            break;
                    }
                })}
            </div>
        </BlockContent>
    );
};

export default CardBlock;

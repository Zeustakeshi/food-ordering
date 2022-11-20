import React, { useState } from "react";
import { useApp } from "../../context/AppProvider";
import Button from "../button/Button";
import Image from "../image/Image";

const Card2 = ({ data }) => {
    const { setCarts, carts } = useApp();

    const { img, title, kcal, desc, price, tags } = data;
    const disabled =
        carts.filter(
            (item) => JSON.stringify(item.info) === JSON.stringify(data)
        ).length > 0;
    return (
        <div className="flex flex-col justify-start items-center">
            <div className="rounded-[48px] mb-3">
                <Image src={img}></Image>
            </div>
            <div className="flex flex-col justify-between items-start h-full">
                <div className="flex justify-between items-center w-full mb-4">
                    <p className="font-bold ">{title}</p>
                    <span className="text-gray2 font-normal">
                        {kcal[0]} kcal
                    </span>
                </div>
                <p
                    style={{ "--line": 3 }}
                    className="content-overflow-limitline font-normal text-sm text-gray2 min-h-[75px] mb-3"
                >
                    {desc}
                </p>
                <div className="flex justify-start items-center gap-5 mb-3">
                    {tags?.slice(0, 3).map((tag, index) => {
                        return (
                            <span
                                key={index}
                                className="bg-gray4 p-2 rounded-xl text-sm"
                            >
                                {tag}
                            </span>
                        );
                    })}
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-center items-center gap-2">
                        <span className="font-semibold text-lg">{price}</span>
                        <span className="text-sm font-normal text-gray2">
                            $
                        </span>
                    </div>
                    {
                        <Button
                            onClick={() => {
                                setCarts((prev) => [
                                    ...prev,
                                    { info: data, count: 1 },
                                ]);
                            }}
                            disabled={disabled}
                            type="green"
                            className={`px-3 py-2 min-w-[150px] `}
                        >
                            {disabled ? "Selected" : "Choose"}
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card2;

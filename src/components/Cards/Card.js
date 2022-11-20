import React, { useState } from "react";
import { useApp } from "../../context/AppProvider";
import Button from "../button/Button";
import Image from "../image/Image";

const Card = ({ data }) => {
    const { img, title, kcal, desc, price } = data;
    const { setCarts, carts } = useApp();
    const disabled =
        carts.filter(
            (item) => JSON.stringify(item.info) === JSON.stringify(data)
        ).length > 0;

    return (
        <div className="rounded-[48px] min-h-[500px]">
            <div className="rounded-[inherit] mb-4">
                <Image src={img} />
            </div>
            <div className="flex flex-col justify-between">
                <div className="font-bold mb-3">{title}</div>
                <div className="flex justify-start items-center gap-2 mb-4">
                    {kcal.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="px-2 text-sm font-normal rounded-lg bg-gray4"
                            >
                                {item} kcal
                            </div>
                        );
                    })}
                </div>
                <p
                    style={{ "--line": 3 }}
                    className="content-overflow-limitline font-normal text-sm text-gray2 mb-5 min-h-[75px]"
                >
                    {desc}
                </p>
                <div className="flex justify-between iten-center">
                    <div className="flex justify-start items-center gap-1 text-gray2 font-normal">
                        <span>from</span>
                        <span className="text-gray font-bold text-[28px]">
                            {price}
                        </span>
                        <span className="text-gray">pln</span>
                        <span> /day</span>
                    </div>
                    <div>
                        <Button
                            onClick={() => {
                                setCarts((prev) => [
                                    ...prev,
                                    { info: data, count: 1 },
                                ]);
                            }}
                            disabled={disabled}
                            type="green"
                        >
                            {disabled ? "Selected" : "Choose"}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;

import React from "react";
import Title, { createTitle } from "../../components/content/Title";
import imgLeft from "../../assets/images/home_oder/left.png";
import imgRight from "../../assets/images/home_oder/right.png";
import chefHatIcon from "../../assets/images/chef-hat 1.svg";
import phoneIcon from "../../assets/images/bi_phone.svg";
import deliveryIcon from "../../assets/images/delivery.svg";

import Image from "../../components/image/Image";

const steps = [
    {
        id: 1,
        color: "#1AC84B",
        icon: phoneIcon,
        title: "Choose a diet that suits you",
        desc: "Qui blanditiis praesentium voluptatum deleniti atque maxime placeat facere",
    },
    {
        id: 2,
        color: "#111112",
        icon: chefHatIcon,
        title: "We start cooking",
        desc: "Qui blanditiis praesentium voluptatum deleniti atque maxime placeat facere",
    },
    {
        id: 3,
        color: "#FFB21A",
        icon: deliveryIcon,
        title: "We're bringing the diet to your door, bon appetit! ",
        desc: "Qui blanditiis praesentium voluptatum deleniti atque maxime placeat facere",
    },
];

const Oder = () => {
    const title = createTitle`Order faster than you can get hungry ${"🖤"} `;
    return (
        <div className="container flex justify-between items-start gap-[190px] mb-20">
            <div className="flex flex-col  justify-center  items-center gap-5">
                <Title
                    content={title}
                    highlightsClassName="select-none bg-primary-orange px-8 py-2 text-sm rounded-full "
                />
                <div className="relative -translate-x-[60px]">
                    <div className="absolute top-0 right-0 translate-x-[112px] translate-y-[4px]">
                        <img src={imgRight} alt="" />
                    </div>
                    <div className="">
                        <img src={imgLeft} alt="" />
                    </div>
                </div>
            </div>
            <div className="flex-1 min-w-[720px]">
                <h4 className="mb-28 font-normal max-w-[450px] mt-5">
                    By choosing our box catering at your door, you can be sure
                    that your ready meals will be healthy and tasty.
                </h4>
                <div className="flex flex-col justify-start items-start gap-20">
                    {steps.map((step) => {
                        return <Step key={step.id} datas={step} />;
                    })}
                </div>
            </div>
        </div>
    );
};

const Step = ({ datas }) => {
    const { id, color, icon, title, desc } = datas;
    return (
        <div className="flex justify-start items-center gap-9">
            <div className="flex justify-center items-center ">
                <div
                    style={{
                        backgroundColor: color,
                    }}
                    className="w-[36px] h-[36px] select-none rounded-full bg-primary-green text-gray5 flex justify-center items-center"
                >
                    {`0${id}`}
                </div>
                <span className="w-[196px] h-[1px] bg-gray2"></span>
            </div>

            <div className="flex justify-start items-center gap-5">
                <div>
                    <span>
                        <Image src={icon}></Image>
                    </span>
                </div>
                <div className="flex flex-col gap-2 justify-start items-start">
                    <h3 className="font-bold">{title}</h3>
                    <p className="text-gray2 font-normal">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default Oder;

import React from "react";
import avocado from "../../assets/images/avocado.png";
import redApple from "../../assets/images/redApple.png";
import Button from "../../components/button/Button";
import Image from "../../components/image/Image";
import food1 from "../../assets/images/banner/food1.png";
import food2 from "../../assets/images/banner/food2.png";
import food3 from "../../assets/images/banner/food3.png";
import food4 from "../../assets/images/banner/food4.png";
import SubtractFood1 from "../../assets/images/banner/Subtract_food1.png";
import SubtractFood2 from "../../assets/images/banner/Subtract_food2.png";
import SubtractFood3 from "../../assets/images/banner/Subtract_food3.png";
import SubtractFood4 from "../../assets/images/banner/Subtract_food4.png";

const Banner = () => {
    return (
        <div className="pt-8 relative mb-[300px]">
            <div className="absolute top-20 left-0">
                <div className="absolute w-[280px] translate-x-3 -translate-y-20">
                    <Image src={food1} />
                </div>
                <div className="w-[222px]">
                    <Image src={SubtractFood1} />
                </div>
            </div>
            <div className="absolute left-0 -bottom-20">
                <div className="absolute w-[180px] translate-x-0 -translate-y-[0px]">
                    <Image src={food2} />
                </div>
                <div className="w-[230px]">
                    <Image src={SubtractFood2} />
                </div>
            </div>
            <div className="absolute top-20 right-0">
                <div className="absolute w-[243px] -translate-x-[64px] -translate-y-[50px]">
                    <Image src={food3} />
                </div>
                <div className="w-[180px]">
                    <Image src={SubtractFood3} />
                </div>
            </div>
            <div className="absolute right-0 -bottom-20">
                <div className="absolute w-[350px] -translate-x-[188px] translate-y-[84px]">
                    <Image src={food4} />
                </div>
                <div className="max-w-[220px]">
                    <Image src={SubtractFood4} />
                </div>
            </div>
            <div className="flex flex-col  justify-center items-center">
                <div className="text-gray font-medium text-[68px] flex flex-col gap-2 justify-center items-center mb-14">
                    <span className="relative">
                        <span
                            style={{ "--radius": "18px" }}
                            className=" absolute top-0 -left-5 w-[25%] h-[75%] border-2 border-tl-radius border-gray border-r-transparent border-b-transparent "
                        ></span>
                        Premium quality
                    </span>
                    <div className="flex justify-center items-center gap-5">
                        <span>catering diets</span>
                        <span className="px-10 py-3 bg-primary-orange rounded-3xl">
                            <img
                                src={redApple}
                                alt="apple"
                                className="max-w-[44px]  max-h-[44px] "
                            />
                        </span>
                        <span>for</span>
                    </div>
                    <div className="relative flex justify-center items-center gap-5">
                        <span
                            style={{ "--radius": "18px" }}
                            className=" absolute bottom-0 -right-5 w-[25%] h-[75%] border-2 border-br-radius border-gray border-t-transparent border-l-transparent "
                        ></span>
                        <span className="px-10 py-2 bg-primary-green rounded-full">
                            <img
                                src={avocado}
                                alt="avocado"
                                className="max-w-[50px] max-h-[50px]"
                            />
                        </span>
                        <span>exacting</span>
                    </div>
                </div>
                <div>
                    <p className="mb-8 text-gray2 text-base font-normal text-center max-w-[600px]">
                        Culpa qui officia deserunt mollitia animi. Et harum
                        quidem rerum facilis est et expedita distinctio. Nam
                        libero tempore, cum soluta nobis est
                    </p>
                    <div className="flex justify-center items-center gap-12">
                        <Button type="black">Adjust diet</Button>
                        <div className="relative flex justify-center items-center border-[1.6px] border-gray3 p-2 rounded-full cursor-pointer">
                            <div className="flex justify-center items-center rounded-full bg-gray3 p-3">
                                <span>
                                    <svg
                                        width="13"
                                        height="16"
                                        viewBox="0 0 13 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M12 6.26795C13.3333 7.03775 13.3333 8.96225 12 9.73205L3 14.9282C1.66667 15.698 -7.31543e-07 14.7358 -6.64245e-07 13.1962L-2.09983e-07 2.80385C-1.42685e-07 1.26425 1.66667 0.301995 3 1.0718L12 6.26795Z"
                                            fill="#111112"
                                        />
                                    </svg>
                                </span>
                            </div>
                            <span className="absolute text-center bg-white translate-x-[95%] right-0 whitespace-nowrap">
                                Watch video
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

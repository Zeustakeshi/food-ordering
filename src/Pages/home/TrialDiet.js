import React from "react";
import Button from "../../components/button/Button";
import Title, { createTitle } from "../../components/content/Title";
import imgLeft from "../../assets/images/trialdiet/image-left.png";
import imgright from "../../assets/images/trialdiet/image-right.png";

const TrialDiet = () => {
    const title = createTitle`Order your trial diet`;
    return (
        <div className="relative flex flex-col justify-center items-center py-20 bg-gray4 rounded-[100px] overflow-hidden">
            <Title content={title} className="mb-4" />
            <p className="text-base font-normal mb-12">
                Try any diet to choose the right one for you
            </p>
            <Button type="black">Choose a diet</Button>
            <div className="absolute top-0 right-0">
                <div className="absolute w-[220%] -translate-x-[92px] -translate-y-[12px]">
                    <img src={imgright} alt="img" />
                </div>
                <div>
                    <svg
                        width="312"
                        height="265"
                        viewBox="0 0 312 265"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M191.757 246.1C132.075 281.943 54.6364 262.618 18.7931 202.936C-11.8267 151.952 -2.18613 88.0094 38.4811 48.1097C53.2652 46.6653 68.258 53.6531 76.3849 67.256C65.4701 48.8353 71.1528 25.1881 88.9941 13.7347L282.136 -102.261C341.818 -138.104 419.257 -118.779 455.1 -59.0976C490.943 0.584259 471.618 78.0227 411.936 113.866L278.549 193.975C262.948 196.56 246.647 189.573 238.042 175.171C246.705 189.791 244.913 207.703 234.885 220.198L191.757 246.1Z"
                            fill="#FFB21A"
                        />
                    </svg>
                </div>
            </div>
            <div className="absolute bottom-0 left-0">
                <div className="absolute w-[220%] -translate-x-[4px] -translate-y-[259px]">
                    <img src={imgLeft} alt="img" />
                </div>
                <div>
                    <svg
                        width="312"
                        height="265"
                        viewBox="0 0 312 265"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M293.207 62.0637C257.364 2.38181 179.925 -16.9432 120.243 18.9001L-99.9364 151.134C-159.618 186.977 -178.943 264.416 -143.1 324.098C-107.257 383.779 -29.8182 403.104 29.8637 367.261L233.043 245.237C247.179 232.935 250.954 211.898 241.043 195.171C248.61 207.838 262.131 214.769 275.894 214.496C314.552 174.468 323.221 112.04 293.207 62.0637Z"
                            fill="#FFB21A"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default TrialDiet;

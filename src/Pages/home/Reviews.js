import React from "react";
import BlockContent from "../../components/content/BlockContent";
import { createTitle } from "../../components/content/Title";
import jsxToString from "jsx-to-string";
const reviews = [
    {
        start: 5,
        name: "Minh Hiếu",
        decs: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ",
    },
    {
        start: 5,
        name: "Guy Hawkins",
        decs: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ",
    },
    {
        start: 5,
        name: "Esther Howard",
        decs: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut ",
    },
    {
        start: 5,
        name: "Anonim",
        decs: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ",
    },
    {
        start: 5,
        name: "Jacob Jones",
        decs: "Minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi ",
    },
];

const Reviews = () => {
    const iconArrow = (
        <svg
            width="123"
            height="43"
            viewBox="0 0 123 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="123" height="43" rx="18" fill="#FFB21A" />
            <line
                x1="17"
                y1="21"
                x2="105"
                y2="21"
                stroke="#111112"
                stroke-width="2"
                stroke-linecap="round"
            />
            <path
                d="M93 31.0526L106.037 21.8531C106.263 21.6937 106.263 21.3588 106.037 21.1995L93 12"
                stroke="#111112"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
    );

    const title = createTitle`We cook – they enjoy every minute of their ${jsxToString(
        iconArrow
    )} lives`;

    return (
        <div className="px-4 flex justify-between items-start gap-[148px] mb-[200px]">
            <BlockContent
                title={title}
                className=""
                titleClassName="mb-20 "
                highlightsClassName="mx-3 translate-y-[6px]"
            >
                <div>
                    <p className="text-gray2 font-normal mb-7">Because we...</p>
                    <div className="flex justify-start items-center gap-8">
                        <span>
                            <svg
                                width="32"
                                height="37"
                                viewBox="0 0 32 37"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.85714 6.9375C3.07 6.9375 0 9.97988 0 13.875C0 17.7701 3.07 20.8125 6.85714 20.8125C7.66286 20.8125 8.425 20.6459 9.14286 20.3877V20.8125C9.14286 23.3635 7.09286 25.4375 4.57143 25.4375C3.30929 25.4375 2.28571 26.4731 2.28571 27.75C2.28571 29.0269 3.30929 30.0625 4.57143 30.0625C9.61286 30.0625 13.7143 25.913 13.7143 20.8125V13.875C13.7143 9.97988 10.6429 6.9375 6.85714 6.9375ZM32 13.875C32 10.0435 28.93 6.9375 25.1429 6.9375C21.3557 6.9375 18.2857 10.0435 18.2857 13.875C18.2857 17.7065 21.3557 20.8125 25.1429 20.8125C25.9486 20.8125 26.7107 20.6459 27.4286 20.3877V20.8125C27.4286 23.3635 25.3786 25.4375 22.8571 25.4375C21.595 25.4375 20.5714 26.4731 20.5714 27.75C20.5714 29.0269 21.595 30.0625 22.8571 30.0625C27.8986 30.0625 32 25.913 32 20.8125V13.875Z"
                                    fill="#FFB21A"
                                />
                            </svg>
                        </span>
                        <p className="font-normal text-base leading-6 w-[520px] ">
                            We don't accept half-measures and shortcuts, because
                            what we care about is the WOW effect. And all the
                            luck that our efforts are not in vain. We know this
                            because we closely follow the opinions of our
                            consumers.
                        </p>
                    </div>
                </div>
            </BlockContent>

            <div className="grid grid-cols-2 gap-10">
                {reviews.slice(0, 4).map((review, index) => {
                    return <ReviewContent key={index} data={review} />;
                })}
            </div>
        </div>
    );
};

const ReviewContent = ({ data }) => {
    const { start, name, decs } = data;
    return (
        <div>
            <div className="flex justify-start items-center gap-1 mb-2">
                {new Array(start).fill(0).map((item, index) => {
                    return (
                        <span>
                            <svg
                                width="18"
                                height="17"
                                viewBox="0 0 18 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.04894 0.927049C8.3483 0.00573802 9.6517 0.00574017 9.95106 0.927051L11.2451 4.90983C11.379 5.32185 11.763 5.60081 12.1962 5.60081H16.3839C17.3527 5.60081 17.7554 6.84043 16.9717 7.40983L13.5838 9.87132C13.2333 10.126 13.0866 10.5773 13.2205 10.9894L14.5146 14.9721C14.8139 15.8934 13.7595 16.6596 12.9757 16.0902L9.58778 13.6287C9.2373 13.374 8.7627 13.374 8.41221 13.6287L5.02426 16.0902C4.24054 16.6596 3.18607 15.8934 3.48542 14.9721L4.7795 10.9894C4.91338 10.5773 4.76672 10.126 4.41623 9.87132L1.02827 7.40983C0.244561 6.84043 0.647338 5.60081 1.61606 5.60081H5.8038C6.23703 5.60081 6.62099 5.32185 6.75486 4.90983L8.04894 0.927049Z"
                                    fill="#FFB21A"
                                />
                            </svg>
                        </span>
                    );
                })}
            </div>
            <div className="bg-gray4 rounded-[24px] p-4 min-h-[150px]">
                <div className="flex justify-start items-center gap-2 mb-2">
                    <h4 className="font-bold">{name}</h4>
                    <span className="my-auto w-6 h-[1px] bg-gray"></span>
                </div>
                <p
                    style={{ "--line": 3 }}
                    className="content-overflow-limitline text-gray2 text-sm font-normal"
                >
                    {decs}
                </p>
            </div>
        </div>
    );
};

export default Reviews;

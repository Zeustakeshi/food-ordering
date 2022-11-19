import React from "react";
import Title, { createTitle } from "../../components/content/Title";

const boxItems = [
    {
        icon: (
            <svg
                width="68"
                height="51"
                viewBox="0 0 68 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M61.0979 16.8999C41.9024 15.1517 41.4717 27.5628 41.4581 33.7014C57.0955 39.3916 62.0587 27.1273 62.7851 18.88C62.8745 17.8653 62.1123 16.9923 61.0979 16.8999Z"
                    stroke="#111112"
                    stroke-width="3"
                />
                <path
                    d="M7.10162 9.28913C7.77617 34.1712 23.5892 32.7247 31.3535 31.7587C36.0856 10.8901 19.3137 6.79284 8.85899 7.34153C7.84179 7.39491 7.07402 8.2709 7.10162 9.28913Z"
                    stroke="#111112"
                    stroke-width="3"
                />
                <path
                    d="M34.2419 49.1594C34.2419 48.4814 36.6152 33.9031 49.4983 27.4612"
                    stroke="#111112"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M34.242 48.8205C34.581 43.622 33.2249 24.0713 20.0027 18.9858"
                    stroke="#111112"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            </svg>
        ),
        title: "Fresh ingredients",
        desc: "Donec in nisl porttitor, blandit augue in, ullamcorper felis",
    },
    {
        icon: (
            <svg
                width="68"
                height="53"
                viewBox="0 0 68 53"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M43.3796 10.378L43.3796 47.0505C43.3796 48.4699 44.4907 49.641 45.9082 49.7156C47.4351 49.796 48.7172 48.5795 48.7172 47.0505L48.7172 34.5704C48.7172 34.2907 48.8416 34.0188 49.0434 33.8252C58.1477 25.0899 52.3061 14.8839 46.4198 9.00028C45.2467 7.82767 43.3796 8.71927 43.3796 10.378Z"
                    stroke="#111112"
                    stroke-width="3"
                />
                <path
                    d="M23.4122 12.5078V9.65925C23.4122 9.10696 22.9645 8.65925 22.4122 8.65925H21.7796C19.5165 8.65925 17.704 10.5353 17.782 12.7971L18.125 22.7447C18.2135 25.3093 20.229 27.3906 22.7895 27.5613L23.0915 27.5814V46.8196C23.0915 48.263 24.2166 49.4563 25.6575 49.541V49.541C27.2233 49.6331 28.5437 48.3882 28.5437 46.8196L28.5437 27.9022L29.4441 27.8492C32.0229 27.6975 34.0617 25.6063 34.1477 23.0244L34.492 12.6954C34.5701 10.3521 32.6253 8.44442 30.284 8.56765L29.4911 8.60938C28.96 8.63734 28.5437 9.07614 28.5437 9.608V11.8664"
                    stroke="#111112"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M23.4121 20.2056V9.30126"
                    stroke="#111112"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M28.5437 20.2056V9.30126"
                    stroke="#111112"
                    stroke-width="3"
                    stroke-linecap="round"
                />
                <path
                    d="M23.4123 11.225V11.225C23.4123 9.80799 24.561 8.65928 25.978 8.65928V8.65928C27.395 8.65928 28.5437 9.80799 28.5437 11.225V11.225"
                    stroke="#111112"
                    stroke-width="3"
                    stroke-linecap="round"
                />
            </svg>
        ),
        title: "Taste",
        desc: "Apibus sed erat nec volutpat. Interdum et malesuada",
    },
    {
        icon: (
            <svg
                width="58"
                height="41"
                viewBox="0 0 58 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M5.26348 32.4327C5.2175 31.8817 5.19409 31.3249 5.19409 30.7632C5.19409 18.7766 15.8524 9.05957 29.0001 9.05957C42.1477 9.05957 52.806 18.7766 52.806 30.7632C52.806 31.3249 52.7826 31.8817 52.7366 32.4327"
                    stroke="#111112"
                    stroke-width="3"
                />
                <circle
                    cx="28.9999"
                    cy="5.16418"
                    r="3.66418"
                    stroke="#111112"
                    stroke-width="3"
                />
                <path
                    d="M4.32836 33.0671H53.6716C55.2337 33.0671 56.5 34.3334 56.5 35.8955C56.5 37.4576 55.2337 38.7239 53.6716 38.7239H4.32836C2.7663 38.7239 1.5 37.4576 1.5 35.8955C1.5 34.3334 2.7663 33.0671 4.32836 33.0671Z"
                    stroke="#111112"
                    stroke-width="3"
                />
            </svg>
        ),
        title: "Diversity",
        desc: "Proin hendrerit molestie placerat ec ante congue placerat non sed",
    },
    {
        icon: (
            <svg
                width="61"
                height="29"
                viewBox="0 0 61 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="8.91895"
                    y="1.5"
                    width="8.54054"
                    height="25.8514"
                    rx="3.5"
                    stroke="#111112"
                    stroke-width="3"
                />
                <rect
                    x="43.5405"
                    y="1.5"
                    width="8.54054"
                    height="25.8514"
                    rx="3.5"
                    stroke="#111112"
                    stroke-width="3"
                />
                <path
                    d="M5 8.09424H8.39189V20.7564H5C3.067 20.7564 1.5 19.1894 1.5 17.2564V11.5942C1.5 9.66124 3.067 8.09424 5 8.09424Z"
                    stroke="#111112"
                    stroke-width="3"
                />
                <path
                    d="M56 8.09424H52.6081V20.7564H56C57.933 20.7564 59.5 19.1894 59.5 17.2564V11.5942C59.5 9.66124 57.933 8.09424 56 8.09424Z"
                    stroke="#111112"
                    stroke-width="3"
                />
                <rect
                    x="17.9866"
                    y="10.5674"
                    width="25.027"
                    height="6.89189"
                    stroke="#111112"
                    stroke-width="3"
                />
            </svg>
        ),
        title: "Match",
        desc: "Vivamus blandit, lorem non venenatis luctus, leo dui volutpat purusquis tinci",
    },
];

const BoxDeits = () => {
    const title = createTitle`Box diets with which you get more`;
    return (
        <div className="container">
            <Title content={title} className="mb-16" />
            <div className="grid grid-cols-4 gap-[100px]">
                {boxItems.map((item, id) => {
                    return <Item key={id} datas={item} />;
                })}
            </div>
        </div>
    );
};

const Item = ({ datas }) => {
    const { icon, title, desc } = datas;
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="w-[134px] h-[134px] flex justify-center items-center bg-gray3 rounded-[28px] mb-6">
                {icon}
            </div>
            <h3 className="font-bold mb-3">{title}</h3>
            <p className="font-normal text-sm text-gray2 text-center">{desc}</p>
        </div>
    );
};

export default BoxDeits;

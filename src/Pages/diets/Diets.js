import React from "react";
import CardBlock from "../../components/Cards/CardBlock";
import Title, { createTitle } from "../../components/content/Title";
import MainLayout from "../../layouts/MainLayout";
import Line from "../../components/line/Line";
import Button from "../../components/button/Button";

import food1 from "../../assets/images/Card/food1.png";
import food2 from "../../assets/images/Card/food2.png";
import food3 from "../../assets/images/Card/food3.png";
import food4 from "../../assets/images/Card/food4.png";
import food5 from "../../assets/images/Card/food5.png";
import food6 from "../../assets/images/Card/food6.png";
import food7 from "../../assets/images/Card/food7.png";
import food8 from "../../assets/images/Card/food8.png";

const datas = [
    {
        img: food1,
        title: "Slim",
        kcal: [1000, 1300, 1500],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 57,
    },
    {
        img: food2,
        title: "Fit",
        kcal: [1800, 2000, 2500],
        desc: "Taque earum rerum hic tenetur a sapiente maiores ...",
        price: 65,
    },
    {
        img: food3,
        title: "Vegan",
        kcal: [1300, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 59,
    },
    {
        img: food4,
        title: "Keto",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food5,
        title: "Gym",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food6,
        title: "Office box",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food7,
        title: "For moms",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food8,
        title: "Low IG",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food1,
        title: "Slim",
        kcal: [1000, 1300, 1500],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 57,
    },
    {
        img: food2,
        title: "Fit",
        kcal: [1800, 2000, 2500],
        desc: "Taque earum rerum hic tenetur a sapiente maiores ...",
        price: 65,
    },
    {
        img: food3,
        title: "Vegan",
        kcal: [1300, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 59,
    },
    {
        img: food4,
        title: "Keto",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food5,
        title: "Gym",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food6,
        title: "Office box",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food7,
        title: "For moms",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
    {
        img: food8,
        title: "Low IG",
        kcal: [1200, 1500, 2000],
        desc: "Taque earum rerum hic tenetur a sapiente maiores alias consequatur aut perferendis doloribus asperiores...",
        price: 62,
    },
];

const Diets = () => {
    const title = createTitle`Diets`;
    const title2 = createTitle`Can't you choose your diet?`;
    return (
        <MainLayout>
            <div className="container">
                <CardBlock
                    title={title}
                    datas={datas}
                    titleClassName="mb-5"
                ></CardBlock>
                <Line direction="all" height={150}>
                    <div className="flex flex-col justify-center items-center bg-gray4 rounded-[78px] py-[65px]">
                        <Title content={title2} className="mb-3"></Title>
                        <p className="font-normal text-sm text-center max-w-[438px] mb-11">
                            We'll try to help you! Take advantage of the free
                            advice of a nutritionist and choose the perfect kit
                            for yourself
                        </p>
                        <Button type="black">Adjust diet</Button>
                    </div>
                </Line>
            </div>
        </MainLayout>
    );
};

export default Diets;

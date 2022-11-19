import React from "react";
import food1 from "../../assets/images/Card/food1.png";
import food2 from "../../assets/images/Card/food2.png";
import food3 from "../../assets/images/Card/food3.png";
import food4 from "../../assets/images/Card/food4.png";
import CardBlock from "../../components/Cards/CardBlock";
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
];

const Popular = () => {
    return <CardBlock datas={datas}></CardBlock>;
};

export default Popular;

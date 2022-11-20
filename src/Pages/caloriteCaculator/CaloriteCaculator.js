import React from "react";
import Title, { createTitle } from "../../components/content/Title";
import MainLayout from "../../layouts/MainLayout";
import Caculator from "./Caculator";

const CaloriteCaculator = () => {
    const title = createTitle`Calorie calculator`;
    return (
        <MainLayout>
            <div className="container">
                <Title content={title} className="mb-5"></Title>
                <Caculator></Caculator>
            </div>
        </MainLayout>
    );
};

export default CaloriteCaculator;

import React from "react";
import CardBlock from "../../components/Cards/CardBlock";
import Title, { createTitle } from "../../components/content/Title";
import MainLayout from "../../layouts/MainLayout";
import Line from "../../components/line/Line";
import Button from "../../components/button/Button";
import { datas } from "../../fakeData/dataCard";
import { ContentProvider } from "../../context/ContentProvider";

const Diets = () => {
    const title = createTitle`Diets`;
    const title2 = createTitle`Can't you choose your diet?`;
    return (
        <MainLayout>
            <div className="container">
                <ContentProvider>
                    <CardBlock
                        title={title}
                        datas={datas}
                        titleClassName="mb-5"
                    ></CardBlock>
                </ContentProvider>
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

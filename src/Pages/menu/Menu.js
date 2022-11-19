import React from "react";
import CardBlock from "../../components/Cards/CardBlock";
import { createTitle } from "../../components/content/Title";
import MainLayout from "../../layouts/MainLayout";
import { datas } from "../../fakeData/dataCard";
import { ContentProvider } from "../../context/ContentProvider";

const tags = ["Breakfast", "II Breakfast", "Lunch", "Snacks", "Dinner"];

const Menu = () => {
    const title = createTitle`Menu`;
    return (
        <MainLayout>
            <div className="container">
                <ContentProvider tags={tags}>
                    <CardBlock
                        title={title}
                        datas={datas}
                        titleClassName="mb-5"
                        typeCard={2}
                        tagsHeader={tags}
                    ></CardBlock>
                </ContentProvider>
            </div>
        </MainLayout>
    );
};

const TagHeader = () => {
    return <div>hello</div>;
};

export default Menu;

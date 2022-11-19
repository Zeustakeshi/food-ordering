import React from "react";

import CardBlock from "../../components/Cards/CardBlock";
import { createTitle } from "../../components/content/Title";
import { ContentProvider } from "../../context/ContentProvider";
import { datas } from "../../fakeData/dataCard";

const Popular = () => {
    const title = createTitle`The most popular diets`;

    return (
        <ContentProvider>
            <CardBlock
                datas={datas.slice(0, 4)}
                className="container"
                title={title}
                titleClassName="mb-[66px]"
            ></CardBlock>
        </ContentProvider>
    );
};

export default Popular;

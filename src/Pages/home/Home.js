import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Banner from "./Banner";
import BoxDeits from "./BoxDeits";
import Oder from "./Oder";
import Popular from "./Popular";
import Reviews from "./Reviews";
import TrialDiet from "./TrialDiet";

const Home = () => {
    return (
        <MainLayout>
            <div>
                <Banner></Banner>
                <Reviews></Reviews>
                <Popular></Popular>
                <TrialDiet></TrialDiet>
                <Oder></Oder>
                <BoxDeits></BoxDeits>
            </div>
        </MainLayout>
    );
};

export default Home;

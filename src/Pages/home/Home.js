import React from "react";
import MainLayout from "../../layouts/MainLayout";
import Banner from "./Banner";
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
            </div>
        </MainLayout>
    );
};

export default Home;

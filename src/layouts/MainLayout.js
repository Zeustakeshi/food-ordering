import React from "react";
import MoveToTopButton from "../components/moveToTopButton/MoveToTopButton";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="relative bg-[#FDFBFA] ">
            <Header></Header>
            <div className="mt-[110px]">{children}</div>
            <Footer></Footer>
            <MoveToTopButton />
        </div>
    );
};

export default MainLayout;

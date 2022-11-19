import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[#FDFBFA] ">
            <Header></Header>
            <div className="mt-[30px]">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;

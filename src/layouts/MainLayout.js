import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainLayout = ({ children }) => {
    return (
        <div className="bg-[#FDFBFA] py-[50px]">
            <Header></Header>
            <div className="mt-[126px]">{children}</div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;

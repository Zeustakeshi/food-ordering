import React from "react";
import Button from "../components/button/Button";
import Cart from "../components/Cart/Cart";
import Logo from "../components/logo/Logo";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div className="py-[10px] pt-5 fixed top-0 left-[50%] -translate-x-[50%] w-full z-50 bg-[#fdfbfa]">
            <div className="container flex justify-between items-center px-4">
                <Logo></Logo>
                <Navbar></Navbar>
                <div className="flex justify-between items-center gap-8">
                    <Cart></Cart>
                    <div>
                        <Button type="black">Sign In</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;

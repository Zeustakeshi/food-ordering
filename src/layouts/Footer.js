import React from "react";
import Line from "../components/line/Line";
import Logo from "../components/logo/Logo";
import Navbar from "./Navbar";

const Footer = () => {
    return (
        <Line direction="top">
            <div className="py-[68px]  bg-gray4">
                <div className="container flex flex-col items-center justify-center">
                    <div className=" flex justify-between items-center px-4 w-full">
                        <Logo></Logo>
                        <Navbar></Navbar>
                        <div className="flex justify-center items-center gap-3">
                            <span className="font-normal text-gray2 text-sm">
                                Contact:
                            </span>
                            <span>
                                <a
                                    className="font-bold"
                                    href="tel:+84 916561440"
                                >
                                    +84 91656 1440
                                </a>
                            </span>
                        </div>
                    </div>
                    <ul className="flex justify-center items-center gap-5 mt-5 mb-10">
                        <li>
                            <a href="#" className="p-4">
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18 6.3H14.9935C14.4505 6.3 14.01 6.74 14.01 7.2835V10.7335H18L17.4155 14.532H14.0105V21.5H9.6225V14.532H6V10.7335H9.5755L9.6225 7.1285L9.616 6.4735C9.61078 5.95361 9.70867 5.43784 9.904 4.95601C10.0993 4.47418 10.3882 4.03584 10.754 3.66635C11.1198 3.29686 11.5552 3.00353 12.035 2.80334C12.5148 2.60314 13.0296 2.50004 13.5495 2.5H18V6.3Z"
                                        stroke="#111112"
                                        stroke-width="1.6"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="p-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="22"
                                    height="22"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                                    <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="p-4">
                                <svg
                                    width="22"
                                    height="22"
                                    viewBox="0 0 22 22"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M21.0834 2.75922C21.0834 2.75922 19.2336 3.85188 18.2051 4.16172C17.653 3.52694 16.9193 3.07702 16.1032 2.87282C15.2871 2.66861 14.428 2.71998 13.642 3.01997C12.856 3.31995 12.1812 3.85409 11.7086 4.55012C11.2361 5.24616 10.9888 6.07053 11.0001 6.91172V7.82838C9.38916 7.87016 7.79292 7.51288 6.35351 6.78838C4.9141 6.06387 3.67621 4.99463 2.75008 3.67588C2.75008 3.67588 -0.916585 11.9259 7.33341 15.5926C5.44556 16.874 3.19664 17.5166 0.916748 17.4259C9.16675 22.0092 19.2501 17.4259 19.2501 6.88422C19.2501 6.62938 19.2244 6.37455 19.1767 6.12338C20.1117 5.20122 21.0834 2.75922 21.0834 2.75922Z"
                                        stroke="#111112"
                                        stroke-width="1.6"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>
                            </a>
                        </li>
                    </ul>
                    <div className="flex justify-center items-center gap-8 text-gray2 font-normal">
                        <p>Policy privacy</p>
                        <p>Copyright 2022. All rights reserved</p>
                    </div>
                </div>
            </div>
        </Line>
    );
};

export default Footer;

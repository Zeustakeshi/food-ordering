import React from "react";
import { CaculatorProvider } from "../../context/CatulatorProvider";
import Result from "./Result";

const CatulatorTemplate = ({ children, title, desc }) => {
    return (
        <CaculatorProvider>
            <div className="flex justify-between items-start w-full  text-base">
                <div className="flex flex-col justify-start items-start min-h-[400px]">
                    {title && <h3 className="font-bold mb-5">{title}</h3>}
                    {desc && (
                        <div className=" mb-10">
                            <p
                                style={{
                                    "--line": 4,
                                }}
                                className="text-sm font-normal text-gray2 max-w-[500px] content-overflow-limitline"
                            >
                                {desc}{" "}
                            </p>
                            <span className="text-primary-green ">
                                <a href="#desc">see more</a>
                            </span>
                        </div>
                    )}

                    {children || <div className="font-medium">coming soon</div>}
                </div>
                {children && <Result></Result>}
            </div>
        </CaculatorProvider>
    );
};

export default CatulatorTemplate;

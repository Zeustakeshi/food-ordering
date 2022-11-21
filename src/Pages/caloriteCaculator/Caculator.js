import React, { useEffect, useState } from "react";
import CaculatorBMI from "./BMI/CaculatorBMI";
import ResultBMI from "./BMI/ResultBMI";
import CaculatorBMR from "./BMR/CaculatorBMR";
import ResultBMR from "./BMR/ResultBMR";
import CatulatorTemplate from "./CatulatorTemplate";

const caculators = [
    {
        label: "Calculator BMR",
        component: <CaculatorBMR />,
        result: <ResultBMR />,
        title: "The basal metabolic rate (BMR) calculator",
        desc: `The basal metabolic rate (BMR) is the amount of energy needed while resting in a temperate environment when the digestive system is inactive. It is the equivalent of figuring out how much gas an idle car consumes while parked. In such a state, energy will be used only to maintain vital organs, which include the heart, lungs, kidneys, nervous system, intestines, liver, lungs, sex organs, muscles, and skin. For most people, upwards of ~70% of total energy (calories) burned each day is due to upkeep. Physical activity makes up ~20% of expenditure and ~10% is used for the digestion of food, also known as thermogenesis.`,
    },
    {
        label: "Calculator BMI",
        component: <CaculatorBMI />,
        result: <ResultBMI />,
        title: "The Body Mass Index (BMI) Calculator",
        desc: "The Body Mass Index (BMI) Calculator can be used to calculate BMI value and corresponding weight status while taking age into consideration. ",
    },
    {
        label: "Calculator PPM",
        component: null,
        title: "",
        desc: "",
    },
    {
        label: "Water Calculator",
        component: null,
        title: "",
        desc: "",
    },
];
const Caculator = () => {
    const [activeTag, setActiveTag] = useState(caculators[0]);

    const handleChangeTag = (tag) => {
        setActiveTag(tag);
    };

    return (
        <div className="flex flex-col justify-center items-start gap-16">
            <div className="flex justify-start items-center gap-5">
                {caculators.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`rounded-xl border cursor-pointer select-none px-5 py-2
                    ${
                        activeTag === item
                            ? "bg-transparent border-gray"
                            : "bg-gray4 border-gray4"
                    }`}
                            onClick={() => {
                                handleChangeTag(item);
                            }}
                        >
                            {item.label}
                        </div>
                    );
                })}
            </div>
            {
                <CatulatorTemplate
                    key={activeTag.label}
                    title={activeTag.title}
                    desc={activeTag.desc}
                    result={activeTag.result}
                >
                    {activeTag.component}
                </CatulatorTemplate>
            }
            {activeTag.desc && (
                <p id="desc" className="text-base">
                    {activeTag.desc}
                </p>
            )}
        </div>
    );
};

export default Caculator;

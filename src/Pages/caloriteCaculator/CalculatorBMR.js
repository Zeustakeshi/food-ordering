import React, { useState } from "react";
import Button from "../../components/button/Button";
import Dropdown from "../../components/dropDown/Dropdown";
import { useCaculator } from "../../context/CatulatorProvider";

const formulas = ["Mifflin-St Jeor", "Harris-Benedict"];

const CalculatorBMR = () => {
    const [formData, setFormData] = useState({
        gender: 0,
        age: 18,
        weight: 60,
        height: 150,
        formula: 0,
    });

    const { setResult } = useCaculator();

    const caculator = () => {
        const { gender, age, weight, height, formula } = formData;
        if (gender === 1) {
            if (formulas[formula] === "Mifflin-St Jeor") {
                setResult(
                    Math.round(10 * weight + 6.25 * height - 5 * age + 5) / 1000
                );
            } else if (formulas[formula] === "Harris-Benedict") {
                setResult(
                    Math.round(
                        13.397 * weight + 4.799 * height - 5.677 * age + 88.362
                    ) / 1000
                );
            }
        } else {
            if (formulas[formula] === "Mifflin-St Jeor") {
                setResult(
                    Math.round(10 * weight + 6.25 * height - 5 * age - 161) /
                        1000
                );
            } else if (formulas[formula] === "Harris-Benedict") {
                setResult(
                    Math.round(
                        9.247 * weight + 3.098 * height - 4.33 * age + 447.593
                    ) / 1000
                );
            }
        }
    };

    return (
        <div>
            <Tags formData={formData} setFormData={setFormData}></Tags>
            <div className="grid grid-cols-2 gap-7">
                <InputGroup
                    id="age"
                    name="age"
                    label="Age"
                    type="number"
                    className="col-span-1 col-start-1"
                    unit="18 - 80"
                    min={18}
                    max={80}
                    setFormData={setFormData}
                />
                <InputGroup
                    id="weight"
                    name="weight"
                    label="Weight"
                    unit="kg"
                    type="number"
                    max={500}
                    min={20}
                    className="col-span-1  col-start-1"
                    setFormData={setFormData}
                />
                {/* <Dropdown
                    items={ActivityItems}
                    label="Activity level"
                    wrapperClassName="row-start-1 col-span-2 col-start-2 max-w-[350px] "
                    formData={formData}
                    setFormData={setFormData}
                    name="activeLevel"
                /> */}

                <InputGroup
                    id="Height"
                    name="height"
                    label="Height"
                    unit="cm"
                    type="number"
                    max={500}
                    min={100}
                    className="row-start-1 col-span-2 col-start-2"
                    setFormData={setFormData}
                />
                <Dropdown
                    items={formulas}
                    label="Formulas"
                    wrapperClassName=" col-span-2 col-start-2 max-w-[350px] "
                    formData={formData}
                    setFormData={setFormData}
                    name="formula"
                />
            </div>
            <Button
                type="orange"
                className="!rounded-xl mt-7"
                onClick={caculator}
            >
                Calculate
            </Button>
        </div>
    );
};

const Tags = ({ formData, setFormData }) => {
    const handleChangeTag = (tag) => {
        setFormData((prev) => ({ ...prev, gender: tag }));
    };
    return (
        <div className="flex justify-start items-center gap-14 mb-10">
            <div
                onClick={() => {
                    handleChangeTag(0);
                }}
                className=" flex justify-center items-center gap-2 cursor-pointer text-sm font-semibold "
            >
                <span>
                    <svg
                        width="36"
                        height="35"
                        viewBox="0 0 36 35"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.6753 2.69165C17.2393 1.62984 18.7607 1.62984 19.3247 2.69165L34.2529 30.7964C34.7836 31.7954 34.0594 33 32.9282 33H3.07184C1.94058 33 1.21645 31.7954 1.74712 30.7964L16.6753 2.69165Z"
                            stroke="#F700FC"
                            stroke-width="3"
                        />
                    </svg>
                </span>
                <span
                    className={`relative ${
                        !formData.gender ? "nav-active" : ""
                    }`}
                >
                    Woman
                </span>
            </div>
            <div
                onClick={() => {
                    handleChangeTag(1);
                }}
                className="flex justify-center items-center gap-2 cursor-pointer text-sm font-semibold "
            >
                <span>
                    <svg
                        width="26"
                        height="38"
                        viewBox="0 0 26 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect
                            x="1"
                            y="1"
                            width="24"
                            height="36"
                            rx="7"
                            stroke="#0056FC"
                            stroke-width="2"
                        />
                    </svg>
                </span>
                <span
                    className={`relative ${
                        formData.gender ? "nav-active" : ""
                    }`}
                >
                    Man
                </span>
            </div>
        </div>
    );
};

const InputGroup = ({
    id = "",
    type = "text",
    name = "",
    label = "",
    unit,
    className = "",
    max = 200,
    min = 1,
    setFormData,
}) => {
    return (
        <div
            className={`group flex flex-col min-w-[300px] max-w-[350px] ${className}`}
        >
            <label htmlFor={id} className="text-sm mb-2 font-medium">
                {label}{" "}
                {unit && (
                    <span className="text-sm font-normal text-gray2">{`(${unit})`}</span>
                )}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                max={max}
                min={min}
                className="px-6 py-3 rounded-3xl outline-none border-gray2 border-2 bg-transparent "
                onBlur={(e) => {
                    const value = e.target.value;
                    if (value.trim() == "" || value === 0) return;
                    setFormData((prev) => ({
                        ...prev,
                        [name]: value,
                    }));
                }}
            />
        </div>
    );
};

export default CalculatorBMR;

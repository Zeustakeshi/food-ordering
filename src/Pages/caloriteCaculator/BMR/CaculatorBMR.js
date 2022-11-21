import React, { useState } from "react";
import Button from "../../../components/button/Button";
import Dropdown from "../../../components/dropDown/Dropdown";
import { useCaculator } from "../../../context/CatulatorProvider";
import GenderTags from "../GenderTags";
import InputGroup from "../InputGroup";

const formulas = ["Mifflin-St Jeor", "Harris-Benedict"];

const CaculatorBMR = () => {
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
            <GenderTags
                formData={formData}
                setFormData={setFormData}
            ></GenderTags>
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

// const GenderTags =
export default CaculatorBMR;

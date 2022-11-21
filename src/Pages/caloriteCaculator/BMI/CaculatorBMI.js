import React, { useState } from "react";
import Button from "../../../components/button/Button";
import { useCaculator } from "../../../context/CatulatorProvider";
import GenderTags from "../GenderTags";
import InputGroup from "../InputGroup";

const formulas = ["Mifflin-St Jeor", "Harris-Benedict"];

const CaculatorBMI = () => {
    const [formData, setFormData] = useState({
        gender: 0,
        age: 18,
        weight: 60,
        height: 150,
        formula: 0,
    });

    const { setResult } = useCaculator();

    const caculator = () => {
        const { weight, height } = formData;

        console.log("w " + weight + "h" + height);
        setResult(
            Math.round((weight / (((height / 100) * height) / 100)) * 1000) /
                1000
        );
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
export default CaculatorBMI;

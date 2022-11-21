import React from "react";
import { useCaculator } from "../../../context/CatulatorProvider";
import "../table.css";

const ResultBMI = () => {
    const { result } = useCaculator();
    return (
        <div className="text-base">
            <p className="font-semibold mb-5">
                BMI ={" "}
                <span className="text-lg font-semibold text-primary-green">
                    {!result ? "1.287" : result}
                </span>{" "}
                kg/m2
            </p>
            <ActivityTable result={result}></ActivityTable>
        </div>
    );
};

const activityItems = [
    {
        label: "Sedentary: little or no exercise",
        value: "",
    },
    {
        label: "Exercise 1-3 times/week",
        value: "",
    },
    {
        label: "Exercise 4-5 times/week",
        value: "",
    },
    {
        label: "Daily exercise or intense exercise 3-4 times/week",
        value: "",
    },
    {
        label: "Intense exercise 6-7 times/week",
        value: "",
    },
    {
        label: "Very intense exercise daily, or physical job",
        value: "",
    },
];

const ActivityTable = ({ result }) => {
    return (
        <table>
            <tr>
                <th>Category</th>
                <th>BMI range - kg/m2</th>
            </tr>
            {activityItems.map((item, index) => {
                return (
                    <tr key={index}>
                        <td>{item.label}</td>
                        <td>{Math.round(result * item.x * 1000) / 1000}</td>
                    </tr>
                );
            })}
        </table>
    );
};

export default ResultBMI;

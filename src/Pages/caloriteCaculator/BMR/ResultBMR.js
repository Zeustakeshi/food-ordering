import React from "react";
import { useCaculator } from "../../../context/CatulatorProvider";
import "../table.css";

const ResultBMR = () => {
    const { result } = useCaculator();
    return (
        <div className="text-base">
            <p className="font-semibold mb-5">
                BMR ={" "}
                <span className="text-lg font-semibold text-primary-green">
                    {!result ? "1.287" : result}
                </span>{" "}
                Calories/day
            </p>
            <ActivityTable result={result}></ActivityTable>
        </div>
    );
};

const activityItems = [
    {
        label: "Sedentary: little or no exercise",
        x: 1.1997157071783937,
    },
    {
        label: "Exercise 1-3 times/week",
        x: 1.3745557924662402,
    },
    {
        label: "Exercise 4-5 times/week",
        x: 1.464818763326226,
    },
    {
        label: "Daily exercise or intense exercise 3-4 times/week",
        x: 1.5493958777540868,
    },
    {
        label: "Intense exercise 6-7 times/week",
        x: 1.7242359630419333,
    },
    {
        label: "Very intense exercise daily, or physical job",
        x: 1.8990760483297797,
    },
];

const ActivityTable = ({ result }) => {
    return (
        <table>
            <tr>
                <th>Activity Level</th>
                <th>Calorie</th>
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

export default ResultBMR;

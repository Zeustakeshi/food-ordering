import { createContext, useContext, useState } from "react";

const CaculatorContext = createContext();

const CaculatorProvider = ({ ...props }) => {
    const [result, setResult] = useState(0);
    console.log(result);
    const values = { result, setResult };
    return (
        <CaculatorContext.Provider
            value={values}
            {...props}
        ></CaculatorContext.Provider>
    );
};

const useCaculator = () => {
    const context = useContext(CaculatorContext);
    if (typeof context === "undefined")
        throw new Error("useCaculator must be used within CaculatorProvider");
    return context;
};

export { useCaculator, CaculatorProvider };

import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ ...props }) => {
    const [carts, setCarts] = useState([]);
    const values = { carts, setCarts };
    return (
        <AppContext.Provider value={values} {...props}></AppContext.Provider>
    );
};

const useApp = () => {
    const context = useContext(AppContext);
    if (typeof context === "undefined")
        throw new Error("useApp must be used within AppProvider");
    return context;
};

export { useApp, AppProvider };

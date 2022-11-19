import { createContext, useContext, useState } from "react";

const ContentContext = createContext();

const ContentProvider = ({ tags = [], ...props }) => {
    const [activeTag, setActiveTag] = useState(tags[0]);

    const values = { activeTag, setActiveTag };
    return (
        <ContentContext.Provider
            value={values}
            {...props}
        ></ContentContext.Provider>
    );
};

const useContent = () => {
    const context = useContext(ContentContext);
    if (typeof context === "undefined")
        throw new Error("useContent must be used within ContentProvider");
    return context;
};

export { useContent, ContentProvider };

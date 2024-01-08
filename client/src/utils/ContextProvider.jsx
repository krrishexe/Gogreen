import { useState } from "react";
import { Context } from "./Context";

const contextProvider = ({ children }) => {
    const [data, setData] = useState([])
    return (
        <Context.Provider value={{ data, setData }}>
            {children}
        </Context.Provider>
    )
}

export default contextProvider;
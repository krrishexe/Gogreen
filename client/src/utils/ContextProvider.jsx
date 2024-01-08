import { useState } from "react";
import { Context } from "./Context";

const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    return (
        <Context.Provider value={{ products, setProducts }}>
            {children}
        </Context.Provider>
    )
}

export default ContextProvider;
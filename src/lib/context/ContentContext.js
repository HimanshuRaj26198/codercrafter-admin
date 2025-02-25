"use client"
import { createContext, useReducer, useState, useEffect } from "react";


export const contentContext = createContext()

export const ContentContextProvider = ({ children }) => {

    const [initialValue, setInitialValue] = useState({});
    useEffect(() => {
        if (!localStorage.getItem("current_post_article")) {
            localStorage.setItem("current_post_article", JSON.stringify({}));
        } else {
            setInitialValue(JSON.parse(localStorage.getItem("current_post_article")))
        }
    }, [])


    const contentReducer = (state, action) => {
        if (action.type === "create") {
            let payload = action.payload;
            let pValue = initialValue;
            let newData = { ...pValue, ...payload };
            setInitialValue(newData);
            localStorage.setItem("current_post_article", JSON.stringify(newData));
        } else if (action.type === "clear") {
            setInitialValue({});
            localStorage.setItem("current_post_article", JSON.stringify({}));
        }
    }

    const [state, dispatch] = useReducer(contentReducer, initialValue);


    return (
        <contentContext.Provider value={{ data: initialValue, dispatch }} >
            {children}
        </contentContext.Provider>
    )

};



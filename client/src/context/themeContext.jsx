import { useEffect } from "react";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("day");

    function toggleTheme() {
        const body = document.querySelector("body");
        body.classList.remove("day", "night");
        body.classList.add(theme);      
        setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
        localStorage.setItem("theme", theme);    
    }

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            toggleTheme(savedTheme);
        }
    }, []);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};
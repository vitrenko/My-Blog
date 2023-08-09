import { useEffect, useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "day");

    useEffect(() => {
        const body = document.body;
        body.classList.remove("day", "night");
        body.classList.add(theme);
        
        localStorage.setItem("theme", theme);    
    }, [theme]);

    function toggleTheme() {            
        setTheme((prevTheme) => (prevTheme === "day" ? "night" : "day"));
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
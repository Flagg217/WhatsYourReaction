import { useState,createContent,useContext } from "react";

export const ThemeContext = createContext();    

export const useTheme = () => useContext(ThemeContext)

export default function ThemeProvider(props) {
    const { theme, setTheme } = useState("light");
    return (<ThemeContext.Provider value={{ theme, setTheme }} {...props}/>)
}
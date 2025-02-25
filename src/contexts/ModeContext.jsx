import { createContext } from "react";
import { useState } from "react";

export const ModeContext = createContext();

export const ModeProvider = ({ children }) => {
    const [mode, setMode] = useState(false);

    const handleModeChange = () => {
        setMode((prevMode) => (!prevMode));
    }

    return (
        <ModeContext.Provider value={{mode, handleModeChange}}>
            {children}
        </ModeContext.Provider>
    )
}
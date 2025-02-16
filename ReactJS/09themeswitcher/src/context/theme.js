import { useContext,createContext } from "react";
const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
});//providing data  while creating context instead of providing during provider

export const ThemeProvider =ThemeContext.Provider;//it is used to wrap components which have access to data provided in ThemeContext


//creating a hook
export default function useTheme()
{
    return useContext(ThemeContext);
    
}




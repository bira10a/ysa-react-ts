import { Theme, ThemeContext } from "./ThemeContent";
import { useMemo, useState } from "react";

const ThemeProvider: React.FC = ({children}) => {
    const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

     return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
     )
}
export {ThemeProvider};
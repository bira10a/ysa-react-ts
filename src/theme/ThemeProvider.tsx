import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from "./themeContext";
import { useMemo, useState } from "react";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes || Themes.LIGHT;

const ThemeProvider: React.FC = ({children}: any) => {
  const [theme, setTheme] = useState<Themes>(defaultTheme);

  const toggleTheme = () => {
    setTheme(theme === Themes.DARK ? Themes.LIGHT : Themes.DARK)
  }

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
export default ThemeProvider;
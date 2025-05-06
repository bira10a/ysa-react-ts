import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer";

import { useContext } from "react";
import { ThemeContext } from "../../theme/ThemeContext";


const Loyout = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const toggleTheme = (): void => {
    setTheme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
  }

  return (
    <div className={`app ${theme}`} >
      <button onClick={toggleTheme} style={{zIndex: '9', position: 'relative'}}>+++++</button>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
export{Loyout}
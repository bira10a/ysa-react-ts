import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer";
import { useTheme } from "../../app/providers/ThemeProvider";

const Loyout = () => {
  const {theme, toggleTheme} = useTheme();

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
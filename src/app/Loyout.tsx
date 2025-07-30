import { Outlet } from "react-router"
import { Header } from "../widgets/Header/ui/Header"
import { Footer } from "../widgets/Footer/ui/Footer";
import { useTheme } from "./providers/ThemeProvider";

const Loyout = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`} >
      {/* <button onClick={toggleTheme} style={{zIndex: '9', position: 'relative'}}>+++++</button> */}
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}
export{Loyout}
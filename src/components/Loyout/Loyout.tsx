import { Outlet } from "react-router"
import { Header } from "../Header/Header"
import { Footer } from "../Footer/Footer"
const Loyout = () => {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />
    </div>
  )
}
export{Loyout}
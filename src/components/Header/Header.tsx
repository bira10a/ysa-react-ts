import { NavLink } from "react-router"
const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="vacancy">Vac</NavLink>
    </div>
  )
}
export{Header}
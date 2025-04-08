import { Route, Routes } from "react-router";
import { Loyout } from "./components/Loyout/Loyout";
import { Home } from "./Pages/Home";
import { Vacancy } from "./Pages/Vacancy";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Loyout />}>
        <Route index element={<Home />} />
        <Route path="vacancy" element={<Vacancy />} />
      </Route>
    </Routes>
  )
}
export default App;
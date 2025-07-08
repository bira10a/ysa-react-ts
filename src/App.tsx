import { Route, Routes } from "react-router";
import { Suspense} from "react";
import { Loyout } from "./components/Loyout/Loyout";
import { Home } from "./Pages/Home";
import { Vacancy } from "./Pages/Vacancy";

const App = () => {
  return (
    <Suspense fallback={<div>...loading</div>} >
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<Home />} />
          <Route path="vacancy" element={<Vacancy />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default App;
import { Route, Routes } from "react-router";
import { Suspense} from "react";
import { Loyout } from "./components/Loyout/Loyout";
import { HomeAsync } from "./Pages/Home/HomeAsync";
import { VacancyAsync } from "./Pages/Vacancy/VacancyAsync";

const App = () => {
  return (
    <Suspense fallback={<div>...loading</div>} >
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<HomeAsync />} />
          <Route path="vacancy" element={<VacancyAsync />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default App;
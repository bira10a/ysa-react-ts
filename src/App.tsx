import { Route, Routes } from "react-router";
import { lazy, Suspense, useContext, useState } from "react";
import { Loyout } from "./components/Loyout/Loyout";
import { HomeAsync } from "./Pages/Home/HomeAsync";
import { VacancyAsync } from "./Pages/Vacancy/VacancyAsync";
import { ThemeProvider } from "./theme/ThemeProvider";

const App = () => {
  return (
    <ThemeProvider>
    <Suspense fallback={<div>...loading</div>} >
      <Routes>
        <Route path="/" element={<Loyout />}>
          <Route index element={<HomeAsync />} />
          <Route path="vacancy" element={<VacancyAsync />} />
        </Route>
      </Routes>
    </Suspense>

    </ThemeProvider>
  )
}
export default App;
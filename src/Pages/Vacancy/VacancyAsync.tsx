import { lazy } from "react";

 export const VacancyAsync = lazy(() => new Promise(res => {
  setTimeout(() => res(import('./Vacancy')), 1500)
}))
import { lazy } from "react";

export const MainAsync = lazy(() => new Promise(res => {
  setTimeout(() => res(import('./Main')), 1500)
}));
import { RouteProps } from "react-router"
import { Main } from "../../../pages/Main"
import { Vacancy } from "../../../pages/Vacancy"

export enum AppRoutes {
    MAIN = 'main',
    VACANCY = 'vacancy'
}

export const RoutePath: Record<AppRoutes, string> = {
 [AppRoutes.MAIN]: '/',
 [AppRoutes.VACANCY]: '/vacancy'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <Main />
    },
    [AppRoutes.VACANCY]: {
        path: RoutePath.vacancy,
        element: <Vacancy />
    },
}
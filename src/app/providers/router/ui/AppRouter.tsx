import { Route, Routes } from "react-router";
import { Suspense} from "react";
import { Loyout } from "../../../../components/Loyout/Loyout";
import { Main } from "../../../../Pages/Main";
import { Vacancy } from "../../../../Pages/Vacancy";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
     return (
        <Suspense fallback={<div>...loading</div>} >
            <Routes>
                <Route path="/" element={<Loyout />}>
                    {/* <Route index element={<Main />} />
                    <Route path="vacancy" element={<Vacancy />} /> */}
                    {Object.values(routeConfig).map(({element, path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Route>
            </Routes>
        </Suspense>
     )
}
export default AppRouter;
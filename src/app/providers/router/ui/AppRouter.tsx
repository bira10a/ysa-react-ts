import { Route, Routes } from "react-router";
import { Suspense} from "react";
import { Loyout } from "../../../../components/Loyout/Loyout";
import { routeConfig } from "../../../../shared/config/routeConfig/routeConfig";

const AppRouter = () => {
     return (
        <Suspense fallback={<div>...loading</div>} >
            <Routes>
                <Route path="/" element={<Loyout />}>
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
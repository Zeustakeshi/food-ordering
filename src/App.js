import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";

const Home = lazy(() => import("./Pages/home/Home"));
const Diets = lazy(() => import("./Pages/diets/Diets"));
const CaloriteCaculator = lazy(() =>
    import("./Pages/caloriteCaculator/CaloriteCaculator")
);
const Menu = lazy(() => import("./Pages/menu/Menu"));
const NotFound = lazy(() => import("./Pages/notfound/NotFound"));

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Suspense fallback={<></>}>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/diets" element={<Diets />}></Route>
                        <Route
                            path="/calorie-calculator"
                            element={<CaloriteCaculator />}
                        ></Route>
                        <Route path="/menu" element={<Menu />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </Routes>
                </Suspense>
            </div>
        </AppProvider>
    );
}

export default App;

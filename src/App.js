import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { AppProvider } from "./context/AppProvider";

const Home = lazy(() => import("./Pages/home/Home"));
const Diets = lazy(() => import("./Pages/diets/Diets"));
const CaloriteCaculator = lazy(() =>
    import("./Pages/caloriteCaculator/CaloriteCaculator")
);
const Menu = lazy(() => import("./Pages/menu/Menu"));

function App() {
    return (
        <AppProvider>
            <div className="App">
                <Suspense fallback={<></>}>
                    <Routes>
                        <Route path="/food-ordering" element={<Home />}></Route>
                        <Route path="/diets" element={<Diets />}></Route>
                        <Route
                            path="/calorie-calculator"
                            element={<CaloriteCaculator />}
                        ></Route>
                        <Route path="/menu" element={<Menu />}></Route>
                    </Routes>
                </Suspense>
            </div>
        </AppProvider>
    );
}

export default App;

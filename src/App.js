import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("./Pages/home/Home"));

function App() {
    return (
        <div className="App">
            <Suspense fallback={<></>}>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;

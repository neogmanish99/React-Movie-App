import "./App.css";
import Home from "./movcompnts/Home";
import Movieinfo from "./movcompnts/Movieinfo";
import Error from "./movcompnts/Error";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Movieinfo />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;

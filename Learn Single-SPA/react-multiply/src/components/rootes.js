import {BrowserRouter , Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import App from "../App";


const Routs = () => {
    return (
        <BrowserRouter basename="react-multiply">
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
        </Routes>
        </BrowserRouter>
    )
}
export default Routs

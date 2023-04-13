import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Main from "./Home/Main";
import About from "./Home/About";
import Portfolio from "./Home/Portfolio";
import QnA from "./Home/QnA";
import Contact from "./Home/Contact";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/qna" element={<QnA />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    );
}

export default App;

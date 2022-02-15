import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NoPage from "./Pages/NoPage";
import Experiments from "./Pages/Experiments.jsx";
import Footer from "./Pages/Footer.jsx";
import Perform from "./Components/Perform";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Experiments" element={<Experiments />} />
          <Route path="About" element={<About />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Perform" element={<Perform/>}/>
        </Route>
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
}
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Main/Navbar";
import Footer from "./components/Main/Footer";
import Home from "./components/Main/Home";
import Start from "./components/Main/Start";
import Search from "./components/Main/Search";
import Icons from "./components/Main/Icons";
import Docs from "./components/Main/Docs";
import Plans from "./components/Main/Plans";
import Blog from "./components/Main/Blog";
import Support from "./components/Main/Support";

function App() {
  return (
    <div className="App">
      <Navbar />
      <>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/start" element={<Start />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/icons" element={<Icons />} />
          <Route exact path="/docs" element={<Docs />} />
          <Route exact path="/plans" element={<Plans />} />
          <Route exact path="/blog" element={<Blog />} />
          <Route exact path="/support" element={<Support />} />
        </Routes>
      </>

      <Footer />
    </div>
  );
}

export default App;

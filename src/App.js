import "./App.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Start from "./components/Start";
import Search from "./components/Search";
import Icons from "./components/Icons";
import Docs from "./components/Docs";
import Plans from "./components/Plans";
import Blog from "./components/Blog";
import Support from "./components/Support";

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

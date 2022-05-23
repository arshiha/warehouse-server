import "./App.css";
import Navbar from "./Pages/Shared/Navbar.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import Blog from "./Pages/Blog/Blog.js";
import About from "./Pages/About/About.js";
import Login from "./Pages/Login/Login.js";
import Purchase from "./Pages/Purchase/Purchase.js";
import NotFound from "./Pages/Shared/NotFound/NotFound.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="purchase" element={<Purchase></Purchase>} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

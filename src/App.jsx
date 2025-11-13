import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import About from "./pages/About";
import Navigation from "./components/Navigation";
import "./App.css";

export default function App() {
  const location = useLocation();

  return (
    <div className="app-container">
      <Navigation currentPath={location.pathname} />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

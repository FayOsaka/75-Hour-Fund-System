import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./page/home";
import Dashboard from "./page/dashboard";
import MainAdmin from "./page/main_admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<MainAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./page/home";
import LoginPage from "./page/login";
import ApplicationForm from "./page/ApplicationForm";
import Dashboard from "./page/dashboard";
import MainAdmin from "./page/main_admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/application" element={<ApplicationForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/admin" element={<MainAdmin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
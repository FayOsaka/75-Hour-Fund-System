import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./page/home";
import LoginPage from "./page/login";
import ApplicationForm from "./page/ApplicationForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/application" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
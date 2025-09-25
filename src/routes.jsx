// src/routes.jsx
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import RepayLoan from "./pages/RepayLoan";
// import FAQ from "./pages/FAQ";
// import Contact from "./pages/Contact";
import App from "./App";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/repay-loan" element={<RepayLoan />} />
      {/* <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
};

export default AppRoutes;

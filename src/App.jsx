import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LandingPage from "./landing/pages/LandingPage";





function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import LoginPanel from "./components/Login/Login"
import RegistrationPage from "./components/Register/Register"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}
export default App;

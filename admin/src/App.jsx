import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import EmployeePage from "./pages/EmployeePage/EmployeePage";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import SettingPage from "./pages/SettingPage/SettingPage";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/employees" element={<EmployeePage />} />
        <Route path="/settings" element={<SettingPage />} />
        <Route path="*" element={"Page Not Found"} />
      </Routes>
    </div>
  );
}

export default App;

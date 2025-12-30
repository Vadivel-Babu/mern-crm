import "./App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import LeadsPage from "./pages/LeadsPage/LeadsPage";
import SchedulePage from "./pages/SchedulePage/SchedulePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        {/* <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        /> */}

        <Route path="/" element={<HomePage />} />
        <Route path="/leads" element={<LeadsPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={"page not found"} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;

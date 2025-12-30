import "./navbar.css";
import home from "../../assets/home.svg";
import leads from "../../assets/leads.svg";
import calender from "../../assets/calendar.svg";
import profile from "../../assets/profile.svg";
import homeActive from "../../assets/homeActive.svg";
import leadsActive from "../../assets/leadsActive.svg";
import calenderActive from "../../assets/calendarActive.svg";
import profileActive from "../../assets/profileActive.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  console.log(pathname);

  return (
    <div className="navbar">
      <button
        onClick={() => navigate("/")}
        className={pathname === "" ? "nav__btn nav__btn-active" : "nav__btn"}
      >
        <img src={pathname === "" ? homeActive : home} alt="home" />
        Home
      </button>
      <button
        onClick={() => navigate("/leads")}
        className={
          pathname === "leads" ? "nav__btn nav__btn-active" : "nav__btn"
        }
      >
        <img src={pathname === "leads" ? leadsActive : leads} alt="leads" />
        leads
      </button>
      <button
        onClick={() => navigate("/schedule")}
        className={
          pathname === "schedule" ? "nav__btn nav__btn-active" : "nav__btn"
        }
      >
        <img
          src={pathname === "schedule" ? calenderActive : calender}
          alt="calender"
        />
        schedule
      </button>
      <button
        onClick={() => navigate("/profile")}
        className={
          pathname === "profile" ? "nav__btn nav__btn-active" : "nav__btn"
        }
      >
        <img
          src={pathname === "profile" ? profileActive : profile}
          alt="profile"
        />
        profile
      </button>
    </div>
  );
};

export default Navbar;

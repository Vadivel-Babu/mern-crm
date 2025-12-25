import "./navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];

  return (
    <nav className="nav">
      <h1 className="nav__title">
        Canova<span>CRM</span>
      </h1>
      <ul className="nav__list">
        <li className={`nav__list--link ${pathname === "" && "active"}`}>
          <Link className="nav__link" to={"/"}>
            Dashboard
          </Link>
        </li>
        <li className={`nav__list--link ${pathname === "leads" && "active"}`}>
          <Link className="nav__link" to={"/leads"}>
            Leads
          </Link>
        </li>
        <li
          className={`nav__list--link ${pathname === "employees" && "active"}`}
        >
          <Link className="nav__link" to={"/employees"}>
            Employee
          </Link>
        </li>
        <li
          className={`nav__list--link ${pathname === "settings" && "active"}`}
        >
          <Link className="nav__link" to={"/settings"}>
            Setting
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

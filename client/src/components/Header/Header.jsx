import "./header.css";
import backbtn from "../../assets/backarrow.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="header__title">
        Canova<span>CRM</span>{" "}
      </h1>
      {pathname === "" ? (
        <div className="user__details">
          <h2>Good Morning</h2>
          <h3>Jhon</h3>
        </div>
      ) : (
        <div className="header__nav">
          <button onClick={() => navigate(-1)}>
            <img src={backbtn} alt="backbtn" />
          </button>
          <p>{pathname}</p>
        </div>
      )}
    </header>
  );
};

export default Header;

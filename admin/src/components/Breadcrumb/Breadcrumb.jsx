import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.css";
import breadcrumb from "../../assets/breadcrumb.svg";

const Breadcrumb = () => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="breadcrumb">
      <Link to={"/"} className="breadcrumb__link">
        Home
      </Link>
      <img src={breadcrumb} alt="arrow" />
      <Link
        to={pathname === "" ? "/" : `/${pathname}`}
        className="breadcrumb__link"
      >
        {pathname === ""
          ? "Dashboard"
          : pathname[0].toUpperCase() + pathname.slice(1)}
      </Link>
    </div>
  );
};

export default Breadcrumb;

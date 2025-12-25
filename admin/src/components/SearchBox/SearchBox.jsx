import "./searchbox.css";
import search from "../../assets/search.svg";
import { useLocation } from "react-router-dom";

const SearchBox = ({ change }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <div className="header">
      <div
        style={{ visibility: pathname === "setting" ? "hidden" : "visible" }}
        className="searchbox"
      >
        <img src={search} alt="search" className="search__img" />
        <input
          type="text"
          className="search__input"
          placeholder="Search here..."
          onChange={change}
        />
      </div>
    </div>
  );
};

export default SearchBox;

import "./searchbox.css";
import search from "../../assets/search.svg";

const SearchBox = ({ change }) => {
  return (
    <div className="searchbox">
      <img src={search} alt="search" className="search__img" />
      <input
        type="text"
        className="search__input"
        placeholder="Search here..."
        onChange={change}
      />
    </div>
  );
};

export default SearchBox;

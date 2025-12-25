import "./pagination.css";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/arrow-right.svg";

const Pagination = () => {
  return (
    <div className="pagination">
      <button className="pagination__btn">
        <img src={arrowleft} alt="arrow-left" />
        Previous
      </button>
      <button className="pagination__btn">
        Next
        <img src={arrowright} alt="arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;

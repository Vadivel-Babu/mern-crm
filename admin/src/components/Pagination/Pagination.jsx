import "./pagination.css";
import arrowleft from "../../assets/arrow-left.svg";
import arrowright from "../../assets/arrow-right.svg";
import { getPagination } from "../../utilis/pagination";

const Pagination = ({ currentPage, totalPages, setPage }) => {
  const pages = getPagination(currentPage, totalPages);

  return (
    <div className="pagination">
      <button
        onClick={() => setPage(currentPage - 1)}
        disabled={currentPage === 1}
        className="pagination__btn"
      >
        <img src={arrowleft} alt="arrow-left" />
        Previous
      </button>
      <div className="pagination--button">
        {pages.map((page, index) =>
          page === "..." ? (
            <span key={index} className="dots">
              ...
            </span>
          ) : (
            <button
              key={`page-${page}`}
              className={currentPage === page ? "active" : ""}
              onClick={() => setPage(page)}
            >
              {page}
            </button>
          )
        )}
      </div>
      <button
        onClick={() => setPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="pagination__btn"
      >
        Next
        <img src={arrowright} alt="arrow-right" />
      </button>
    </div>
  );
};

export default Pagination;

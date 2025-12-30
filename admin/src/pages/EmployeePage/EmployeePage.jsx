import { useState, useEffect } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import Pagination from "../../components/Pagination/Pagination";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./employeePage.css";
import EmployeeModel from "../../components/EmployeeModel/EmployeeModel";
import { getEmployees } from "../../api/employeeApi";

const EmployeePage = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [employees, setEmployees] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await getEmployees(currentPage, search);
      console.log(res?.data.pagination);
      console.log(res?.data?.data);
      setLoading(false);
      setEmployees(res.data?.data);
      setTotalPages(res?.data?.pagination.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, [currentPage, search]);

  return (
    <div className="employee">
      <SearchBox />
      <div className="employee__content">
        <div className="employee__btns">
          <Breadcrumb />
          <Button
            text="add employees"
            handleClick={() => setIsModelOpen(true)}
          />
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {" "}
            <EmployeeTable />
            <Pagination
              currentPage={currentPage}
              totalPages={8}
              setPage={setCurrentPage}
            />
          </>
        )}

        {isModelOpen && <EmployeeModel close={() => setIsModelOpen(false)} />}
      </div>
    </div>
  );
};

export default EmployeePage;

import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import Pagination from "../../components/Pagination/Pagination";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./employeePage.css";
import EmployeeModel from "../../components/EmployeeModel/EmployeeModel";

const EmployeePage = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

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
        <EmployeeTable />
        <Pagination
          currentPage={currentPage}
          totalPages={8}
          setPage={setCurrentPage}
        />
        {isModelOpen && <EmployeeModel close={() => setIsModelOpen(false)} />}
      </div>
    </div>
  );
};

export default EmployeePage;

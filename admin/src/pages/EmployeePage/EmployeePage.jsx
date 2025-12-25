import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Button from "../../components/Button/Button";
import EmployeeTable from "../../components/EmployeeTable/EmployeeTable";
import Pagination from "../../components/Pagination/Pagination";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./employeePage.css";

const EmployeePage = () => {
  function handleAddEmployee() {
    console.log("employee added");
  }
  return (
    <div className="employee">
      <SearchBox />
      <div className="employee__content">
        <div className="employee__btns">
          <Breadcrumb />
          <Button text="add employees" handleClick={handleAddEmployee} />
        </div>
        <EmployeeTable />
        <Pagination />
      </div>
    </div>
  );
};

export default EmployeePage;

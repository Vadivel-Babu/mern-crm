import "./employeetable.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import btn from "../../assets/btn.svg";
import active_btn from "../../assets/active_btn.svg";
import Checkbox from "../Checkbox/Checkbox";
import { useState } from "react";
import EditTooltip from "../EditTooltip/EditTooltip";

const EmployeeTable = () => {
  const [isEdit, setIsEdit] = useState("");
  const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Alice" },
    { id: 4, name: "Alice" },
    { id: 5, name: "Alice" },
    { id: 6, name: "Alice" },
    { id: 7, name: "Alice" },
    { id: 8, name: "Alice" },
    { id: 9, name: "Alice" },
  ];
  const [selectedRows, setSelectedRows] = useState({});
  const allChecked =
    employees.length > 0 && employees.every((row) => selectedRows[row.id]);

  const handleSelectAll = () => {
    const shouldSelectAll = !allChecked;
    const newState = {};

    employees.forEach((row) => {
      newState[row.id] = shouldSelectAll;
    });

    setSelectedRows(newState);
  };
  return (
    <div className="table__wrapper">
      <table className="employeetable">
        <thead>
          <tr>
            <th className="employee__name-head">
              <Checkbox checked={allChecked} onChange={handleSelectAll} />

              <span>Name</span>
            </th>
            <th className="employee__id-head">Employee ID</th>
            <th className="employee__leads-head">Assigned Leads</th>
            <th className="employee__leads-head">Closed Leads</th>
            <th>Status</th>
            <th className="action">action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr
              className={!!selectedRows[employee.id] ? "row active" : "row"}
              key={employee.id}
            >
              <td className="employee__card-cell">
                <Checkbox
                  checked={!!selectedRows[employee.id]}
                  onChange={(val) => {
                    setSelectedRows((prev) => ({
                      ...prev,
                      [employee.id]: val,
                    }));
                  }}
                />
                <EmployeeCard />{" "}
              </td>
              <td>
                <p className="employee__id">#23454GH6J7YT6</p>
              </td>
              <td>
                <p className="employee__leads">5</p>
              </td>
              <td>
                <p className="employee__leads">5</p>
              </td>
              <td>
                <div className="badge">
                  <p className="dot"></p>
                  <p className="status">active</p>
                </div>
              </td>
              <td>
                <button
                  disabled={!!!selectedRows[employee.id]}
                  onClick={() => setIsEdit(employee.id)}
                  className="action__btn"
                >
                  {!!selectedRows[employee.id] ? (
                    <img src={active_btn} alt="btn" />
                  ) : (
                    <img src={btn} alt="btn" />
                  )}
                </button>
                {isEdit == employee.id && (
                  <EditTooltip action={() => setIsEdit("")} />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeTable;

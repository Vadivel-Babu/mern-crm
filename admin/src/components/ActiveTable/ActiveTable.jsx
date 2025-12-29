import "./activetable.css";
import EmployeeCard from "../EmployeeCard/EmployeeCard";

const ActiveTable = () => {
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
  return (
    <div className="activetable__wrapper">
      <div className="tablescroll">
        <table className="activeemployeetable">
          <thead>
            <tr>
              <th className="activeemployee__name-head">Name</th>
              <th className="activeemployee__id-head">Employee ID</th>
              <th className="activeemployee__leads-head">Assigned Leads</th>
              <th className="activeemployee__leads-head">Closed Leads</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td className="activeemployee__card-cell">
                  <EmployeeCard />{" "}
                </td>
                <td>
                  <p className="activeemployee__id">#23454GH6J7YT6</p>
                </td>
                <td>
                  <p className="activeemployee__leads">5</p>
                </td>
                <td>
                  <p className="activeemployee__leads">5</p>
                </td>
                <td>
                  <div className="badge">
                    <p className="dot"></p>
                    <p className="status">active</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ActiveTable;

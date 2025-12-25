import "./leadstable.css";

const LeadsTable = () => {
  const arr = Array.from("1234567890");

  return (
    <table className="leadstable">
      <thead>
        <tr className="leadstable__headrow">
          <th className="">No.</th>
          <th className="">Name</th>
          <th className="">Email</th>
          <th className="">Source</th>
          <th>Date</th>
          <th className="">Location</th>
          <th>Language</th>
          <th>Assigned To</th>
          <th>Status</th>
          <th>Type</th>
          <th>Scheduled Date</th>
        </tr>
      </thead>
      <tbody>
        {arr.map((l) => (
          <tr key={l} className="leadstable__bodyrow">
            <td className="">1</td>
            <td>John Smith</td>
            <td>johnsmit@gmail.com</td>
            <td>Referral</td>
            <td>08-12-202</td>
            <td>Mumbai</td>
            <td>English</td>
            <td>47f5-2g6t-t6hhu</td>
            <td>Ongoing</td>
            <td>Warm</td>
            <td>12-12-2025</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LeadsTable;

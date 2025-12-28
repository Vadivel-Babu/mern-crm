import "./statustype.css";

const StatusType = () => {
  return (
    <div className="statustype">
      <p>Type</p>
      <div className="statustype__action">
        <button className="statustype--btn hot">hot</button>
        <button className="statustype--btn warm">warm</button>
        <button className="statustype--btn cold">cold</button>
      </div>
    </div>
  );
};

export default StatusType;

import "./circularprogress.css";

const Circularprogress = ({ value }) => {
  const deg = value * 3.6;
  return (
    <div className="progress-circle" style={{ "--progress": `${deg}deg` }}>
      <span>{value}%</span>
    </div>
  );
};

export default Circularprogress;

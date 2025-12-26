import { useState } from "react";

const Button = ({ handleClick, text = "button" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const btnBaseStyle = {
    color: "var( --drakgray-color)",
    backgroundColor: "var(--primary-color)",
    border: "none",
    borderRadius: "15px",
    padding: "10px 25px",
    fontSize: "18px",
    textTransform: "capitalize",
    fontWeight: 500,
    fontFamily: "var(--poppins-font)",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    minWidth: "190px",
  };
  const btnHoverStyle = {
    backgroundColor: "#f2f2f2",
  };
  const currentStyle = isHovered
    ? { ...btnBaseStyle, ...btnHoverStyle }
    : btnBaseStyle;
  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={currentStyle}
      onClick={handleClick}
    >
      {text}
    </button>
  );
};

export default Button;

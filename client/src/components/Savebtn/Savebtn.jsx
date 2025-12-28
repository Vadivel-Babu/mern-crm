import React from "react";

const Savebtn = ({ handleClick }) => {
  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: "#363636",
        borderRadius: "15px",
        color: "#FAFBFC",
        fontSize: "12px",
        padding: "6px 15px",
        fontWeight: "500",
        fontFamily: "var(--poppins)",
        margin: "0 auto",
      }}
    >
      Save
    </button>
  );
};

export default Savebtn;

import cross from "../../assets/cross.svg";
const Closebtn = ({ close }) => {
  return (
    <button
      style={{ backgroundColor: "transparent", border: "none" }}
      onClick={close}
    >
      <img src={cross} alt="close" />
    </button>
  );
};

export default Closebtn;

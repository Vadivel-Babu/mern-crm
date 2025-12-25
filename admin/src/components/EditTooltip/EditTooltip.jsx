import "./edittooltip.css";
import deleteOutline from "../../assets/delete-outline.svg";
import editOutline from "../../assets/edit-outline.svg";
const EditTooltip = ({ action }) => {
  return (
    <span className="edittooltip">
      <button className="edittooltip__btn" onClick={action}>
        <img src={editOutline} alt="btn" />
        edit
      </button>
      <button onClick={action} className="edittooltip__btn tootip-delete">
        <img src={deleteOutline} alt="btn" />
        delete
      </button>
    </span>
  );
};

export default EditTooltip;

import "./profilepage.css";
import Inputbox from "../../components/Inputbox/Inputbox";

const ProfilePage = () => {
  return (
    <div className="profilepage">
      <Inputbox label="first name" />
      <Inputbox label="last name" />
      <Inputbox label="email" type="email" />
      <Inputbox label="password" type="password" />
      <Inputbox label="confirm password" type="password" />
      <button className="profile__form-btn save-btn">Save</button>
      <button className="profile__form-btn logout-btn">Logout</button>
    </div>
  );
};

export default ProfilePage;

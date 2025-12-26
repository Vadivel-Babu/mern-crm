import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import InputBox from "../../components/InputBox/InputBox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./settingPage.css";
import Button from "../../components/Button/Button";

const SettingPage = () => {
  const [profile, setProfile] = useState({});
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };
  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log(profile);
    setProfile({});
  };
  return (
    <div className="setting">
      <SearchBox />
      <div className="setting__content">
        <Breadcrumb />
        <div className="setting__input">
          <div className="setting__title">
            <h3>Edit Profile</h3>
          </div>
          <InputBox
            label="first name"
            handleChange={handleChange}
            value={profile["first name"]}
          />
          <InputBox
            label="last name"
            handleChange={handleChange}
            value={profile["last name"]}
          />
          <InputBox
            label="email"
            type="email"
            handleChange={handleChange}
            value={profile["email"]}
          />
          <InputBox
            label="password"
            type="password"
            handleChange={handleChange}
            value={profile["password"]}
          />
          <InputBox
            label="confirm password"
            type="password"
            handleChange={handleChange}
            value={profile["confirm password"]}
          />
          <div className="button">
            <Button text="save" handleClick={handleSaveProfile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

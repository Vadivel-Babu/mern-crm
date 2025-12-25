import { useState } from "react";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import InputBox from "../../components/InputBox/InputBox";
import SearchBox from "../../components/SearchBox/SearchBox";
import "./settingPage.css";

const SettingPage = () => {
  const [profile, setProfile] = useState({});
  return (
    <div className="setting">
      <SearchBox />
      <div className="setting__content">
        <Breadcrumb />
        <div className="setting__input">
          <div className="setting__title">
            <h3>Edit Profile</h3>
          </div>
          <InputBox label="First Name" />
        </div>
      </div>
    </div>
  );
};

export default SettingPage;

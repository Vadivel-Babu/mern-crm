import Closebtn from "../Closebtn/Closebtn";
import "./csvmodel.css";
import vector from "../../assets/Vector.svg";
import upload from "../../assets/upload.svg";
import download from "../../assets/download.svg";
import { useState } from "react";
import Circularprogress from "../Circularprogress/Circularprogress";

const CSVModel = ({ close }) => {
  const [isVerifing, setIsVerifing] = useState(false);
  return (
    <div className="csvmodel">
      <div className="csvmodel__header">
        <div className="csvmodel--title">
          <h1>CSV Upload</h1>
          <p>Add your documents here</p>
        </div>
        <Closebtn close={close} />
      </div>
      <div className="csvmodel__body">
        {!isVerifing ? (
          <div className="csvmodel__body--upload">
            <div className="upload">
              <img src={upload} alt="upload" />
              <p>Drag your file(s) to start uploading</p>
            </div>
            <div className="or">
              <span>or</span>
            </div>
            <input type="file" name="" id="" />
            <div className="sample">
              <p>Sample File.csv</p>
              <img src={download} alt="download" />
            </div>
          </div>
        ) : (
          <div className="csvmodel__body--verify">
            <Circularprogress value={10} />
            <p>Verifying...</p>
            <button
              onClick={() => setIsVerifing(false)}
              className="cancel__btn"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
      <div className="csvmodel__footer">
        <button onClick={close} className="cancel__btn">
          Cancel
        </button>
        <button onClick={() => setIsVerifing(true)} className="next__btn">
          Next <img src={vector} alt="btn" />
        </button>
      </div>
    </div>
  );
};

export default CSVModel;

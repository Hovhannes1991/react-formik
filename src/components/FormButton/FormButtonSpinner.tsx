import React from "react";
import "./FormButtonSpinner.scss";
import loader_icon  from "./../../assets/loader.png"

export const FormButtonSpinner = () => {
  return (
    <div className="form_button_spinner">
      <img src={loader_icon} alt="loader icon" />
    </div>
  );
};

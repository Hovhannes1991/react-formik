import React, { FC } from "react";
import { FormButtonSpinner } from "./FormButtonSpinner";
import "./FormButton.scss";

interface IFormButtonProps {
  type?: "submit" | "button" | "reset";
  label?: string;
  loading_label?: string;
  disabled: boolean;
  is_loading: boolean;
}

export const FormButton: FC<IFormButtonProps> = (props) => {
  const { disabled, type, is_loading, label, loading_label } = props;

  

  const label_text = label || "Submit";
  const loading_label_text = loading_label || "Loading...";
  const class_name = is_loading ? "is_loading form_button" : "form_button";
  return (
    <div>
      <button
        type={type || "submit"}
        disabled={disabled}
        className={class_name}
      >
        {is_loading ? loading_label_text : label_text}
        {is_loading && <FormButtonSpinner />}
      </button>
    </div>
  );
};

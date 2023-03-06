import React, { ChangeEventHandler, FocusEventHandler, FC } from "react";
import styles from "./FormInput.module.scss";

interface IFormInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  type?: string;
  touched: Boolean;
  id: string;
  placeholder?: string;
  label: string;
  error_message?: string;
}

export const FormInput: FC<IFormInputProps> = (props) => {
  const {
    value,
    onChange,
    onBlur,
    type,
    touched,
    id,
    placeholder,
    label,
    error_message,
  } = props;
  

  
  return (
    <div className={styles.form_control}>
      <label htmlFor={id}>{label}</label>
      {/* <input {...props} />
       */}
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type={type || "text"}
        id={id}
        placeholder={placeholder}
      />

      { touched && error_message ? (
        <div className={styles.invalid_message}>{error_message}</div>
      ) : null}
    </div>
  );
};

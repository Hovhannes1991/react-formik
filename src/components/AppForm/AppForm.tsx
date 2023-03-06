import React from "react";
import styles from "./AppForm.module.scss";
import { useFormik } from "formik";
import { FormInput } from "../FormInput/FormInput";

interface IForm {
  name: string;
  last_name: string;
  email: string;
}

export const AppForm = () => {
  let initialValues: IForm = { name: "", last_name: "", email: "" };
  const onSubmit = (values: IForm) => {
    console.log('ok');
  };
  const validate = (values: IForm) => {
    const { name, last_name, email } = values;
    const errors: { name?: string; last_name?: string; email?: string } = {};
    if (!name) errors.name = "Required";
    if (!last_name) errors.last_name = "Required";
    if (!email) errors.email = "Required";
    else if (!email.includes("@")) errors.email = "Invalid E-mail fromat";

    return errors;
  };

  const formik = useFormik({ initialValues, onSubmit, validate });
  return (
    <div className={styles["app-form"]}>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          id="name"
          placeholder="Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          touched={!!formik.touched.name}
          label="Name"
          error_message={formik.errors.name}
        />

        <FormInput
          id="last_name"
          placeholder="Last Name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.last_name}
          touched={!!formik.touched.last_name}
          label="Last Name"
          error_message={formik.errors.last_name}
        />

        <FormInput
          id="email"
          placeholder="E-Mail"
          type="email"
          touched={!!formik.touched.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          label="E-Mail"
          error_message={formik.errors.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

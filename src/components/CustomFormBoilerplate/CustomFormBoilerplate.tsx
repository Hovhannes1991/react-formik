import React from "react";
import styles from "./CustomFormBoilerplate.module.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FormInput } from "../FormInput/FormInput";

interface IForm {
  name: string;
  last_name: string;
  email: string;
}

export const CustomFormBoilerplate = () => {
  let initialValues: IForm = { name: "", last_name: "", email: "" };
  const onSubmit = (values: IForm) => {
    console.log("ok");
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .max(15, "Must be 10 characters or less")
        .required("Required"),
      last_name: Yup.string()
        .trim()
        .max(20, "Must be 10 characters or less")
        .required("Required"),
      email: Yup.string()
        .trim()
        .email("Invalid email address")
        .required("Required"),
    }),
  });
  

  return (
    <div className={styles["custom-form"]}>
      <form onSubmit={formik.handleSubmit}>
        <FormInput
          {...formik.getFieldProps("name")}
          id="name"
          placeholder="Name"
          touched={!!formik.touched.name}
          label="Name"
          error_message={formik.errors.name}
        />

        <FormInput
          {...formik.getFieldProps("last_name")}
          id="last_name"
          placeholder="Last Name"
          touched={!!formik.touched.last_name}
          label="Last Name"
          error_message={formik.errors.last_name}
        />

        <FormInput
          {...formik.getFieldProps("email")}
          id="email"
          placeholder="E-Mail"
          type="email"
          touched={!!formik.touched.email}
          label="E-Mail"
          error_message={formik.errors.email}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

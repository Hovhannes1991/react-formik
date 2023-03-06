import React from "react";
import styles from "./FormicCmponents.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CustomErrorMessageComponent } from "../CustomErrorMessageComponent/CustomErrorMessageComponent";
import { FormButton } from "../FormButton/FormButton";

interface IForm {
  name: string;
  last_name: string;
  email: string;
  comments: string;
}

export const FormicCmponents = () => {
  let initialValues: IForm = {
    name: "",
    last_name: "",
    email: "",
    comments: "",
  };
  const onSubmit = (values: IForm) => {
    console.log("Submiting...");
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Submited!");
        resolve("Submited!");
      }, 2000);
    });
  };
  const validationSchema = Yup.object({
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
  });

  return (
    <div className={styles["custom-form"]}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(data) => {
          const formIsValid = data.isValid;
          const formisSubmitting = data.isSubmitting;

          return (
            <Form>
              <div className={styles.form_field_wrapper}>
                <label htmlFor="name">Name</label>
                <Field name="name" id="name" placeholder="Name" label="Name" />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={styles.invalid_message}
                />
              </div>

              <div className={styles.form_field_wrapper}>
                <label htmlFor="ast_name">Last Name</label>
                <Field
                  name="last_name"
                  id="last_name"
                  placeholder="Last Name"
                  label="Last Name"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className={styles.invalid_message}
                />
              </div>

              <div className={styles.form_field_wrapper}>
                <label htmlFor="email">E-mail</label>
                <Field
                  name="email"
                  id="email"
                  placeholder="E-Mail"
                  type="email"
                  label="E-Mail"
                />
                <ErrorMessage
                  name="email"
                  component={CustomErrorMessageComponent}
                />
              </div>

              <div className={styles.form_field_wrapper}>
                <label htmlFor="comments">Comments</label>
                <Field
                  name="comments"
                  id="comments"
                  placeholder="Comments"
                  as="textarea"
                  label="E-Mail"
                />
              </div>
              <FormButton
                is_loading={formisSubmitting}
                disabled={!formIsValid}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

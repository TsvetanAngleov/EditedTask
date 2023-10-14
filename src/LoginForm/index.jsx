import React from "react";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

import Field from "../ReusableCompoinents/Field";
import SubmitButton from "../ReusableCompoinents/Button";
import styles from "./LoginForm.module.css";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .matches(/^(?=.*[A-Za-zА-Яа-яЁё])(?=.*\d)[A-Za-zА-Яа-яЁё\d]{6,}$/, "Invalid password")
    .required("Password is required"),
});

const LoginForm = () => {
  const handleLogin = (values, { setSubmitting }) => {
    // handle post request here (send values to the API)
    window.localStorage.setItem("loginData", JSON.stringify(values));
    setSubmitting(false);
  };

  return (
    <div>
      <h2 className={styles.header}>Login</h2>
      <div className={styles.container}>
        <h1>SIGN IN TO YOUR ACCOUNT</h1>
        <Formik
          initialValues={{ email: "", password: "", rememberMe: false }}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          {({ isSubmitting }) => (
            <FormikForm>
              <div className={styles.login_field}>
                <Field
                  type="email"
                  name="email"
                  placeholder="Email:"
                  label="email"
                />
              </div>
              <div className={styles.login_field}>
                <Field
                  type="password"
                  name="password"
                  placeholder="Password:"
                  label="password"
                />
              </div>
              <div className={styles.login_field}>
                <Field type="checkbox" name="rememberMe" label="Remember Me" />
              </div>
              <div className={styles.submit_button}>
                <SubmitButton disabled={isSubmitting}>Login</SubmitButton>
              </div>
            </FormikForm>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginForm;

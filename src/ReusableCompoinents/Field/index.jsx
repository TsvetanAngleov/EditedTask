import { Field as FormikField, ErrorMessage } from "formik";

import styles from "./Field.module.css";

const Field = ({ name, type, label, placeholder }) => (
  <div className={`${styles.wrapper}`}>
    <div className={`${styles.field} ${styles[type]}`}>
      <label>{label}</label>
      <FormikField type={type} name={name} placeholder={placeholder} />
    </div>
    <ErrorMessage name={name} component="div" className={`${styles.error_message}`}/>
  </div>
);

export default Field;

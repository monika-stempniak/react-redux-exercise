import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import styles from "./PostForm.module.scss";

import Button from "../../../../components/Button/Button";

const validate = (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  }

  if (!values.body) {
    errors.body = "Required";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={styles.formGroup}>
    <label>{label}</label>
    <div>
      <input
        {...input}
        placeholder={label}
        type={type}
        className={styles.formControl}
      />
      {touched && (error && <small className={styles.error}>{error}</small>)}
    </div>
  </div>
);

const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div className={styles.formGroup}>
    <label htmlFor={type}>{label}</label>
    <div>
      <textarea
        {...input}
        placeholder={label}
        id={type}
        rows="4"
        className={styles.formControl}
      />
      {touched && (error && <small className={styles.error}>{error}</small>)}
    </div>
  </div>
);

let PostForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" component={renderField} type="text" label="Title" />
      <Field name="body" component={renderTextArea} label="Body" />
      <div className={styles.buttonWrapper}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

PostForm.propTypes = {
  handleSubmit: PropTypes.func,
};

PostForm = reduxForm({
  form: "post",
  validate,
})(PostForm);

export default PostForm;

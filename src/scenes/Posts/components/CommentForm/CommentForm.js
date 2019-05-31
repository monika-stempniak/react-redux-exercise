import React from "react";
import { Field, reduxForm } from "redux-form";
import PropTypes from "prop-types";

import styles from "./CommentForm.module.scss";

import Button from "../../../../components/Button/Button";

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.body) {
    errors.body = "Required";
  }
  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <div className={styles.formGroup}>
    <label htmlFor={type}>{label}</label>
    <input
      {...input}
      placeholder={label}
      type={type}
      id={type}
      className={styles.formControl}
    />
    {touched && (error && <small className={styles.error}>{error}</small>)}
  </div>
);

const renderTextArea = ({ input, label, type, meta: { touched, error } }) => (
  <div className={styles.formGroup}>
    <label htmlFor={type}>{label}</label>
    <textarea
      {...input}
      placeholder={label}
      id={type}
      rows="4"
      className={styles.formControl}
    />
    {touched && (error && <small className={styles.error}>{error}</small>)}
  </div>
);

let CommentForm = (props) => {
  const { handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.row}>
        <div className={styles.column}>
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Email"
          />
        </div>
        <div className={styles.column}>
          <Field name="name" component={renderField} type="text" label="Name" />
        </div>
      </div>
      <Field name="body" component={renderTextArea} label="Body" />
      <div className={styles.buttonWrapper}>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

CommentForm.propTypes = {
  handleSubmit: PropTypes.func,
};

CommentForm = reduxForm({
  form: "comment",
  validate,
})(CommentForm);

export default CommentForm;

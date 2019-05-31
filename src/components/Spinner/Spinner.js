import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./Spinner.module.scss";

const Spinner = ({ className }) => {
  return (
    <div className={classnames(styles.spinnerWrapper, className)}>
      <div className={styles.spinner} />
    </div>
  );
};

Spinner.propTypes = {
  className: PropTypes.string,
};

export default Spinner;

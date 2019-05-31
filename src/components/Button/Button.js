import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";

import styles from "./Button.module.scss";

const Button = ({
  children,
  bootstrapClass,
  className,
  onClick,
  type = "button",
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={classnames(styles.button, styles[bootstrapClass], className)}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  bootstrapClass: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  disabled: PropTypes.bool,
};

export default Button;

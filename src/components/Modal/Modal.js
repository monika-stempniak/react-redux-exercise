import classnames from "classnames";
import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

import styles from "./Modal.module.scss";

import Button from "../Button/Button";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.modalRoot = document.getElementById("modalRoot");
    this.el = document.createElement("div");
    this.modalWrapperRef = React.createRef();
  }

  componentDidMount() {
    if (this.modalRoot) {
      this.modalRoot.appendChild(this.el);
    }
  }

  componentWillUnmount() {
    if (this.modalRoot) {
      this.modalRoot.removeChild(this.el);
    }
  }

  handleClickOutside = (event) => {
    const { onClose } = this.props;
    if (this.modalWrapperRef && this.modalWrapperRef.current === event.target) {
      onClose();
    }
  };

  render() {
    const { isOpen, onClose, children, className } = this.props;

    return ReactDOM.createPortal(
      <Fragment>
        {isOpen && (
          <div
            className={styles.overlay}
            ref={this.modalWrapperRef}
            onClick={this.handleClickOutside}
            role="button"
            tabIndex={0}
          >
            <div className={classnames(styles.modal, className.modal)}>
              <div className={styles.buttonWrapper}>
                <Button onClick={onClose} bootstrapClass="danger">
                  x
                </Button>
              </div>
              <div className={styles.content}>{children}</div>
            </div>
          </div>
        )}
      </Fragment>,
      this.el
    );
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.shape({
    modal: PropTypes.string,
  }),
};

export default Modal;

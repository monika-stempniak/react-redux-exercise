import React from "react";
import PropTypes from "prop-types";

import styles from "./CommentItem.module.scss";

class CommentItem extends React.Component {
  render() {
    const { name, email, body } = this.props;

    return (
      <article className={styles.article}>
        <p className={styles.email}>{email}</p>
        <p className={styles.name}>{name}</p>
        <p className={styles.body}>{body}</p>
      </article>
    );
  }
}

CommentItem.propTypes = {
  post: PropTypes.PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    body: PropTypes.string,
  }),
};

export default CommentItem;

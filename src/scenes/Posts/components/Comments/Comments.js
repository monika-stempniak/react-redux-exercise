import React from "react";
import PropTypes from "prop-types";

import styles from "./Comments.module.scss";

import CommentItem from "../CommentItem/CommentItem";
import NewComment from "../NewComment/NewComment";

class Comments extends React.Component {
  render() {
    const { postId } = this.props;

    const comments = this.props.comments.filter(
      (comment) => comment.postId === postId
    );

    return (
      <article className={styles.article}>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <CommentItem {...comment} />
            </li>
          ))}
        </ul>
        <NewComment postId={postId} />
      </article>
    );
  }
}

Comments.propTypes = {
  postId: PropTypes.number.isRequired,
};

export default Comments;

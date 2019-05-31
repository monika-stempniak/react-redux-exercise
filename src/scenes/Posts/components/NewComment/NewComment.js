import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import styles from "./NewComment.module.scss";

import CommentForm from "../CommentForm/CommentForm";
import { actions as commentsActions } from "../../../../store/actions/comments";

class NewComment extends React.Component {
  submit = (values) => {
    const { postId } = this.props;

    const comment = Object.assign(values, { postId: +postId });

    this.props.addNewComment(comment);
  };

  render() {
    return (
      <Fragment>
        <h2 className={styles.title}>New Comment</h2>
        <CommentForm onSubmit={this.submit} />
      </Fragment>
    );
  }
}

NewComment.propTypes = {
  postId: PropTypes.number.isRequired,
  addNewComment: PropTypes.func,
};

export default compose(
  connect(
    null,
    {
      ...commentsActions,
    }
  )
)(NewComment);

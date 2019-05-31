import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import styles from "./NewPost.module.scss";

import PostForm from "../PostForm/PostForm";
import { actions as postsActions } from "../../../../store/actions/posts";

class NewPost extends React.Component {
  submit = (values) => {
    const { userId } = this.props;

    const post = Object.assign(values, { userId: +userId });

    this.props.addNewPost(post);
  };

  render() {
    return (
      <Fragment>
        <h2 className={styles.title}>New Post</h2>
        <PostForm onSubmit={this.submit} />
      </Fragment>
    );
  }
}

NewPost.propTypes = {
  userId: PropTypes.string.isRequired,
  addNewPost: PropTypes.func,
};

export default compose(
  connect(
    null,
    {
      ...postsActions,
    }
  )
)(NewPost);

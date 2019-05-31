import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import styles from "./PostItem.module.scss";

import { actions as commentsActions } from "../../../../store/actions/comments";
import { actions as postsActions } from "../../../../store/actions/posts";
import Comments from "../Comments/Comments";
import Button from "../../../../components/Button/Button";
import Spinner from "../../../../components/Spinner/Spinner";

class PostItem extends React.Component {
  state = {
    areCommentsRevealed: false,
  };

  componentDidMount() {
    this.props.fetchAllComments();
  }

  toggleComments = () => {
    this.setState((state) => ({
      areCommentsRevealed: !state.areCommentsRevealed,
    }));
  };

  deletePost = () => {
    const { id } = this.props.post;

    this.props.deletePost(id);
  };

  render() {
    const { id, title, body } = this.props.post;
    const { isLoading, data } = this.props.comments;
    const { areCommentsRevealed } = this.state;

    const buttonText = areCommentsRevealed ? "Hide" : "Show";

    return (
      <article className={styles.article}>
        <div className={styles.post}>
          <div className={styles.content}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
          <Button bootstrapClass="danger" onClick={this.deletePost}>
            Delete&nbsp;post
          </Button>
        </div>
        {isLoading && areCommentsRevealed && (
          <div className={styles.spinnerWrapper}>
            <Spinner />
          </div>
        )}
        {areCommentsRevealed && data && (
          <Comments comments={data} postId={id} />
        )}
        <div className={styles.buttonWrapper}>
          <Button bootstrapClass="warning" onClick={this.toggleComments}>
            {`${buttonText} comments`}
          </Button>
        </div>
      </article>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  }),
  comments: PropTypes.PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.string || null,
    data: PropTypes.array || null,
  }),
  fetchAllComments: PropTypes.func,
  deletePost: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

export default compose(
  connect(
    mapStateToProps,
    {
      ...commentsActions,
      ...postsActions,
    }
  )
)(PostItem);

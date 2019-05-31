import React, { Fragment } from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./Posts.module.scss";

import { actions as postsActions } from "../../store/actions/posts";
import PostItem from "./components/PostItem/PostItem";
import NewPost from "./components/NewPost/NewPost";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import Spinner from "../../components/Spinner/Spinner";

class Posts extends React.Component {
  state = {
    isOpen: false,
  };

  showModal = () => {
    this.setState({
      isOpen: true,
    });
  };

  closeModal = () => {
    this.setState({
      isOpen: false,
    });
  };

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  componentDidUpdate(prevProps) {
    const { data } = this.props.posts;
    if (data !== prevProps.posts.data) {
      this.setState({
        isOpen: false,
      });
    }
  }

  renderPosts() {
    const { data } = this.props.posts;
    const { id } = this.props.match.params;
    const posts = data
      .filter((post) => post.userId === +id)
      .map((post) => (
        <li key={post.id}>
          <PostItem post={post} />
        </li>
      ));

    return posts;
  }

  render() {
    const { isLoading, data } = this.props.posts;
    const { id } = this.props.match.params;
    const { state } = this.props.location;
    const { isOpen } = this.state;

    const userName = state ? state.userName : null;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <section className={styles.container}>
        {userName ? (
          <Fragment>
            <header className={styles.header}>
              <div className={styles.linkWrapper}>
                <Link to="/users" className={styles.link}>
                  &#171; Back to Users
                </Link>
              </div>
              <h1 className={styles.title}>{`${userName} Posts`}</h1>
            </header>
            {data && (
              <main>
                <ul>{this.renderPosts()}</ul>
              </main>
            )}
          </Fragment>
        ) : (
          <Redirect to="/users" />
        )}
        <div className={styles.addButtonWrapper}>
          <Button onClick={this.showModal}>Add new post</Button>
        </div>
        <Modal
          isOpen={isOpen}
          onClose={this.closeModal}
          className={{ modal: styles.modal }}
        >
          <NewPost userId={id} />
        </Modal>
      </section>
    );
  }
}

Posts.propTypes = {
  posts: PropTypes.PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.string || null,
    data: PropTypes.array || null,
  }),
  fetchAllPosts: PropTypes.func,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
  location: PropTypes.shape({
    state: PropTypes.shape({
      userName: PropTypes.string.isRequired,
    }),
  }),
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
      ...postsActions,
    }
  )
)(Posts);

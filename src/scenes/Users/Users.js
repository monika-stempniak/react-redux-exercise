import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import styles from "./Users.module.scss";

import { actions as usersActions } from "../../store/actions/users";
import UserItem from "./components/UserItem/UserItem";
import Spinner from "../../components/Spinner/Spinner";

class Users extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  renderUsers() {
    const { data } = this.props.users;

    return data.map((user) => (
      <li key={user.id} className={styles.listItem}>
        <UserItem user={user} />
      </li>
    ));
  }

  render() {
    const { data, isLoading } = this.props.users;

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <section className={styles.container}>
        <header>
          <h1 className={styles.title}>Users</h1>
        </header>
        {data && (
          <main>
            <ul>{this.renderUsers()}</ul>
          </main>
        )}
      </section>
    );
  }
}

Users.propTypes = {
  users: PropTypes.PropTypes.shape({
    isLoading: PropTypes.bool,
    error: PropTypes.string || null,
    data: PropTypes.array || null,
  }),
  fetchAllUsers: PropTypes.func,
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
      ...usersActions,
    }
  )
)(Users);

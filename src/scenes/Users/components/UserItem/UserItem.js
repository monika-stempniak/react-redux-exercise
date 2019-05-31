import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./UserItem.module.scss";

import { ReactComponent as UserIcon } from "../../../../assets/user.svg";

class UserItem extends React.Component {
  render() {
    const {
      id,
      name,
      username,
      email,
      address,
      phone,
      website,
      company,
    } = this.props.user;

    const { street, suite, city, zipcode } = address;

    const userAddress = `${street}, ${suite}, ${city}, ${zipcode}`;

    return (
      <article className={styles.wrapper}>
        <Link
          to={{
            pathname: `${id}/posts`,
            state: { userName: name },
          }}
          className={styles.link}
        >
          <div className={styles.nameWrapper}>
            <UserIcon className={styles.icon} />
            <h3 className={styles.name}>{name}</h3>
            <p>({username})</p>
          </div>
          <p className={styles.contact}>{email}</p>
          <p className={styles.contact}>{phone}</p>
          <address className={styles.contact}>{userAddress}</address>
          <p className={styles.contact}>{website}</p>
          <p className={styles.company}>{company.name}</p>
        </Link>
      </article>
    );
  }
}

UserItem.propTypes = {
  users: PropTypes.array,
};

export default UserItem;

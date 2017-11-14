import React from 'react';
import PropTypes from 'prop-types';

import User from './User';

const UserList = (props) => (
  <ul>
    {
      props.users
        .sort((a, b) => a[props.sortField] < b[props.sortField] ? -1 : 1)
        .map((user) => <li key={user.id}><User {...user} /></li>)
    }
  </ul>
);

export default UserList;

UserList.propTypes = {
  users: PropTypes.array,
  sortField: PropTypes.string.isRequired,
};

UserList.defaultProps = {
  users: [],
  sortField: PropTypes.string.isRequired,
}

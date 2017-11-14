import React, { Component } from 'react';

import UserList from '../User/UserList';
import BtnList from '../BtnList';
import withFeatureFlag from '../../Hocs/withFeatureFlag';

import UserMock from '../../mocks/users.json'

const sortItems = [
  {
    label: 'Age',
    value: 'age',
  },
  {
    label: 'Name',
    value: 'name',
  }
];

class UsersPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
      users: [],
      loading: false,
      sortField: 'age',
    };
  }

  /* Lifecycle methods */
  componentDidMount() {
    this.setState({ loading: true });
    setTimeout(
      () => this.setState({ users: UserMock, loading: false }),
      500
    );
  }

  /* Class methods */
  sortHandler = (sortField) => {
    this.setState({ sortField });
  };

  /* Render methods */
  render() {
    return (
      <div>
        {
          this.state.loading ?
          <span>loading</span> :
          <div>
            <BtnList
              items={sortItems}
              onChange={this.sortHandler}
              value={this.state.sortField}
            />
            <UserList
              users={this.state.users}
              sortField={this.state.sortField}
            />
          </div>
        }
      </div>
    );
  }
}

export default UsersPage;
// export default withFeatureFlag(UsersPage);

import React from 'react';
import Links from './Links.js';

class User extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="page-name">User</div>
        <div id="user-id">{this.props.route.params.userId}</div>
        <Links/>
      </div>
    );
  }
}

export default User;

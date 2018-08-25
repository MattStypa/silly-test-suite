import React from 'react';
import Links from './Links.js';

class NewUser extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="page-name">New User</div>
        <div id="user-type">{this.props.route.params.type}</div>
        <Links/>
      </div>
    );
  }
}

export default NewUser;

import React from 'react';
import { Link, navigate } from 'sillyrouter';

class Links extends React.PureComponent {
  navigateTo = (path, params) => () => navigate(path, params);

  render() {
    return (
      <div>
        <div id="link">
          <h2>Links</h2>
          <div className="route-home"><Link to="home">Home</Link></div>
          <div className="route-user-73"><Link to="user" userId="73">User</Link></div>
          <div className="route-user-new"><Link to="newUser">New User</Link></div>
          <div className="route-user-new-admin"><Link to="newUser" type="admin">New Admin User</Link></div>
          <div className="route-missing-param"><Link to="user">Missing route parameter</Link></div>
          <div className="route-explicit"><Link to="/explicit">Explicit</Link></div>
          <div className="route-hash"><Link to="#hash">Hash</Link></div>
        </div>

        <div id="navigate">
          <h2>Navigate</h2>
          <div className="route-home"><button onClick={this.navigateTo('home')}>Home</button></div>
          <div className="route-user-73"><button onClick={this.navigateTo('user', {userId: 73})}>User</button></div>
          <div className="route-user-new"><button onClick={this.navigateTo('newUser')}>New User</button></div>
          <div className="route-user-new-admin"><button onClick={this.navigateTo('newUser', {type: 'admin'})}>New Admin User</button></div>
          <div className="route-missing-param"><button onClick={this.navigateTo('user')}>Missing route parameter</button></div>
          <div className="route-explicit"><button onClick={this.navigateTo('/explicit')}>Explicit</button></div>
          <div className="route-hash"><button onClick={this.navigateTo('#hash')}>Hash</button></div>
        </div>
      </div>
    );
  }
}

export default Links;

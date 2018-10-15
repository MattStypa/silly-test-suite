import React from 'react';
import SillyApp from 'sillyapp';

import Home from './Home.js';
import User from './User.js';
import NewUser from './NewUser.js';
import StorePage from './StorePage.js';
import CatchAll from './CatchAll.js';
import Fallback from './Home.js';

const store = {
  firstName: 'first name',
  lastName: 'last name',
  url: 'url',
};

const routes = [
  {name: 'home', path: '/', component: Home},
  {name: 'user', path: '/user/:userId', component: User},
  {name: 'newUser', path: '/new-user/:type?', component: NewUser},
  {name: 'store', path: '/store', component: StorePage},
  {name: 'CatchAll', component: CatchAll},
  {name: 'Fallback', path: '/:path*', component: Fallback},
];

class App extends React.PureComponent {
  render() {
    return (
      <SillyApp store={store} routes={routes}/>
    );
  }
}

export default App;

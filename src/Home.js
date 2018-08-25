import React from 'react';
import Links from './Links.js';

class Home extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="page-name">Home</div>
        <Links/>
      </div>
    );
  }
}

export default Home;

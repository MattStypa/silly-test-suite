import React from 'react';
import Links from './Links.js';

class Fallback extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="page-name">Fallback</div>
        <div>You should never see this</div>
        <Links/>
      </div>
    );
  }
}

export default Fallback;

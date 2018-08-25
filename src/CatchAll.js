import React from 'react';
import Links from './Links.js';

class CatchAll extends React.PureComponent {
  render() {
    return (
      <div>
        <div id="page-name">Catch All</div>
        <Links/>
      </div>
    );
  }
}

export default CatchAll;

import React from 'react';
import { connect, setStore } from 'sillystore';

class Store extends React.PureComponent {
  constructor(props) {
    super(props);

    window.renderCount = 0;
  }

  set = (key, value) => () => {
    let storeChange = {};
    storeChange[key] = value;
    setStore(storeChange);
  }

  render() {
    window.renderCount++;

    return (
      <div>
        <div>Store</div>
        <div id="header">{this.props.header}</div>
        <div id="first-name">{this.props.store.firstName}</div>
        <div id="last-name">{this.props.store.lastName}</div>
        <div id="url">{this.props.store.url}</div>
        <div id="set-first-name"><button onClick={this.set('firstName', 'Matt')}>Set first name</button></div>
        <div id="set-last-name"><button onClick={this.set('lastName', 'Stypa')}>Set last name</button></div>
        <div id="set-url"><button onClick={this.set('url', 'mattstypa.com')}>Set url</button></div>
      </div>
    );
  }
}

export default connect(Store, ['firstName', 'url']);

import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log(styles)
  }
  render() {
    return (
      <div className={styles.App}>
        {this.props.children}
      </div>
    );
  }
}

export default App;

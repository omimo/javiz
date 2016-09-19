import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../scss/main.scss';
import GMap from './gmap.jsx';

export default class App extends React.Component {   
  render() {        
    return (
      
      <GMap lochistory={this.props.lochistory} />

    )
  }
}

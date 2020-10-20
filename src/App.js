import React from 'react';

import NavBar from './components/navbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/styles.scss';

export default function App(props) {
  return (
    <div className="container-fluid">
      <NavBar />
      <div className="container">
        {props.children}
      </div>
    </div>
  )
}
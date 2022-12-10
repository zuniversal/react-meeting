import React, { Component } from 'react';
import ReactSeamlessScroll from 'react-seamless-scroll';

const Broadcast = React.memo(props => {
  return (
    <ReactSeamlessScroll style={{ width: '200px', height: '300px' }}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </ReactSeamlessScroll>
  );
});

export default Broadcast;

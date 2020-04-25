import React, { Fragment } from 'react';
// import logo from './logo.svg';
// import './App.css';

function IO() {
  const name = null;
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
    marginTop: 50,
  };

  return <div style={style}>{name || '리액트 빡공!'}</div>;
}

export default IO;

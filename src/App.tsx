import React from 'react';
import Link from 'redux-first-router-link';
import './App.css';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <Link to="/users/1">DB & GRAPHQL</Link> <br />
      <Link to={['users', '2']}>REACT & REDUX</Link> <br />
      <Link to={{ type: 'USERS', payload: { id: '3' } }}>FP</Link>
      <br />
      <Link to={{ type: 'USERS' }}>Main</Link>
      <div
        onClick={() => {
          dispatch({ type: 'USERS', payload: { id: '4' } });
        }}
      >
        4 using normal dispatch
      </div>
      <br />
      <div>
        <div>Queue settings page {}</div>
      </div>
      <div>
        Users List
        <div>Users Profile page {}</div>
      </div>
      <div>General settings</div>
    </div>
  );
}

export default App;

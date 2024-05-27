import React from 'react';
import SecondsCounter from './secondscounter';

const Home = ({ seconds }) => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home Page!</h1>
      <p>This is a simple React component.</p>
      <SecondsCounter seconds={seconds} />
    </div>
  );
};

export default Home;
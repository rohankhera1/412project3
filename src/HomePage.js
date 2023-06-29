import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Personal Website</h1>
      <Link to="/subpage1">Go to Subpage 1</Link>
      <br/>
      <Link to="/subpage2">Go to Subpage 2</Link>
    </div>
  );
}

export default HomePage;

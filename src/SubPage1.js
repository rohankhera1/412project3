import React from 'react';
import { Link } from 'react-router-dom';

const SubPage1 = () => {
  return (
    <div>
      <h1>This is Subpage 1</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

export default SubPage1;

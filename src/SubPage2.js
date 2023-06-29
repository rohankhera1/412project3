import React from 'react';
import { Link } from 'react-router-dom';

const SubPage2 = () => {
  return (
    <div>
      <h1>This is Subpage 2</h1>
      <Link to="/">Go back to homepage</Link>
    </div>
  );
}

export default SubPage2;

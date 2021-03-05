import React from 'react';
import { Link ,Redirect } from 'react-router-dom';
const Error = () => {
  return (
    <div>
      <h1>Error Page</h1>
      {/* <Redirect to="/" /> */}
      <Link to="/" className="btn">Home</Link>
    </div>
  );
};

export default Error;

import React from 'react';
import { useLocation } from 'react-router-dom';

const Top = () => {
    const location = useLocation();
    const { userid } = location.state || {};

    return (
    <div>
      <h1>Welcome to the TOP page</h1>
      <label>User ID: {userid}</label>
      </div>
  
  );
};

export default Top;

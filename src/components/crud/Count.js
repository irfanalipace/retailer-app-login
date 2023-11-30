// Count.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Count = () => {
  const location = useLocation();
  const totalCount = location.state ? location.state.totalCount : 0;
  console.log(location.state.totalCount, "locations");
  return (
    <div>
      <h1>Total Count: {totalCount}</h1>

      <Link to='/' style={{marginLeft:'22px'}}>Back</Link>
    </div>
  );
};

export default Count;

// Count.js
import React from "react";
import { useLocation } from "react-router-dom";

const Count = () => {
  const location = useLocation();
  const totalCount = location.state ? location.state.totalCount : 0;
  console.log(location.state.totalCount, "locations");
  return (
    <div>
      <h1>Total Count: {totalCount}</h1>
    </div>
  );
};

export default Count;

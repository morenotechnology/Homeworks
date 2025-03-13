// Child.js
import React from "react";

const Child = ({ categories }) => {
  return (
    <div>
      <h2>Categories List</h2>
      <ol>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ol>
    </div>
  );
};

export default Child;

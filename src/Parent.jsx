// Parent.js
import React from "react";
import Child from "./Child";

const Parent = ({ category, setCategory, categories, handleAddCategory }) => {
  return (
    <div>
      <h1>Category Manager</h1>
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      <button onClick={handleAddCategory}>Add Category</button>

      <Child categories={categories} />
    </div>
  );
};

export default Parent;

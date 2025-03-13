import   "./App.css";
import React, { useState } from "react";
import Parent from "./Parent";

const ComponentApp = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  const handleAddCategory = () => {
    if (category.trim() !== "") {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  return (
    <div>
      <Parent
        category={category}
        setCategory={setCategory}
        categories={categories}
        handleAddCategory={handleAddCategory}
      />
    </div>
  );
};

export default ComponentApp;

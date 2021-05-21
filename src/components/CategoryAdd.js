import React, { useState } from "react";
import PropTypes from "prop-types";

const CategoryAdd = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);

    console.log("handleInputChange called");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handleSubmit called", inputValue);
    if (inputValue.trim().length > 2) {
      setCategories((category) => [inputValue, ...category]);
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} />
    </form>
  );
};

CategoryAdd.propTypes = {
  setCategories: PropTypes.func.isRequired,
};

export default CategoryAdd;

import React from "react";
import { useState } from "react";

const TypeSwitcher = () => {
  const [showHide, setShowHide] = useState("");

  const handleShowHide = (event) => {
    const getChoice = event.target.value;
    setShowHide(getChoice);
  };

  return (
    <div>
      <div>
        <label for="productType">Type Switcher: </label>
        <select id="productType" required onChange={(e) => handleShowHide(e)}>
          <option value="">Please choose one option</option>
          <option value="dvd">DVD</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>
      {showHide === "dvd" && (
        <div>
          <label for="size">Size (MB)</label>
          <input
            id="size"
            name="size"
            required
            type="number"
            placeholder="Size in MB"
          />
        </div>
      )}

      {showHide === "book" && (
        <div>
          <label for="weight">Weight (KG)</label>
          <input
            id="weight"
            name="weight"
            type="number"
            required
            placeholder="Weight in KG"
          />
        </div>
      )}

      {showHide === "furniture" && (
        <div>
          <label for="height">Height</label>
          <input
            id="height"
            name="height"
            type="number"
            required
            placeholder="Height in CM"
          />
          <label for="width">Width</label>
          <input
            id="width"
            name="width"
            type="number"
            required
            placeholder="Width in CM"
          />
          <label for="length">Length</label>
          <input
            id="length"
            name="length"
            type="number"
            required
            placeholder="Length in CM"
          />
        </div>
      )}
    </div>
  );
};

export default TypeSwitcher;

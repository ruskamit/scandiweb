import React from "react";
import { useState } from "react";

const TypeSwitcher = () => {
  const [showHide, setShowHide] = useState("");

  const handleShowHide = (event) => {
    const getChoice = event.target.value;
    setShowHide(getChoice);
  };

  return (
    <div className="">
      <label>
        Type Switcher:
        <select id="productType" required onChange={(e) => handleShowHide(e)}>
          <option value="">--Please choose one option--</option>
          <option value="dvd">DVD</option>
          <option value="book">Book</option>
          <option value="furniture">Furniture</option>
        </select>
      </label>

      {showHide === "dvd" && (
        <label>
          Size (MB)
          <input
            id="size"
            name="size"
            required
            type="number"
            placeholder="Size in MB"
          />
        </label>
      )}

      {showHide === "book" && (
        <label>
          Weight (KG)
          <input
            id="weight"
            name="weight"
            type="number"
            required
            placeholder="Weight in KG"
          />
        </label>
      )}

      {showHide === "furniture" && (
        <div>
          <label>
            Height
            <input
              id="height"
              name="height"
              type="number"
              required
              placeholder="Height in CM"
            />
          </label>
          <label>
            Width
            <input
              id="width"
              name="width"
              type="number"
              required
              placeholder="Width in CM"
            />
          </label>
          <label>
            Length
            <input
              id="length"
              name="length"
              type="number"
              required
              placeholder="Length in CM"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default TypeSwitcher;

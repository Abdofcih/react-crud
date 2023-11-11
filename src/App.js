import React, { useState } from "react";
import "./App.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddOrUpdateItem = () => {
    if (inputValue.trim() !== "") {
      if (selectedIndex !== null) {
        // Update existing item
        const updatedItems = [...items];
        updatedItems[selectedIndex] = inputValue;
        setItems(updatedItems);
        setSelectedIndex(null);
      } else {
        // Add new item
        setItems([...items, inputValue]);
      }
      setInputValue("");
    }
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    setSelectedIndex(null); // Reset selectedIndex when removing an item
  };

  const handleEditItem = (index) => {
    setInputValue(items[index]);
    setSelectedIndex(index);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter a new item"
        />
        <button onClick={handleAddOrUpdateItem}>
          {selectedIndex !== null ? "Update" : "Add"}
        </button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <div>
              <button onClick={() => handleRemoveItem(index)}>Remove</button>
              <button onClick={() => handleEditItem(index)}>Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

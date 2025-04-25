import React, { useState, useEffect } from "react";
import data from "./data.json"; // Importing JSON file

const OrderedList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...data].sort()); // Sorting the imported data
  }, []);

  return (
    <div>
      <h2>Ordered List</h2>
      <ol>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ol>
    </div>
  );
};

export default OrderedList;

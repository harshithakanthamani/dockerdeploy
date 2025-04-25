import React, { useState, useEffect } from "react";
import data from "./data.json"; 

const OrderedList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([...data].sort());
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

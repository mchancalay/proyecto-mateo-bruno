import React, { useState } from 'react';
import ItemIcon1 from '../imagenes/imagen1.png'; // import the image for item 1
import ItemIcon2 from '../imagenes/imagen1.png'; // import the image for item 2
import ItemIcon3 from '../imagenes/imagen1.png'; // import the image for item 3
import ItemIcon4 from '../imagenes/imagen1.png'; // import the image for item 4
import ItemIcon5 from '../imagenes/imagen1.png'; // import the image for item 5
import '../hojas-de-estilo/GrindingSessionTracker.css';

const items = [
  { name: 'Item 1', image: ItemIcon1 },
  { name: 'Item 2', image: ItemIcon2 },
  { name: 'Item 3', image: ItemIcon3 },
  { name: 'Item 4', image: ItemIcon4 },
  { name: 'Item 5', image: ItemIcon5 },
];

const GrindingSessionTracker = () => {
  const [sessionTime, setSessionTime] = useState('');
  const [itemQuantities, setItemQuantities] = useState(new Array(items.length).fill(0));

  const handleSessionTimeChange = (e) => {
    setSessionTime(e.target.value);
  };

  const handleItemChange = (index, e) => {
    const newQuantities = [...itemQuantities];
    newQuantities[index] = e.target.value;
    setItemQuantities(newQuantities);
  };

  return (
    <div className="grinding-session-tracker">
      <form>
        <label htmlFor="session-time">Session Time:</label>
        <input type="text" id="session-time" value={sessionTime} onChange={handleSessionTimeChange} />

        <div className="items-container">
          {items.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <div>{item.name}</div>
              <input type="number" value={itemQuantities[index]} onChange={(e) => handleItemChange(index, e)} />
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default GrindingSessionTracker;

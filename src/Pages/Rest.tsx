import React, { useState } from 'react';
import { motion } from 'framer-motion';

const InventoryPurchaseSystem = () => {
  const [items, setItems] = useState([
    { id: Date.now(), name: '', quantity: 0, price: 0 }
  ]);

  const [removingId, setRemovingId] = useState(null); // State to track the item being removed

  const handleAddItem = () => {
    setItems([...items, { id: Date.now(), name: '', quantity: 0, price: 0 }]);
  };

  const handleRemoveItem = (id:any) => {
    setRemovingId(id); // Set the item ID to trigger the animation
    setTimeout(() => {
      const updatedItems = items.filter(item => item.id !== id);

      // If it's the last item, ensure there's always one item
      if (updatedItems.length === 0) {
        updatedItems.push({ id: Date.now(), name: '', quantity: 0, price: 0 });
      }

      setItems(updatedItems);
      setRemovingId(null); // Reset removingId after the item is removed
    }, 300); // Timeout duration should match the animation duration
  };

  const handleChange = (id:any, field:any, value:any) => {
    setItems(items.map(item => 
      item.id === id ? { ...item, [field]: value } : item
    ));
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log(items);
    // Handle purchase logic here
  };

  return (
    <div className="container mx-4 mt-5 ">
      <h2 className="text-lg font-semibold">Inventory Purchase System</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="flex items-center mb-4 border p-4 rounded-md shadow"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            // Add condition for animation exit
            style={{ display: removingId === item.id ? 'none' : 'flex' }} // Prevent rendering the item during the exit animation
          >
            <input
              type="text"
              placeholder="Item Name"
              value={item.name}
              onChange={(e) => handleChange(item.id, 'name', e.target.value)}
              className="border rounded-md p-2 mr-2 flex-1"
            />
            <input
              type="number"
              placeholder="Quantity"
              value={item.quantity}
              onChange={(e) => handleChange(item.id, 'quantity', Number(e.target.value))}
              className="border rounded-md p-2 mr-2 w-1/4"
            />
            <input
              type="number"
              placeholder="Price"
              value={item.price}
              onChange={(e) => handleChange(item.id, 'price', Number(e.target.value))}
              className="border rounded-md p-2 mr-2 w-1/4"
            />
            {items.length === 1 ? '' : <button
              disabled={items.length === 1}
              type="button"
              onClick={() => handleRemoveItem(item.id)}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded"
            >
              Remove
            </button>}
          </motion.div>
        ))}
        <button
          type="button"
          onClick={handleAddItem}
          className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
        >
          Add Item
        </button>
        <button
          type="submit"
          className="mt-4 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Submit Purchase
        </button>
      </form>
    </div>
  );
};

export default InventoryPurchaseSystem;

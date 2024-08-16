import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from './widgetSlice';

const WidgetModal = ({ category, onClose }) => {
  const [widgetName, setWidgetName] = useState('');
  const [widgetType, setWidgetType] = useState('pie');
  const dispatch = useDispatch();

  const handleAddWidget = () => {
    const newWidget = {
      id: Date.now().toString(),
      name: widgetName,
      type: widgetType,
      data: { /* Add default data here */ },
    };
    dispatch(addWidget({ categoryName: category.name, widget: newWidget }));
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Add Widget</h2>
        <input
          type="text"
          value={widgetName}
          onChange={e => setWidgetName(e.target.value)}
          placeholder="Widget Name"
          className="border p-2 w-full mb-4"
        />
        <select
          value={widgetType}
          onChange={e => setWidgetType(e.target.value)}
          className="border p-2 w-full mb-4"
        >
          <option value="pie">Pie Chart</option>
          <option value="bar">Bar Chart</option>
          {/* Add more widget types as needed */}
        </select>
        <button onClick={handleAddWidget} className="bg-blue-500 text-white p-2 rounded">
          Add Widget
        </button>
        <button onClick={onClose} className="ml-2 p-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default WidgetModal;

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeAddWidgetModal, addWidget } from './Redux/dashboardSlice';

function AddWidgetModal({ isOpen }) {
  const dispatch = useDispatch();
  const categories = useSelector(state => state.dashboard.categories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [widgetName, setWidgetName] = useState('');
  const [widgetText, setWidgetText] = useState('');

  const handleClose = () => {
    dispatch(closeAddWidgetModal());
    // Reset form fields
    setSelectedCategory('');
    setWidgetName('');
    setWidgetText('');
  };

  const handleConfirm = () => {
    if (selectedCategory && widgetName) {
      dispatch(addWidget({
        categoryId: selectedCategory,
        widgetName,
        widgetText
      }));
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Add Widget</h2>
        <div className="space-y-4">
          <div>
            <label className="block mb-1">Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            >
              <option value="">Select a category</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-1">Widget Name:</label>
            <input
              type="text"
              value={widgetName}
              onChange={(e) => setWidgetName(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div>
            <label className="block mb-1">Widget Text:</label>
            <textarea
              value={widgetText}
              onChange={(e) => setWidgetText(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
              rows="3"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-4 mt-6">
          <button onClick={handleClose} className="px-4 py-2 border rounded">Cancel</button>
          <button onClick={handleConfirm} className="px-4 py-2 bg-blue-600 text-white rounded">Add Widget</button>
        </div>
      </div>
    </div>
  );
}

export default AddWidgetModal;
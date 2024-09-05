

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CategorySection from './Category';
import AddWidgetModal from './AddWidgetForm';
import { openAddWidgetModal } from './Redux/dashboardSlice';

function Dashboard() {
  const dispatch = useDispatch();
  const { categories, isAddWidgetModalOpen } = useSelector(state => state.dashboard);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCategories = categories.map(category => ({
    ...category,
    widgets: category.widgets.filter(widget =>
      widget.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }))

  return (
    <div className=' bg-blue-50 shadow-lg p-4 rounded-md' >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">CNAPP Dashboard</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search widgets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mr-4 px-3 py-2 border rounded-md"
          />
          <button
            onClick={() => dispatch(openAddWidgetModal())}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Add Widget +
          </button>
          <select className="ml-4 px-3 py-2 border rounded-md">
            <option>Last 2 days</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      {filteredCategories.map(category => (
        <CategorySection key={category.id} category={category} />
      ))}
      <AddWidgetModal isOpen={isAddWidgetModalOpen} />
    </div>
  );
}

export default Dashboard;


import React from 'react';
import Widget from './Widget';
import { useDispatch } from 'react-redux';
import { openAddWidgetModal } from './Redux/dashboardSlice';

function CategorySection({ category }) {
  const dispatch = useDispatch();

  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {category.widgets.map(widget => (
          <Widget key={widget.id} widget={widget} />
        ))}
        <button
          onClick={() => dispatch(openAddWidgetModal(category.id))}
          className="flex items-center justify-center h-56 bg-white rounded-lg shadow text-gray-500 hover:bg-gray-50"
        >
          <span className="mr-2">+</span> Add Widget
        </button>
      </div>
    </section>
  );
}

export default CategorySection;
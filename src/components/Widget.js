import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from './Redux/dashboardSlice';
import PieChart from './charts/PieChart';
import DonutChart from './charts/DoughnutChart';
import BarChart from './charts/BarChart';

function Widget({ widget }) {
  const dispatch = useDispatch();

  const renderContent = () => {
    switch (widget.type) {
      case 'pie_chart':
        return <PieChart data={widget.data} />;
      case 'donut_chart':
        return <DonutChart data={widget.data} />;
      case 'bar_chart':
        return <BarChart data={widget.data} />;
      case 'custom':
        return (
          <div className="mt-2">
            <p className="text-gray-700">{widget.data.text}</p>
          </div>
        );
      case 'placeholder':
      default:
        return (
          <div className="flex flex-col items-center justify-center h-40 bg-gray-100">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 13v-1m4 1v-3m4 3V8M12 21l9-9-9-9-9 9 9 9z" />
            </svg>
            <p className="mt-2 text-sm text-gray-500">
              {widget.data.message || "No data available!"}
            </p>
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">{widget.name}</h3>
        <button
          onClick={() => dispatch(removeWidget(widget.id))}
          className="text-gray-400 hover:text-gray-600"
        >
          ×
        </button>
      </div>
      {renderContent()}
    </div>
  );
}

export default Widget;
import React from 'react';

function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-500">Home</span>
          <span className="text-gray-500">&gt;</span>
          <span className="font-medium">Dashboard V2</span>
        </div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search anything..."
            className="border rounded-md px-3 py-1 text-sm"
          />
          {/* Add other header icons here */}
        </div>
      </div>
    </header>
  );
}

export default Header;
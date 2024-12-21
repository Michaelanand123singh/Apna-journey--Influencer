// src/components/Contact/LocationMap.jsx
import React from 'react';

const LocationMap = () => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Our Location</h3>
        <div className="aspect-w-16 aspect-h-9">
          {/* Replace with actual map integration */}
          <div className="bg-gray-100 w-full h-full flex items-center justify-center text-gray-400">
            Map Integration Placeholder
          </div>
        </div>
        <div className="mt-4">
          <h4 className="font-medium text-gray-900">Apna Journey Headquarters</h4>
          <address className="mt-2 not-italic text-gray-500">
            123 Tech Street<br />
            Silicon Valley<br />
            California, 94025<br />
            United States
          </address>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
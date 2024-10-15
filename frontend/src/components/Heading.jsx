import React from 'react';

export const Heading = ({ label }) => {
  return (
    <div className="py-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800">{label}</h1>
    </div>
  );
};

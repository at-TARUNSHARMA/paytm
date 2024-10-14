import React from 'react';

const Header = ({ label }) => {
  return (
    <Header className="py-4 text-center">
      <h1 className="text-2xl font-bold text-gray-800">{label}</h1>
    </Header>
  );
};

export default Header;

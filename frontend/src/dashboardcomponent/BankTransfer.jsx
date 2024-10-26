import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BankTransfer = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Bank Transfer</h1>
        <p>Transfer money directly to bank accounts using UPI.</p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4">
          Start Transfer
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default BankTransfer;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const CheckBalance = () => {
  const [balance, setBalance] = useState("0.00");

  const handleCheckBalance = () => {
    // Simulate balance fetching
    setBalance("1,234.56");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Check Balance</h1>
        <p className="text-xl mb-6 text-center">Your current balance is: <span className="font-semibold">$ {balance}</span></p>
        <button
          onClick={handleCheckBalance}
          className="bg-purple-500 text-white py-2 px-6 rounded-full text-lg hover:bg-purple-600 transition duration-300"
        >
          Check Balance
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default CheckBalance;

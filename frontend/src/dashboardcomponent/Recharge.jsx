import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Recharge = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [amount, setAmount] = useState("");

  const handleRecharge = () => {
    alert(`Recharging ${phoneNumber} with $${amount}`);
    // Implement actual recharge logic
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Recharge</h1>
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded py-2 px-4 w-full max-w-md mb-4"
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded py-2 px-4 w-full max-w-md mb-4"
        />
        <button
          onClick={handleRecharge}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
        >
          Recharge Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Recharge;

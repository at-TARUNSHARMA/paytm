import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PayBills = () => {
  const [billType, setBillType] = useState("");
  const [amount, setAmount] = useState("");

  const handlePayBill = () => {
    alert(`Paying ${billType} bill of $${amount}`);
    // Implement actual pay bill logic
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Pay Bills</h1>
        <input
          type="text"
          placeholder="Bill Type (e.g. Electricity, Water)"
          value={billType}
          onChange={(e) => setBillType(e.target.value)}
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
          onClick={handlePayBill}
          className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600"
        >
          Pay Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default PayBills;

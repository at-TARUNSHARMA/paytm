import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TransferMoney = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = () => {
    alert(`Transferring $${amount} to ${recipient}`);
    // Implement actual transfer logic
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Transfer Money Through Bank</h1>
        <input
          type="text"
          placeholder="Recipient Account Number"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
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
          onClick={handleTransfer}
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Transfer Now
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default TransferMoney;

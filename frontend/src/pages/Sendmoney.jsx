import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component

const SendMoney = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");

  const handleSendMoney = () => {
    alert(`Sending $${amount} to ${recipient}`);
    // Add actual send money logic here
  };

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Send Money</h1>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Recipient's Name"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="border rounded py-2 px-4 w-full mb-4"
          />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded py-2 px-4 w-full mb-4"
          />
          <button
            onClick={handleSendMoney}
            className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600"
          >
            Send Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;

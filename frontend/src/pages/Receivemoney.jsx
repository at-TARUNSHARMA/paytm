import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component

const Receivemoney = () => {
  const [amount, setAmount] = useState("");

  const handleReceivemoney = () => {
    alert(`You have received $${amount}`);
    // Add actual receive money logic here
  };

  return (
    <div>
      {/* Include Navbar */}
      <Navbar />
      <div className="p-4">
        <h1 className="text-2xl font-bold">Receive Money</h1>
        <div className="mt-4">
          {/* Input for receiving money */}
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border rounded py-2 px-4 w-full mb-4"
          />
          {/* Button to trigger receiving money */}
          <button
            onClick={handleReceivemoney}
            className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600"
          >
            Receive Money
          </button>
        </div>
      </div>
    </div>
  );
};

export default Receivemoney;

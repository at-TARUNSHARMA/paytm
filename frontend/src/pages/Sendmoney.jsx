import { useState } from "react";
import axios from "axios";

const Sendmoney = () => {
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");

  const handleSendmoney = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/transactions/send", {
        recipient,
        amount,
      });

      if (response.status === 200) {
        alert("Money sent successfully!");
      } else {
        alert("Transaction failed");
      }
    } catch (error) {
      alert("An error occurred during the transaction");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-4 h-max">
          <h2 className="text-xl font-bold">Send Money</h2>

          <input
            type="text"
            placeholder="Recipient's Email"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="mt-4 p-2 border rounded w-full"
          />

          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="mt-4 p-2 border rounded w-full"
          />

          <button 
            onClick={handleSendmoney} 
            className="w-full mt-4 bg-blue-500 text-white py-2 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sendmoney;

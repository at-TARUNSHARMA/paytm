import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, type: "Debit", amount: "$50", date: "2024-10-10" },
    { id: 2, type: "Credit", amount: "$100", date: "2024-10-12" },
  ]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow">
        <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
        <ul className="space-y-4">
          {transactions.map((transaction) => (
            <li
              key={transaction.id}
              className="border rounded p-4 flex justify-between"
            >
              <span>{transaction.type}</span>
              <span>{transaction.amount}</span>
              <span>{transaction.date}</span>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default TransactionHistory;

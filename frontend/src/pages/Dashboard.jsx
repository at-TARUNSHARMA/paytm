import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container with full height */}
      <Navbar />
      <div className="p-4 flex-grow">
        {/* Dashboard Heading */}
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <p className="mb-4">Welcome to your dashboard. Here you can access your account and perform various actions.</p>
        
        {/* Card Section for Different UPI Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Transfer Money Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4">Transfer Money Through Bank</h2>
            <p className="text-sm mb-4">Send money directly to bank accounts using UPI.</p>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Transfer Now
            </button>
          </div>

          {/* Recharge Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4">Recharge</h2>
            <p className="text-sm mb-4">Recharge your mobile, DTH, or pay your bills.</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
              Recharge Now
            </button>
          </div>

          {/* Pay Bills Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4">Pay Bills</h2>
            <p className="text-sm mb-4">Pay your electricity, water, or other utility bills.</p>
            <button className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">
              Pay Bills
            </button>
          </div>

          {/* Check Balance Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4">Check Balance</h2>
            <p className="text-sm mb-4">Quickly check your account balance.</p>
            <button className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600">
              Check Balance
            </button>
          </div>

          {/* Transaction History Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4">Transaction History</h2>
            <p className="text-sm mb-4">View your past transactions and UPI payments.</p>
            <button className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
              View History
            </button>
          </div>

          {/* Profile Settings Option */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center hover:shadow-lg transition">
            <h2 className="text-lg font-semibold mb-4">Profile Settings</h2>
            <p className="text-sm mb-4">Manage your profile, change password, and more.</p>
            <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Manage Profile
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

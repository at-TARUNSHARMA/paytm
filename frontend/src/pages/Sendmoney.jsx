import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import { FaDollarSign } from "react-icons/fa"; // Import currency icon

const SendMoney = () => {
  const [amount, setAmount] = useState("");
  const [recipient, setRecipient] = useState("");
  const [currency, setCurrency] = useState("USD");
  const [qrCode, setQrCode] = useState(null);

  const handleSendMoney = () => {
    alert(`Sending ${currency}${amount} to ${recipient}`);
    // Add actual send money logic here
  };

  const handleCurrencyChange = () => {
    const newCurrency = currency === "USD" ? "EUR" : "USD"; // Toggle currency between USD and EUR
    setCurrency(newCurrency);
  };

  const handleQrUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setQrCode(URL.createObjectURL(file)); // Preview the uploaded QR code
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Content container with flex-grow */}
      <div className="p-4 flex flex-col items-center justify-center flex-grow">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6">Enter the Recipient Details</h1>

        {/* Input fields for phone number/user ID and amount */}
        <div className="w-full max-w-md space-y-4">
          {/* Recipient field */}
          <input
            type="text"
            placeholder="Phone No / User ID"
            value={recipient}
            onChange={(e) => setRecipient(e.target.value)}
            className="border rounded py-2 px-4 w-full mb-4"
          />

          {/* Amount field with currency selector */}
          <div className="relative mb-4">
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="border rounded py-2 px-4 w-full pr-12"
            />
            <button
              onClick={handleCurrencyChange}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded"
            >
              <FaDollarSign />
            </button>
          </div>

          {/* Separator line */}
          <hr className="border-t-2 border-gray-300 my-4" />

          {/* QR Code upload */}
          <div className="flex justify-center items-center flex-col">
            <button
              onClick={() => document.getElementById("qrCodeUpload").click()}
              className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 mb-2"
            >
              Upload QR Code
            </button>
            <input
              type="file"
              id="qrCodeUpload"
              accept="image/*"
              onChange={handleQrUpload}
              className="hidden"
            />
            {qrCode && (
              <img src={qrCode} alt="QR Code" className="w-24 h-24 mt-4" />
            )}
          </div>

          {/* Send Money button */}
          <button
            onClick={handleSendMoney}
            className="bg-green-500 text-white rounded py-2 px-4 w-full hover:bg-green-600"
          >
            Send Money
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SendMoney;

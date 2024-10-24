import React, { useState } from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component

const ReceiveMoney = () => {
  const [showQr, setShowQr] = useState(false); // State to control QR code visibility
  const [qrCode, setQrCode] = useState(null); // State to hold QR code image

  const phoneNo = "123-456-7890"; // Replace with dynamic data if needed
  const customerId = "ABC123456"; // Replace with dynamic data if needed

  // Simulate QR code generation
  const handleGenerateQr = () => {
    setShowQr(true);
    setQrCode("/path-to-qr-code.png"); // Replace with actual logic to generate QR code
  };

  // Handle QR download
  const handleDownloadQr = () => {
    const link = document.createElement("a");
    link.href = qrCode;
    link.download = "qr-code.png"; // QR code download
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Content container with flex-grow */}
      <div className="p-4 flex flex-col items-center justify-center flex-grow">
        {/* Heading */}
        <h1 className="text-2xl font-bold mb-6">Here Are Your Details</h1>

        {/* User details */}
        <div className="w-full max-w-md space-y-4">
          <div className="text-lg">
            <p>Phone No: <span className="font-semibold">{phoneNo}</span></p>
            <p>Customer ID: <span className="font-semibold">{customerId}</span></p>
          </div>

          {/* Separator line */}
          <hr className="border-t-2 border-gray-300 my-4" />

          {/* Button to generate/show QR code */}
          {!showQr && (
            <button
              onClick={handleGenerateQr}
              className="bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 w-full"
            >
              Click Here to Get QR
            </button>
          )}

          {/* Display QR code and download button */}
          {showQr && (
            <div className="flex flex-col items-center mt-4">
              <img src={qrCode} alt="QR Code" className="w-48 h-48 mb-4" />
              <button
                onClick={handleDownloadQr}
                className="bg-green-500 text-white rounded py-2 px-4 hover:bg-green-600"
              >
                Download QR
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReceiveMoney;

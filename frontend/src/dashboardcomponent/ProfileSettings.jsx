import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProfileSettings = () => {
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("john@example.com");

  const handleSave = () => {
    alert("Profile updated!");
    // Implement save logic
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="p-4 flex-grow flex flex-col items-center">
        <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border rounded py-2 px-4 w-full max-w-md mb-4"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded py-2 px-4 w-full max-w-md mb-4"
        />
        <button
          onClick={handleSave}
          className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
        >
          Save Changes
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileSettings;

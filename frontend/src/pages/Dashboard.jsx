
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from '../components/Footer';

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Make this a flex container with full height */}
      <Navbar />
      <div className="p-4 flex-grow"> {/* Allow the content area to grow */}
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p>Welcome to your dashboard. Here you can access your account and perform various actions.</p>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;

import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import Footer from "../components/Footer"; // Import the Footer component
import Home from "../dashboardcomponent/Home"; // Import the Home component

const Dashboard = () => {
  return (
    <div className="flex flex-col min-h-screen"> {/* Flex container with full height */}
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Dashboard;

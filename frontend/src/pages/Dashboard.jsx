import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Dashboard = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleProfile = () => setProfileOpen(!profileOpen);

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/logout");
      if (response.status === 200) {
        localStorage.removeItem("token");
        alert("Logout successful");
        navigate("/signin");
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      alert("An error occurred during logout");
    }
  };

  return (
    <div className="h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 p-4 flex justify-between items-center">
        {/* Profile Icon Button */}
        <div className="relative">
          <button onClick={toggleProfile} className="text-white focus:outline-none">
            {/* Profile SVG Icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5.121 17.804A9.972 9.972 0 0112 15c2.45 0 4.693.88 6.365 2.353M12 5a3 3 0 110 6 3 3 0 010-6zm0 18c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z" 
              />
            </svg>
          </button>
          {profileOpen && (
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <div className="px-4 py-2 text-gray-800">Username: John Doe</div>
              <div className="px-4 py-2 text-gray-800">Email: john@example.com</div>
            </div>
          )}
        </div>

        {/* Dashboard Button */}
        <button 
          onClick={() => navigate("/dashboard")} 
          className="text-white font-bold"
        >
          Dashboard
        </button>

        {/* Send Money Button */}
        <button 
          onClick={() => navigate("/send-money")} 
          className="text-white font-bold"
        >
          Send Money
        </button>

        {/* Hamburger Icon for Menu */}
        <div className="relative">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>

          {/* Floating Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2">
              <button 
                onClick={handleLogout} 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Logout
              </button>
              <button 
                onClick={() => navigate("/signin")} 
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 w-full text-left"
              >
                Sign in with another account
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Dashboard Content */}
      <div className="p-8">
        <h1 className="text-2xl font-semibold">Welcome to the Dashboard</h1>
        {/* Additional dashboard content here */}
      </div>
    </div>
  );
};

export default Dashboard;

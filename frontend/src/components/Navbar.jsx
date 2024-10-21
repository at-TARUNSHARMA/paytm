import { useState } from 'react';
import { FaUser, FaBars } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      // Simulate a logout API call
      localStorage.removeItem("token");
      alert("Logout successful");
      navigate("/signin");
    } catch (error) {
      alert("Logout failed");
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-blue-700 text-white p-4 flex justify-between items-center">
      {/* Left: Profile Icon */}
      <div className="relative">
        <FaUser
          className="cursor-pointer text-2xl"
          onClick={() => setProfileMenuOpen(!profileMenuOpen)}
        />
        {profileMenuOpen && (
          <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-gray-800">
            <a href="/profile" className="block px-4 py-2 hover:bg-gray-200">My Profile</a>
            <a href="/change-password" className="block px-4 py-2 hover:bg-gray-200">Change Password</a>
            <a href="/account-settings" className="block px-4 py-2 hover:bg-gray-200">Account Settings</a>
          </div>
        )}
      </div>

      {/* Center: Links to other pages */}
      <div className="flex space-x-4 rounded-lg">
        <Link
          to="/dashboard"
          className={`nav-link rounded-lg ${isActive("/dashboard") ? "active" : ""}`} 
        >
          Dashboard
        </Link>
        <Link
          to="/send-money"
          className={`nav-link rounded-lg ${isActive("/send-money") ? "active" : ""}`}
        >
          Send Money
        </Link>
        <Link
          to="/receive-money"
          className={`nav-link rounded-lg ${isActive("/receive-money") ? "active" : ""}`}
        >
          Receive Money
        </Link>
      </div>

      {/* Right: Hamburger Menu */}
      <div className="relative">
        <FaBars
          className="cursor-pointer text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        {menuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 text-gray-800">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200"
            >
              Logout
            </button>
            <a href="/signin" className="block px-4 py-2 hover:bg-gray-200">Sign in with another account</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

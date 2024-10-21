import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/Signin';  // Ensure the path to SignIn is correct
import SignUp from './pages/Signup';  // Ensure the path to SignUp is correct
import Dashboard from './pages/Dashboard';
import SendMoney from "./pages/Sendmoney";
import Receivemoney from "./pages/Receivemoney"; // Ensure the case matches the file name
import './index.css'; // Assuming this file contains Tailwind or other global styles
import './styles/Navbar.css';
import './styles/Footer.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">

        {/* Routing Setup */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send-money" element={<SendMoney />} />
          <Route path="/receive-money" element={<Receivemoney />} />
          {/* You can set a default route that redirects to SignIn */}
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

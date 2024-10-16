import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SignIn from './pages/Signin';  // Ensure the path to SignIn is correct
import SignUp from './pages/Signup';  // Ensure the path to SignUp is correct
import './index.css'; // Assuming this file contains Tailwind or other global styles

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">

        {/* Routing Setup */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          {/* You can set a default route that redirects to SignIn */}
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/Signin';
import SignUp from './pages/Signup';
import Dashboard from './pages/Dashboard';
import SendMoney from "./pages/Sendmoney";
import Receivemoney from "./pages/Receivemoney";
import BankTransfer from "./dashboardcomponent/BankTransfer";
import Recharge from "./dashboardcomponent/Recharge";
import PayBills from "./dashboardcomponent/PayBills";
import CheckBalance from "./dashboardcomponent/CheckBalance";
import TransactionHistory from "./dashboardcomponent/TransactionHistory";
import ProfileSettings from "./dashboardcomponent/ProfileSettings";
import './index.css';
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
          
          {/* Dashboard Internal Routes */}
          <Route path="/bank-transfer" element={<BankTransfer />} />
          <Route path="/recharge" element={<Recharge />} />
          <Route path="/pay-bills" element={<PayBills />} />
          <Route path="/check-balance" element={<CheckBalance />} />
          <Route path="/transaction-history" element={<TransactionHistory />} />
          <Route path="/profile-settings" element={<ProfileSettings />} />

          {/* Default Route */}
          <Route path="/" element={<SignIn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

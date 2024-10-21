import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white p-4 flex justify-between items-center align-bottom">
      <div className="text-sm">
        &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a href="/about" className="footer-link rounded-md">About Us</a>
        <a href="/privacy-policy" className="footer-link rounded-md">Privacy Policy</a>
        <a href="/terms-of-service" className="footer-link rounded-md">Terms of Service</a>
      </div>
      <div className="text-sm">
        <a href="/contact" className="footer-link rounded-md">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;

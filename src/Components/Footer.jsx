import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-slate-800 text-gray-300 py-10">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">About Us</h3>
            <p>We are the leading platform for finding the best laptops for all your needs, from gaming to business and everyday use.</p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="#">Home</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="#">Shop Laptops</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="#">Categories</a>
              </li>
              <li className="mb-2 hover:text-white transition duration-300">
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-4 text-white">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition duration-300">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">&copy; 2024 Laptop Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

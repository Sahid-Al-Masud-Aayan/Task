import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <section className="w-full min-h-screen bg-gradient-to-r from-gray-800 to-black p-16 flex justify-center items-center">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Your Ultimate Laptop Destination</h1>
          <p className="text-xl md:text-2xl mb-8">Find the best laptops for gaming, business, and everyday use!</p>
          <Link to='/laptops' className="bg-yellow-500 text-white px-8 py-4 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
            Shop Now
          </Link>
        </div>
      </section>
      <section className="w-full flex flex-col lg:flex-row items-center justify-center p-10 bg-zinc-700">
      <div className="lg:w-1/2 mb-8 lg:mb-0">
        <img
          src="https://www.zdnet.com/a/img/resize/72318b06db30363868675e06f9ea6f9f9ca743ea/2023/01/27/0b3c9dc0-2024-4b42-997e-a0bbac157656/galaxy-book-3-series.jpg?auto=webp&width=1280" // Replace with your image URL
          alt="Laptop Showcase"
          className="w-[719px] h-[404px] rounded-lg shadow-lg"
        />
      </div>
      <div className="lg:w-1/2 lg:pl-8">
        <h2 className="text-3xl font-bold mb-4">Discover Our Latest Laptops</h2>
        <p className="text-lg text-gray-300">
          Explore our wide range of laptops designed to meet every need—from powerful machines for gaming to sleek ultrabooks for professionals on the go. Our laptops are equipped with the latest processors, high-resolution displays, and ample storage to ensure you can work, play, and create without limitations.
        </p>
        <p className="mt-4 text-lg text-red-500">
          Whether you're looking for a reliable device for school, a high-performance laptop for gaming, or a lightweight companion for travel, we have the perfect options for you. Enjoy fast shipping, excellent customer service, and a warranty on all our laptops.
        </p>
      </div>
    </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center p-6">
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Top Brands</h3>
              <p>We offer the latest laptops from the best brands around the world.</p>
            </div>
            <div className="bg-gradient-to-r from-teal-800 to-blue-800 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Best Prices</h3>
              <p>Get unbeatable deals on the latest laptops and accessories.</p>
            </div>
            <div className="bg-gradient-to-r from-sky-800 to-pink-900 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Fast Delivery</h3>
              <p>We ensure quick and safe delivery to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Section */}
      <section className="w-full py-20 bg-black">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-6">
            <div className="p-10 bg-gradient-to-r from-pink-800 to-purple-900 text-white rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Gaming Laptops</h3>
              <p>Explore our collection of high-performance laptops designed for gamers.</p>
            </div>
            <div className="p-10 bg-gradient-to-r from-sky-800 to-blue-900 text-white rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Business Laptops</h3>
              <p>Find reliable laptops perfect for business professionals and corporate use.</p>
            </div>
            <div className="p-10 bg-gradient-to-r from-teal-800 to-purple-800 text-white rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold mb-4">Student Laptops</h3>
              <p>Affordable and efficient laptops for students and everyday users.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Don't Miss Out on Our Exclusive Deals!</h2>
          <button className="bg-yellow-500 text-black px-10 py-4 rounded-full text-lg hover:bg-yellow-600 transition duration-300">
            Start Shopping
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;


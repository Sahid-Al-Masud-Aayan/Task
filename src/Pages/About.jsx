import React from 'react';

const About = () => {
  return (
    <div className="p-10 bg-gray-600">
      <section className="mb-12 bg-slate-800 p-5 rounded-lg">
        <h1 className="text-4xl font-bold mb-4 text-white/50">About Us</h1>
        <p className="text-lg text-gray-200">
          Welcome to [Your Store Name], where technology meets innovation! We are dedicated to providing our customers with the best laptops on the market. Our mission is to make technology accessible and enjoyable for everyone.
        </p>
      </section>

      <section className="mb-12  bg-slate-800 p-5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-white/50">Our Vision</h2>
        <p className="text-lg text-gray-200 mb-4">
          Our vision is to empower individuals and businesses with cutting-edge technology. We believe in quality, performance, and sustainability, ensuring that our products not only meet your needs but also contribute to a better future.
        </p>
        <img
          src="https://example.com/vision-image.jpg" // Replace with your vision image URL
          alt="Our Vision"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </section>

      <section className="mb-12  bg-slate-800 p-5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-white/50">Our Products</h2>
        <p className="text-lg text-gray-200 mb-4">
          We offer a diverse range of laptops, from high-performance gaming machines to sleek, portable devices perfect for students and professionals. Each product is carefully selected to ensure the best quality and performance.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://example.com/laptop1.jpg" // Replace with your laptop image URL
            alt="Laptop 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://example.com/laptop2.jpg" // Replace with your laptop image URL
            alt="Laptop 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://example.com/laptop3.jpg" // Replace with your laptop image URL
            alt="Laptop 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-12  bg-slate-800 p-5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-white/50">Our Team</h2>
        <p className="text-lg text-gray-200 mb-4">
          Meet our passionate team of technology enthusiasts! Each member is dedicated to ensuring you have the best experience possible, from selecting the right laptop to providing outstanding customer support.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="https://example.com/team1.jpg" // Replace with your team member image URL
            alt="Team Member 1"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://example.com/team2.jpg" // Replace with your team member image URL
            alt="Team Member 2"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <img
            src="https://example.com/team3.jpg" // Replace with your team member image URL
            alt="Team Member 3"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </section>

      <section className="mb-12  bg-slate-800 p-5 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-white/50">Our Commitment</h2>
        <p className="text-lg text-gray-200">
          At [Your Store Name], we are committed to providing exceptional service and quality products. We stand behind every laptop we sell, offering support and guidance to ensure you make the right choice for your needs.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-4 text-white/50">Get in Touch</h2>
        <p className="text-lg text-gray-200 mb-4">
          If you have any questions or need assistance, feel free to reach out to us! We are here to help you every step of the way.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-200">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;


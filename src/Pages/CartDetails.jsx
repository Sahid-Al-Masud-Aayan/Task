import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const CartDetails = () => {

  const navigate= useNavigate()

  const handleBackToHome = () => {
    navigate('/');
  };
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg text-center">
        {/* Thank You Message */}
        <h1 className="text-3xl font-bold text-green-500">Thank You for Your Purchase!</h1>
        <p className="mt-4 text-gray-700">Your order has been successfully placed.</p>
        
        {/* Order Summary */}
        

        {/* Action Buttons */}
        <div className="mt-8">
          <button
            onClick={handleBackToHome}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Back to Home
          </button>

          <Link
            to='/laptops'
            className="ml-4 px-6 py-2 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default CartDetails

import { getDatabase, onValue, push, ref, remove, set } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import {productInfo} from '../Slice.js'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Cart = () => {

    const navigator= useNavigate()
    const dispatcher= useDispatch()

//     const [quantity, setQuantity] = useState(1);

//   // Function to handle increment
//   const increment = () => {
//     setQuantity(prev => prev + 1);
//   };

//   // Function to handle decrement
//   const decrement = () => {
//     if (quantity > 1) {
//       setQuantity(prev => prev - 1);
//     }
//   };

//   // Function to handle direct input change
//   const handleChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     if (value >= 1) {
//       setQuantity(value);
//     } else {
//       setQuantity(1); // Reset to minimum value if input is invalid
//     }
//   };


  const homePage = ()=>{
    navigator('/cart-details')
    };

    const [laptops , setlaptops]= useState([])

    
  
    const db = getDatabase();
  
    useEffect(()=>{
      const starCountRef = ref(db, 'adding to cart/');
      onValue(starCountRef, (snapshot) => {
        let arrayData = []
        snapshot.forEach((item)=>{
            arrayData.push({...item.val(), key: item.key})
        })
        setlaptops(arrayData)
        
  });
    },[])

    const datatofirebase = (e)=>{
        set(push(ref(db, 'order/')), {
            OrderInfo: laptops,
          });
          remove(ref(db, "adding to cart/"+ e.key))
          navigator('/cart-details')
    
    }

    const deleteButton = (e)=>{
        remove(ref(db, "adding to cart/"+ e.key))
      }

  return (
    <>
      <div className="min-h-screen w-full bg-gray-300 p-5">
        <h1 className='w-full h-[50px] bg-slate-800 text-white flex justify-center items-center text-3xl font-bold mb-6'>Your Cart</h1>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {
            laptops.map((item)=>(
     
      <div
       className="w-[350px] bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      
      <div className="">
        <button onClick={()=>deleteButton(item)} className='ml-80 mt-2 text-2xl text-red-600 hover:text-red-900'><MdDelete/></button>
        <img
          className="w-[400px] h-[286px]"
          src={item.MainData.image_url}// Replace with the actual image URL
          alt="Laptop"
          />
      </div>

      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
            {item.MainData.Brand} {item.MainData.Model} 
        </h2>

        {/* Specs */}
        <ul className="text-sm text-gray-700 mt-2 space-y-1 text-start">
          <li><span className="font-semibold">Processor Type:</span> {item.MainData.Processor_Type}</li>
          <li><span className="font-semibold">Generation:</span> {item.MainData.Processor_Generation}</li>
          <li><span className="font-semibold">RAM:</span> {item.MainData.ram}</li>
          <li><span className="font-semibold">Storage:</span> {item.MainData.Storage}</li>
          <li><span className="font-semibold">Display Size:</span> {item.MainData.Display_Size}</li>
        </ul>

        {/* Price */}
        <div className="mt-4 text-2xl font-bold text-orange-900 text-center">
          Tk {item.price}
        </div>

        {/* Add to Cart Button */}
        
        <button
        onClick={()=>datatofirebase(item)}
        className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300 font-semibold relative">
          Purchase
        {/* <button
        onClick={()=>deleteButton(item)}
        className="mt-2 w-full bg-yellow-500 text-white py-2 rounded-lg hover:bg-orange-700 transition duration-300 font-semibold absolute -top-1 left-0 ">
          Purchase
        </button> */}
            </button>
          

          </div>
    </div>
            ))
          }

    </div>
      </div>
    </>
  )
}

export default Cart
//  <div className="flex items-center justify-center">
      
//       <button
//         className="px-3 py-1 bg-gray-200 rounded-l-lg text-xl font-semibold hover:bg-gray-300"
//         onClick={decrement}
//       >
//         −
//       </button>

      
//       <input
//         type="number"
//         value={quantity}
//         onChange={handleChange}
//         className="w-16 h-10 text-center border border-gray-300 outline-none text-lg"
//         min="1"
//       />


//       <button
//         className="px-3 py-1 bg-gray-200 rounded-r-lg text-xl font-semibold hover:bg-gray-300"
//         onClick={increment}
//       >
//         +
//       </button>
//     </div> 
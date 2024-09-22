import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getDatabase, ref, set, push } from "firebase/database";
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {productInfo} from '../Slice.js'
import { db } from '../firebase.js';


const Products = () => {
  const navigator = useNavigate()
  const dispatcher = useDispatch()

  const [api, setApi]= useState([])



  useEffect(()=>{
    axios.get('https://api.jsonbin.io/v3/b/66f00f38e41b4d34e434e839')
    .then((work)=>setApi(work.data.record))
    .catch((wrong)=>console.log(wrong))
    },[])

    const detailsPage = (products)=>{
      navigator('/details')
      dispatcher(productInfo(products))

      localStorage.setItem('MainproductsInfo' , JSON.stringify(products))

      
    }
    const buyPage = (products)=>{
      set(push(ref(db, 'adding to cart/')), {
        MainData: products
      });
    
      
    }

  return (
    <>
      <div className="min-h-screen w-full bg-slate-700 p-5">
        <h1 className='w-full h-[50px] bg-slate-400 text-white flex justify-center items-center text-3xl font-bold mb-6'>All laptops for you</h1>
        <div className="flex justify-center items-center flex-wrap gap-5">
          {
            api.map((laptops, id)=>(
     
      <div
      key={id} className="w-[350px] bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="">
        <img
          className="w-[400px] h-[286px]"
          src={laptops.image_url}// Replace with the actual image URL
          alt="Laptop"
          />
      </div>

      <div className="p-4">
        {/* Product Title */}
        <h2 className="text-2xl font-semibold text-gray-900 text-center">
            {laptops.Brand} {laptops.Model} 
        </h2>

        {/* Specs */}
        <ul className="text-sm text-gray-700 mt-2 space-y-1 text-start">
          <li><span className="font-semibold">Processor Type:</span> {laptops.Processor_Type}</li>
          <li><span className="font-semibold">Generation:</span> {laptops.Processor_Generation}</li>
          <li><span className="font-semibold">RAM:</span> {laptops.ram}</li>
          <li><span className="font-semibold">Storage:</span> {laptops.Storage}</li>
          <li><span className="font-semibold">Display Size:</span> {laptops.Display_Size}</li>
        </ul>

        {/* Price */}
        <div className="mt-4 text-2xl font-bold text-orange-900 text-center">
          Tk {laptops.price*120}
        </div>

        {/* Add to Cart Button */}
        <button
        onClick={()=>detailsPage(laptops)}
        className="mt-2 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-900 transition duration-300">
          View Details
        </button>
        {/* <button
        onClick={()=>buyPage(laptops)}
        className="mt-2 w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button> */}
          </div>
    </div>
            ))
          }

    </div>
      </div>
    </>
  )
}

export default Products

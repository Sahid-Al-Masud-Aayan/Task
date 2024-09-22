import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { getDatabase, ref, set, push } from "firebase/database";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Details = () => {

    const [quantity, setQuantity] = useState(1);

    // Function to handle increment
    const increment = () => {
        setQuantity(prev => prev + 1);
    };
    
    // Function to handle decrement
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };
    
    // Function to handle direct input change
    const handleChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1) {
            setQuantity(value);
        } else {
            setQuantity(1); // Reset to minimum value if input is invalid
        }
    };
    
    const navigator = useNavigate()
    
    const buyPage = (products)=>{
        navigator('/cart')
        set(push(ref(db, 'adding to cart/')), {
            MainData: products,
            price: totalPrice
        });
        
    }
    
    
    const laptopSpecs= useSelector((state)=>state.counter.value)
    const totalPrice = laptopSpecs.price*120 * quantity;
    
    console.log(totalPrice);
    
    
    return (
        <>
      <div className=" h-[615px] bg-white shadow-md">
      <div className="flex flex-col md:flex-row justify-center items-center">
        {/* Laptop Image */}
        <div className="w-full md:w-1/2 p-4">
          <img
            src={laptopSpecs.image_url}
            alt="ASUS VivoBook 15"
            className="w-[590px] h-[508px] rounded-md "
            />
        </div>

        {/* Laptop Details */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-semibold text-gray-800">
            {laptopSpecs.description_1}
          </h2>

          {/* Rating */}

          {/* Special Price */}
          <div className="text-3xl font-bold text-red-600 mt-[20px]">Tk {laptopSpecs.price*120*quantity}</div>

          {/* Quick Overview */}
          <h3 className="text-xl font-semibold text-gray-700 mb-2 mt-[50px]">Quick Overview</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Processor Brand: {laptopSpecs.Processor_Brand}</li>
            <li>Processor Type: {laptopSpecs.Processor_Type}</li>
            <li>Generation: {laptopSpecs.Processor_Generation}</li>
            <li>RAM: {laptopSpecs.ram}</li>
            <li>Storage: {laptopSpecs.Storage}</li>
            <li>Color: {laptopSpecs.color}</li>
            <li>Display Size: {laptopSpecs.Display_Size}</li>
          </ul>
          <div className="flex justify-start items-center gap-10 mt-6">
          <button
        onClick={()=>buyPage(laptopSpecs)}
        className=" w-1/4 h-[50px] bg-green-800 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 ">
          Add to Cart
        </button>
        <div className="flex items-center justify-center">
      
      <button
        className="px-3 py-1 bg-gray-200 rounded-l-lg text-xl font-semibold hover:bg-gray-300"
        onClick={decrement}
      >
        −
      </button>

      
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        className="w-16 h-10 text-center border border-gray-300 outline-none text-lg"
        min="1"
      />


      <button
        className="px-3 py-1 bg-gray-200 rounded-r-lg text-xl font-semibold hover:bg-gray-300"
        onClick={increment}
      >
        +
      </button>
    </div> 
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-300 shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Laptop Specifications</h2>
      
      <div className="">
        {/* Row 1 */}
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Brand</span>
          <span className="text-gray-600">{laptopSpecs.Brand}</span>
        </div>
        {/* Row 2 */}
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Model</span>
          <span className="text-gray-600">{laptopSpecs.Model}</span>
        </div>
        {/* Row 3 */}
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Laptop Series</span>
          <span className="text-gray-600">{laptopSpecs.Laptop_Series}</span>
        </div>
        
        {/* Row 4 */}
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Processor Brand</span>
          <span className="text-gray-600">{laptopSpecs.Processor_Brand}</span>
        </div>
        {/* Row 5 */}
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Generation</span>
          <span className="text-gray-600">{laptopSpecs.Processor_Type}</span>
        </div>
        {/* Row 6 */}
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Warranty</span>
          <span className="text-gray-600">{laptopSpecs.Warranty}</span>
        </div>
        {/* Row 7 */}
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">CPU Cache</span>
          <span className="text-gray-600">{laptopSpecs.CPU_Cache}</span>
        </div>
        {/* Row 8 */}
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Display Size (Inch)</span>
          <span className="text-gray-600">{laptopSpecs.Display_Size}</span>
        </div>
        {/* Row 9 */}
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Display Type</span>
          <span className="text-gray-600">{laptopSpecs.Display_Type}</span>
        </div>
        {/* Row 10 */}
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Display Resolution</span>
          <span className="text-gray-600">{laptopSpecs.Display_Resolution}</span>
        </div>
        {/* Add more rows as needed */}
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Touch Screen</span>
          <span className="text-gray-600">{laptopSpecs.Touch_Screen}</span>
        </div>
        <div className="flex justify-start bg-gray-100  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Color</span>
          <span className="text-gray-600">{laptopSpecs.color}</span>
        </div>
        <div className="flex justify-start bg-white  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">RAM</span>
          <span className="text-gray-600">{laptopSpecs.ram}</span>
        </div>
        <div className="flex justify-start bg-gray-100  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">RAM Type</span>
          <span className="text-gray-600">{laptopSpecs.RAM_Type}</span>
        </div>
        <div className="flex justify-start bg-white  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">RAM Support</span>
          <span className="text-gray-600">{laptopSpecs.Max_RAM_Support}</span>
        </div>
        <div className="flex justify-start bg-gray-100  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Storage</span>
          <span className="text-gray-600">{laptopSpecs.Storage}</span>
        </div>
        <div className="flex justify-start bg-white  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Installed SSD Type</span>
          <span className="text-gray-600">{laptopSpecs.Installed_SSD_Type}</span>
        </div>
        <div className="flex justify-start bg-gray-100  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Storage Upgrade</span>
          <span className="text-gray-600">{laptopSpecs.Storage_Upgrade}</span>
        </div>
        <div className="flex justify-start bg-white  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Installed HDD Type</span>
          <span className="text-gray-600">{laptopSpecs.Installed_HDD_Type}</span>
        </div>
        <div className="flex justify-start bg-gray-100  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Graphics Chipset</span>
          <span className="text-gray-600">{laptopSpecs.Graphics_Chipset}</span>
        </div>
        <div className="flex justify-start bg-white  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Graphics Memory</span>
          <span className="text-gray-600">{laptopSpecs.Graphics_Memory}</span>
        </div>
        <div className="flex justify-start bg-gray-100  p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Display Refresh Rate</span>
          <span className="text-gray-600">{laptopSpecs.Display_Refresh_Rate}</span>
        </div>
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Brightness</span>
          <span className="text-gray-600">{laptopSpecs.Brightness}</span>
        </div>
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Camera</span>
          <span className="text-gray-600">{laptopSpecs.camera}</span>
        </div>
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Backup Time</span>
          <span className="text-gray-600">{laptopSpecs.Backup_Time}</span>
        </div>
        <div className="flex justify-start bg-gray-100 p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Power Adapter</span>
          <span className="text-gray-600">{laptopSpecs.power_adapter}</span>
        </div>
        <div className="flex justify-start bg-white p-2 border-b border-gray-200 gap-6">
          <span className="font-medium text-gray-700">Battery Capacity</span>
          <span className="text-gray-600">{laptopSpecs.Battery_Capacity}</span>
        </div>
        
        <h1 className=' text-gray-700 text-xl font-semibold text-center my-6'>
        {laptopSpecs.description_2}
        </h1>
      </div>
    </div>
    </>
  )
}

export default Details

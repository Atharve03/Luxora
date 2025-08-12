import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        {/* Column 1 */}
        <div>
          <img src={assets.luxora} className="mb-5 w-32" alt="Luxora Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            At LUXORA, we believe in quality, affordability, and timeless designs.
            Your satisfaction is our top priority.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <p className="text-xl font-medium mb-5 py-11">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 px-4">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 py-11">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1 234 567 890</li>
            <li>contact@luxora.com</li>
            <li>123 Luxury St, New York, USA</li>
          </ul>
        </div>


     

      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @Luxora.com -All Right Reserved </p>
      </div>
    </div>
  )
}

export default Footer

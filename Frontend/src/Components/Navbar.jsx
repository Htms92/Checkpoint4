import React from 'react';
import './Style.css';
import reportWebVitals from './reportWebVitals';
import { Link } from "react-router-dom";


reportWebVitals();

export default function Navbar() {
    return (

        <section class="container" id="Navigation">
      <img src="Assets/crown.jpg" alt="Logo" class="logo" />

      <ul>

      <Link
              to="/Home"
              className="px-2 uppercase mt-8 p-6 bg-secondary rounded-md w-full text-center uppercase text-white"
            >
              Home
            </Link>


            <Link
              to="/Royalfamily"
              className="px-2 uppercase mt-8 p-6 bg-secondary rounded-md w-full text-center uppercase text-white"
            >
              Royal Family
            </Link>
          
            <Link
              to="/Royalassets"
              className="px-2 uppercase mt-8 p-6 bg-secondary rounded-md w-full text-center uppercase text-white"
            >
              Royal Assets
            </Link>

            <Link
              to="/Contactus"
              className="px-2 uppercase mt-8 p-6 bg-secondary rounded-md w-full text-center uppercase text-white"
            >
              Contact us 
            </Link>
      </ul>
      
    </section>
    );
    }

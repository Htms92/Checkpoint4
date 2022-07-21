import React from 'react';
import './Style.css';
import reportWebVitals from '../reportWebVitals';
import Navbar from 'Navbar.jsx';

reportWebVitals();

export default function Home() {
    return (

      <div className="body">

<Navbar></Navbar>

<section class="container">
      <h2>The Royal Family</h2>

      <div class="flex-container">
        <div>
          <img
            src="assets/royal-Aeetes.jpg"
            alt="King Aeetes"
            width="200"
            height="200"
          />
          <h4><b>King Aeetes</b></h4>
        </div>

        <div>
          <img
            src="assets/royal-Madeas.jpg"
            alt="Princess Madeas"
            width="200"
            height="200"
          />

          <h4><b>Princess Madeas</b></h4>
        </div>

        <div>
          <img
            src="assets/royal-Idyia.jpg"
            alt="Queen Idyia"
            width="200"
            height="200"
          />
          <h4><b>Queen Idyia</b></h4>
        </div>
      </div>
    </section>

</div>
);
}
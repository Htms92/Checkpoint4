import React from 'react';
import './Style.css';
import reportWebVitals from '../reportWebVitals';
import Navbar from 'Navbar.jsx';

reportWebVitals();

export default function Home() {
    return (
        <div className="body">

<Navbar></Navbar>

<h2>
      The Kingdom's Royal Assets
    </h2>

    <section class="”container”" id="table">
      <table class="center">
        <thead id="head">
          <tr>
            <th>Asset Name</th>
            <th>Number</th>
            <th>Worth</th>
          </tr>
        </thead>

        <tbody id="inventary">
          <tr>
            <td>Stables</td>
            <td>42</td>
            <td>6000</td>
          </tr>

          <tr>
            <td>Castles</td>
            <td>4</td>
            <td>2400</td>
          </tr>

          <tr>
            <td>Guards</td>
            <td>1000</td>
            <td>1000</td>
          </tr>

          <tr>
            <td>Wagons</td>
            <td>18</td>
            <td>4000</td>
          </tr>

          <tr>
            <td>Livestock</td>
            <td>5000</td>
            <td>4000</td>
          </tr>

          <tr>
            <td>Armor</td>
            <td>9000</td>
            <td>4000</td>
          </tr>

          <tr>
            <td>Canons</td>
            <td>100</td>
            <td>1100</td>
          </tr>
        </tbody>
      </table>
    </section>


</div>
);
}
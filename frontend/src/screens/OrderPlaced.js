import React from 'react';
import CheckoutSteps from '../components/CheckoutSteps';

export default function OrderPlaced() {
  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <br></br>
      <div>
        <br></br>
        <div id="home">
          <h1 id="our"> Yay! Order Placed !!!</h1>
          <br></br>
          <p id="endmsg">Sit back and Relax, Your order is on your way 😋 </p>
        </div>
      </div>
    </div>
  );
}

// import functions and grab DOM elements
import { renderMotorcycle } from './render-motorcycles.js';
import { motorcycles } from './motorcycles.js';
// initialize global state
const productList = document.getElementById('product-list');
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
for (let motorcycle of motorcycles){
  const motorcycleCard = renderMotorcycle(motorcycle);
  productList.append(motorcycleCard);
}
import { renderMotorcycle } from './render-motorcycles.js';
// import { motorcycles } from './motorcycles.js';
import { getProducts } from './utils.js';


const productList = document.getElementById('product-list');

const motorcycles = getProducts();
for (let motorcycle of motorcycles){
    const motorcycleCard = renderMotorcycle(motorcycle);
    productList.append(motorcycleCard);
}

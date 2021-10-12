import { motorcycles } from '../motorcycles.js';
import { cartContent } from '../data/cart-data.js';
import { calcOrderTotal, findById } from '../utils.js';
import { renderLineItem } from './render-line-items.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cartContent){
    const motorcycleData = findById(cartItem.id, motorcycles);

    const tr = renderLineItem(cartItem, motorcycleData);
    tbody.appendChild(tr);
}

const orderTotal = calcOrderTotal(cartContent, motorcycles);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = orderTotal;
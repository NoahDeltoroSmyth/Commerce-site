import { motorcycles } from '../motorcycles.js';
import { cartContent } from '../data/cart-data.js';
import { findById } from '../utils.js';

const tbody = document.getElementById('table-body');

for (let cartItem of cartContent){
    const motorcycleData = findById(cartItem.id, motorcycles);

    const tr = document.createElement('tr');

    const tdProduct = document.createElement('td');
    tdProduct.textContent = motorcycleData.manufacturer;

    const tdPrice = document.createElement('td');
    tdPrice.textContent = motorcycleData.price;

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;

    const tdTotal = document.createElement('td');
    tdTotal.textContent = cartItem.qty * motorcycleData.price;

    tr.append(tdProduct, tdPrice, tdQty, tdTotal);
    tbody.appendChild(tr);
}
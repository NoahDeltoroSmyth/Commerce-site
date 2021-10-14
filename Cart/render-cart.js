import { motorcycles } from '../motorcycles.js';
//import { cartContent } from '../data/cart-data.js';
import { calcOrderTotal, findById, getCart, clearCart } from '../utils.js';
import { renderLineItem } from './render-line-items.js';

const cart = getCart('shoppingcart');

const tbody = document.getElementById('table-body');
for (let cartItem of cart){
    const motorcycleData = findById(cartItem.id, motorcycles);

    const tr = renderLineItem(cartItem, motorcycleData);
    tbody.appendChild(tr);
}

const orderTotal = calcOrderTotal(cart, motorcycles);
const tdOrderTotal = document.getElementById('total');
tdOrderTotal.textContent = orderTotal;

const orderButton = document.getElementById('order-button');
orderButton.addEventListener('click', () => {
    clearCart();
});
import { addProduct } from '../utils.js';

const form = document.getElementById('product-form');

form.addEventListener('submit', (expect)=> {
    expect.preventDefault();
    const data = new FormData(form);
    const newMoto = {
        id: data.get('id'),
        manufacturer: data.get('manufacturer'),
        model: data.get('model'),
        img: data.get('img'),
        engine: data.get('img'),
        description: data.get('description'),
        price: Number(data.get('price'))

    };
    addProduct(newMoto);
    window.location.replace('..');
    alert('New Motorcycle has been added');
    
});
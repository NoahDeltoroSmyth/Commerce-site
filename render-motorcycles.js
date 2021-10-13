// moto object 
// {
//     id: '1',
//     img: './assets/cb360.jpeg',
//     manufaturer: 'Honda',
//     model: 'CB360',
//     engine: 'Twin, 356cc, air cooled',
//     description: 'A 4-stroke, twin cylinder vintage motorcyle',
//     price: 1400
// },
import { addItem } from './utils.js';


export function renderMotorcycle(motorcycle){
    const motorcycleCard = document.createElement('div');
    motorcycleCard.classList.add('motorcycle-card');

    const motorcycleManufacturer = document.createElement('h1');
    motorcycleManufacturer.textContent = motorcycle.manufacturer;

    const motorcycleModel = document.createElement('h3');
    motorcycleModel.textContent = motorcycle.model;

    const img = document.createElement('img');
    img.src = motorcycle.img;

    const engine = document.createElement('p');
    engine.textContent = motorcycle.engine;

    const description = document.createElement('p');
    description.textContent = motorcycle.description;

    const price = document.createElement('p');
    price.textContent = motorcycle.price;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.id = motorcycle.id;
    button.classList.add = ('add-button');

    motorcycleCard.append(motorcycleManufacturer, motorcycleModel, img, engine, description, price, button);

    button.addEventListener('click', () => {
        addItem(button.id);
    });

    return motorcycleCard;   
}

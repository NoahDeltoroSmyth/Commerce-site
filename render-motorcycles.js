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

export function renderMotorcycle(motorcycle){
    const motorcycleCard = document.createElement('div');
    motorcycleCard.classList.add('motorcycle-card');

    const motorcycleHeader = document.createElement('h2');
    motorcycleHeader.textContent = motorcycle.manufacturer, motorcycle.model;

    const img = document.createElement('img');
    img.src = motorcycle.img;

    const engine = document.createElement('p');
    engine.textContent = motorcycle.engine;

    const description = document.createElement('p');
    description.textContent = motorcycle.description;

    const price = document.createElement('p');
    price.textContent = motorcycle.price;

    motorcycleCard.append(motorcycleHeader, img, engine, description, price);
    return motorcycleCard;
}
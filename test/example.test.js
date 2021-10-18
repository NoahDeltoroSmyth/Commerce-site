// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { motorcycles } from '../motorcycles.js';
import { addItem, findById, addProduct, getProducts } from '../utils.js';

const test = QUnit.test;

test('findById returns item matching ID', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = {
        id: '1',
        manufacturer: 'Honda',
        model: 'CB360',
        img: './assets/cb360.jpeg',
        engine: 'Twin, 356cc, air cooled',
        description: 'A custom 4-stroke, twin cylinder vintage motorcyle',
        price: 10
    };
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = findById('1', motorcycles);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
});

test('addItem() function', (expect) => {
    const expected = [
        { id: '1', qty: 2 },
        { id:'2', qty: 1 },
        { id:'3', qty: 1 },
        { id:'4', qty: 1 },
        { id:'5', qty: 1 },
    ];

    const mockCartData = [
        { id: '1', qty: 1 },
        { id:'2', qty: 1 },
        { id:'3', qty: 1 },
        { id:'4', qty: 1 },
        { id:'5', qty: 1 },
    ];

    localStorage.setItem('shoppingcart', JSON.stringify(mockCartData));

    const actual = addItem('1');

    expect.deepEqual(actual, expected);

});

test('addProduct() function', (expect)=> {
    let products = getProducts();
    const newProduct = {
        id: '6',
        manufacturer: 'Triumph',
        model: 'CB360',
        img: './assets/triumph.jpeg',
        engine: 'Twin, 356cc, air cooled',
        description: 'A custom 4-stroke, twin cylinder vintage motorcyle',
        price: 30
    };

    addProduct(newProduct);

    products = getProducts();
    expect.equal(products.length, 6);
});
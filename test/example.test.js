// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { motorcycles } from '../motorcycles.js';
import { findById } from '../utils.js';

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


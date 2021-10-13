export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calcOrderTotal(cart, product) {
    let orderTotal = 0;
    for (let item of cart){
        const moto = findById(item.id, product);
        orderTotal = orderTotal + moto.price * item.qty;
    }
    return orderTotal;
}

export function getCart(){
    const cartString = localStorage.getItem('shoppingcart') || '[]';
    const cart = JSON.parse(cartString);
    return cart;
}

export function addItem(id){
}
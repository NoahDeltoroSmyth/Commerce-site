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
    //GET
    const cart = getCart();
    const cartItem = findById(id, cart);
    //MODIFY
    if (cartItem){
        cartItem.qty++;
    } else {
        const newItem = { id: id, qty: 1 };
        cart.push(newItem);
    }
    //SET
    const stringCart = JSON.stringify(cart);
    localStorage.setItem('shoppingcart', stringCart);
    return cart;
}

export function clearCart(){
    localStorage.removeItem('shoppingcart');
    window.location.replace('..');
}


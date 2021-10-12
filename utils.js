export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function calcOrderTotal(cart, motorcycles) {
    let orderTotal = 0;
    for (let item of cart){
        const moto = findById(item.id, motorcycles);
        orderTotal = orderTotal + moto.price * item.qty;
    }
    return orderTotal;
}
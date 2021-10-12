export function renderLineItem(cartItem, motorcycleData) {
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
    
    return tr;
}
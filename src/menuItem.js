export default createMenuItem;

function createMenuItem(num) {
    const item = document.createElement('div');
    const itemText = document.createElement('div');
    const itemPrice = document.createElement('div');
    const itemTitle = document.createElement('div');

    item.classList.add('menuItem');
    if (num == 1 || num == 3 || num == 5) {
        item.classList.add('left');
    }
    else {
        item.classList.add('right');
    }
    item.classList.add(`item${num}`);
    
    switch (num){
        case 1:
            itemPrice.innerHTML = '$4.99';
            itemTitle.innerHTML = 'Beverages and Drinks';
            break;
        case 2:
            itemPrice.innerHTML = '$9.99';
            itemTitle.innerHTML = 'Burger + Fries';
            break;
        case 3:
            itemPrice.innerHTML = '$9.99 - $29.99';
            itemTitle.innerHTML = 'Various Pizzas';
            break;
        case 4:
            itemPrice.innerHTML = '$17.99';
            itemTitle.innerHTML = 'Beef/Chicken/Fish Ramen';
            break;
        case 5:
            itemPrice.innerHTML = '$24.99';
            itemTitle.innerHTML = 'Various Sushi';
            break;
        case 6:
            itemPrice.innerHTML = '$9.99';
            itemTitle.innerHTML = 'Fried Chicken';
            break;
    }

    itemText.appendChild(itemPrice);
    itemText.appendChild(itemTitle);
    itemText.classList.add('itemText');
    item.appendChild(itemText);
    return item;
}
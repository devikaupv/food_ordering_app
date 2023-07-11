import React from 'react';
import pizzaImage from './pizza.jpg';
import burgerImage from './burger.jpg';
import pastaImage from './pasta.jpg';
import saladImage from './salad.jpg';
import dessertImage from './dessert.jpg';
import './menu_style.css';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Pizza', description: 'A harmonious blend of premium ingredients, flavors, and gooey melted cheese, creating the ultimate taste sensation!', price: 10 },
    { id: 2, name: 'Burger', description: 'A mouthwatering masterpiece that combines a succulent patty, fresh toppings, and a toasted bun, delivering burger perfection with every bite!', price: 15 },
    { id: 3, name: 'Pasta', description: 'A tantalizing medley of al dente pasta, rich sauces, and savory ingredients, creating a pasta dish that will transport your taste buds to culinary heaven!', price: 12 },
    { id: 4, name: 'Salad', description: 'A vibrant ensemble of crisp, farm-fresh greens, colorful vegetables, and zesty dressings, creating a refreshing and nutritious salad that will leave you feeling nourished and satisfied!', price: 8 },
    { id: 5, name: 'Dessert', description: 'A decadent delight featuring layers of velvety chocolate, luscious cream, and a drizzle of caramel, creating a dessert that will satisfy your sweet cravings and leave you in pure bliss!', price: 10 },
  ];

  const getImageForItem = (itemName) => {
    switch (itemName) {
      case 'Pizza':
        return pizzaImage;
      case 'Burger':
        return burgerImage;
      case 'Pasta':
        return pastaImage;
      case 'Salad':
        return saladImage;
      case 'Dessert':
        return dessertImage;
      default:
        return null;
    }
  };

  return (
    <div className="menu-container">
      {menuItems.map((item) => (
        <div key={item.id} className="card">
          <img src={getImageForItem(item.name)} className="card-img-top" alt={item.name} style={{ width: '400px', height: '400px' }} />
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p>Price: ${item.price}</p>
            <a href="/Cart" className="btn btn-primary">Order Now</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;





